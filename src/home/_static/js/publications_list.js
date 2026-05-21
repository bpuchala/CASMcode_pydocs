/* Filterable / sortable publications page.
 *
 * The build script emits every uses_casm card inside #publications-list, plus
 * a <script id="publications-meta"> JSON sidecar with per-paper metadata. On
 * DOMContentLoaded this script:
 *   1. Reads the sidecar and applies data-* attributes (year, citations,
 *      methods, title, authors) to each card.
 *   2. Adds .featured-visible to image-having cards so the featured_random.css
 *      "hide by default" rule doesn't apply here.
 *   3. Initialises list.js for search + sort and Tom Select for the multi-
 *      select method filter.
 *
 * Bails early if #publications-list isn't on the current page — same script
 * loads site-wide via conf.py html_js_files but only runs on this page.
 */
(function () {
    function normalizeKey(k) {
        // docutils normalises class names: lowercase + underscore -> hyphen.
        // papers.json keys (e.g. Paetsch2026_1) render as .publication-paetsch2026-1.
        return k.toLowerCase().replace(/_/g, "-");
    }

    function applyDataAttrs(meta) {
        Object.keys(meta.papers).forEach(function (key) {
            var p = meta.papers[key];
            var el = document.querySelector(".publication-" + normalizeKey(key));
            if (!el) return;
            el.setAttribute("data-year", p.year);
            el.setAttribute("data-citations", String(p.citation_count));
            el.setAttribute("data-methods", (p.methods || []).join(" "));
            el.setAttribute("data-title", p.title);
            el.setAttribute("data-authors", p.authors);
            el.setAttribute("data-has-image", p.has_image ? "true" : "false");
            if (p.has_image) {
                // featured_random.css hides .featured-card without .featured-visible;
                // on this page we want every card shown.
                el.classList.add("featured-visible");
            }
        });
    }

    function collectMethodOptions(meta) {
        var seen = {};
        Object.keys(meta.papers).forEach(function (k) {
            (meta.papers[k].methods || []).forEach(function (m) { seen[m] = true; });
        });
        return Object.keys(seen).sort().map(function (m) {
            return { value: m, text: meta.method_labels[m] || m };
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        var container = document.getElementById("publications-list");
        if (!container) return;

        var metaEl = document.getElementById("publications-meta");
        if (!metaEl) {
            console.warn("publications_list: missing #publications-meta");
            return;
        }
        var meta;
        try {
            meta = JSON.parse(metaEl.textContent);
        } catch (e) {
            console.warn("publications_list: invalid meta JSON:", e);
            return;
        }

        applyDataAttrs(meta);

        // list.js's { attr } mode reads attrs from a CHILD element with class
        // matching `name`. To read data-* directly off the card div, use the
        // { data: [...] } form. Each suffix becomes accessible via
        // item.values()[suffix].
        var list = new List("publications-list", {
            valueNames: [
                { data: ["title", "authors", "year", "citations", "methods"] }
            ],
            listClass: "list",
            searchClass: "publications-search"
        });

        var select = new TomSelect(".publications-methods", {
            plugins: ["remove_button"],
            placeholder: "Filter by method",
            options: collectMethodOptions(meta),
            maxItems: null,
            hidePlaceholder: false
        });

        select.on("change", function () {
            var picked = select.getValue() || [];
            if (!picked.length) {
                list.filter();
                return;
            }
            list.filter(function (item) {
                var methods = (item.values().methods || "").split(" ").filter(Boolean);
                // AND semantics: card must have every picked method.
                return picked.every(function (m) { return methods.indexOf(m) !== -1; });
            });
        });

        var sortEl = document.querySelector(".publications-sort");
        if (sortEl) {
            sortEl.addEventListener("change", function (e) {
                switch (e.target.value) {
                    case "year-asc":
                        list.sort("year", { order: "asc" });
                        break;
                    case "citations-desc":
                        // list.js's default naturalSort handles "2" vs "126"
                        // numerically — no custom comparator needed.
                        list.sort("citations", { order: "desc" });
                        break;
                    case "year-desc":
                    default:
                        list.sort("year", { order: "desc" });
                        break;
                }
            });
        }
    });
})();
