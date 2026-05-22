"""Update CASMcode_pydocs to provide useful tables in the overview

Requires:
- CASMCODE_PROJECT_DIR pointing to the CASMcode_project repository root.
- CASMCODE_CITATIONS_DIR pointing to the CASMcode_citations repository root,
  with `python scripts/build_cards.py` already run there so `dist/_static/`
  is populated.

Run from the CASMcode_pydocs repository root.
"""

import json
import os
import re
import shutil


def _escape_html(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _generate_alloy_manager_pages():
    """Generate placeholder Alloy Manager directory pages from local JSON.

    Mirrors the project_structure pattern (anchor-named .rst per section, with
    Location + Contents table) but uses a JSON source that lives in this repo,
    since the alloy manager docs don't yet have an upstream home in
    CASMcode_project. When they do, this can be swapped for a copy-from-source
    block like project_structure above.
    """
    json_path = os.path.join(
        "src", "home", "_scripts", "alloy_manager_directory_tables.json"
    )
    with open(json_path, "r") as f:
        sections = json.load(f)

    out_dir = os.path.join("src", "home", "reference", "alloy_manager_structure")
    if os.path.exists(out_dir):
        shutil.rmtree(out_dir)
    os.makedirs(out_dir)

    for section in sections:
        anchor = section["anchor"]
        title = section["section"]
        location = section["location"]
        files = section.get("files", [])

        lines = [
            f".. _{anchor}:",
            "",
            title,
            "=" * len(title),
            "",
            ".. raw:: html",
            "",
            '    <dl class="casm-list">',
            '    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">',
            '        <dt class="casm-part">Location:</dt>',
            f'        <dd class="casm-part"><code>{_escape_html(location)}</code></dd>',
            "    </div>",
            '    <dt class="casm-part">Contents:</dt>',
            '    <dd class="casm-part">',
            '    <table class="casm-table">',
            "        <tr>",
            "            <th>Name</th>",
            "            <th>Description</th>",
            "            <th>Format</th>",
            "        </tr>",
        ]
        for file in files:
            name = _escape_html(file["name"])
            desc = _escape_html(file["description"])
            href = _escape_html(file["format"]["href"])
            text = _escape_html(file["format"]["text"])
            lines.extend(
                [
                    "        <tr>",
                    f"            <td><code>{name}</code></td>",
                    f"            <td>{desc}</td>",
                    f'            <td><a href="{href}">{text}</a></td>',
                    "        </tr>",
                ]
            )
        lines.extend(
            [
                "    </table>",
                "    </dd>",
                "    </dl>",
            ]
        )

        out_path = os.path.join(out_dir, f"{anchor}.rst")
        with open(out_path, "w") as out:
            out.write("\n".join(lines) + "\n")
        print(f"Wrote {out_path}")


CASMCODE_PROJECT_DIR = os.environ.get("CASMCODE_PROJECT_DIR")
if CASMCODE_PROJECT_DIR is None:
    raise RuntimeError(
        "CASMCODE_PROJECT_DIR environment variable is not set. "
        "Set it to the path of the CASMcode_project repository root."
    )

CASMCODE_CITATIONS_DIR = os.environ.get("CASMCODE_CITATIONS_DIR")
if CASMCODE_CITATIONS_DIR is None:
    raise RuntimeError(
        "CASMCODE_CITATIONS_DIR environment variable is not set. "
        "Set it to the path of the CASMcode_citations repository root."
    )

# Copy per-section pages for multi-page navbar navigation
src_dir = os.path.join(CASMCODE_PROJECT_DIR, "doc", "reference", "project_structure")
dst_dir = os.path.join("src", "home", "reference", "project_structure")
if os.path.exists(dst_dir):
    shutil.rmtree(dst_dir)
shutil.copytree(src_dir, dst_dir)
print(f"Copied {src_dir}/ -> {dst_dir}/")

# Read the generated toctree snippet
toctree_src = os.path.join(
    CASMCODE_PROJECT_DIR, "doc", "reference", "project_structure_toctree.rst"
)
with open(toctree_src, "r") as f:
    new_toctree = f.read().rstrip("\n")

# Update the toctree section in project_structure_reference.rst in-place.
# The section is delimited by marker comments so the rest of the file
# (hand-edited intro text) is preserved.
ref_path = os.path.join("src", "home", "reference", "project_structure_reference.rst")
with open(ref_path, "r") as f:
    content = f.read()

begin_marker = ".. BEGIN GENERATED TOCTREE"
end_marker = ".. END GENERATED TOCTREE"

pattern = re.compile(
    rf"({re.escape(begin_marker)}.*?\n)(.*?)({re.escape(end_marker)})",
    re.DOTALL,
)

replacement = (
    f"{begin_marker} - updated by src/home/_scripts/update.py\n\n"
    f"{new_toctree}\n\n"
    f"{end_marker}"
)

new_content, n = pattern.subn(replacement, content)
if n == 0:
    raise RuntimeError(
        f"Markers '{begin_marker}' / '{end_marker}' not found in {ref_path}. "
        "Cannot update toctree."
    )

with open(ref_path, "w") as f:
    f.write(new_content)
print(f"Updated toctree in {ref_path}")

# Generate placeholder Alloy Manager directory pages from local JSON.
_generate_alloy_manager_pages()

# Copy generated featured-publications cards + assets from CASMcode_citations.
# The publications/ subtree is fully owned by CASMcode_citations, so it's
# replaced wholesale. The js/ and css/ destinations contain unrelated files,
# so featured_random.{js,css} are copied individually.
citations_dist = os.path.join(CASMCODE_CITATIONS_DIR, "dist", "_static")
if not os.path.isdir(citations_dist):
    raise RuntimeError(
        f"{citations_dist} not found. Run `python scripts/build_cards.py` "
        f"in {CASMCODE_CITATIONS_DIR} first."
    )

pubs_src = os.path.join(citations_dist, "publications")
pubs_dst = os.path.join("src", "home", "_static", "publications")
if os.path.exists(pubs_dst):
    shutil.rmtree(pubs_dst)
shutil.copytree(pubs_src, pubs_dst)
print(f"Copied {pubs_src}/ -> {pubs_dst}/")

for rel in (
    "js/featured_random.js",
    "css/featured_random.css",
    "js/publications_list.js",
    "css/publications_list.css",
    "js/list.min.js",
    "js/tom-select.complete.min.js",
    "css/tom-select.bootstrap5.min.css",
):
    src = os.path.join(citations_dist, rel)
    dst = os.path.join("src", "home", "_static", rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    print(f"Copied {src} -> {dst}")
