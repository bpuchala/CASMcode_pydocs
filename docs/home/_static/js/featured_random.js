/* Pick N featured cards on each visit, weighted by log(1 + citation_count).
 * Cards are emitted with id="featured-<key>" and class "featured-card"
 * (hidden by featured_random.css). This script fetches the weights table
 * and unhides N picked entries. */
(function () {
    // Default N for the index aggregator. The carousel emits
    // data-n="..." on #featured-weights to override.
    var DEFAULT_N = 3;

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

    function loadConfig() {
        // Weights are inlined into the page by build_cards.py as a
        // <script type="application/json"> tag — avoids the file:// CORS
        // block that prevents fetch()ing a sibling file in static builds.
        var el = document.getElementById("featured-weights");
        if (!el) {
            console.warn("featured_random: no #featured-weights element found");
            return null;
        }
        var n = parseInt(el.getAttribute("data-n"), 10);
        if (!(n > 0)) {
            n = DEFAULT_N;
        }
        try {
            return { weights: JSON.parse(el.textContent), n: n };
        } catch (e) {
            console.warn("featured_random: invalid weights JSON:", e);
            return null;
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        var cfg = loadConfig();
        if (cfg) {
            reveal(pickWeighted(cfg.weights, cfg.n));
        }
    });
})();
