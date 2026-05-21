/* Pick N featured cards on each visit, weighted by log(1 + citation_count).
 * Cards are emitted with id="featured-<key>" and class "featured-card"
 * (hidden by featured_random.css). This script fetches the weights table
 * and unhides N picked entries. */
(function () {
    var N = 3;

    function pickWeighted(weights, n) {
        // Weighted sampling without replacement (Efraimidis & Spirakis).
        var keys = [];
        for (var k in weights) {
            if (weights.hasOwnProperty(k) && weights[k] > 0) {
                var u = Math.random();
                var score = Math.log(u) / weights[k];  // larger = picked first
                keys.push([score, k]);
            }
        }
        keys.sort(function (a, b) { return b[0] - a[0]; });
        return keys.slice(0, n).map(function (kv) { return kv[1]; });
    }

    function normalizeKey(k) {
        // docutils normalizes class names: lowercase, underscore -> hyphen.
        // Our papers.json keys (Paetsch2026_1) render as .featured-paetsch2026-1.
        return k.toLowerCase().replace(/_/g, "-");
    }

    function reveal(keys) {
        keys.forEach(function (k) {
            var el = document.querySelector(".featured-" + normalizeKey(k));
            if (el) {
                el.classList.add("featured-visible");
            }
        });
    }

    function loadWeights() {
        // Weights are inlined into the page by build_cards.py as a
        // <script type="application/json"> tag — avoids the file:// CORS
        // block that prevents fetch()ing a sibling file in static builds.
        var el = document.getElementById("featured-weights");
        if (!el) {
            console.warn("featured_random: no #featured-weights element found");
            return null;
        }
        try {
            return JSON.parse(el.textContent);
        } catch (e) {
            console.warn("featured_random: invalid weights JSON:", e);
            return null;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var weights = loadWeights();
        if (weights) {
            reveal(pickWeighted(weights, N));
        }
    });
})();
