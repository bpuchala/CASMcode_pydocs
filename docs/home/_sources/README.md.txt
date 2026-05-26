
Preparation
-----------

Make sure the CASM packages installed are the ones that should be documented.

Scripts
-------

Scripts are used to generate some parts of the documentation:

- the CASM project directory structure reference is copied from CASMcode_project

To update, do the following from the repository root directory:

    export CASMCODE_PROJECT_DIR=/path/to/CASMcode_project
    python src/home/_scripts/update.py

Build
-----

To regenerate _autosummary stub files and html for the Python package references, use:

    sphinx-build -a -E -b html src/home docs/home

For parallel builds, use `-j`:

    sphinx-build -a -E -j 10 -b html src/home docs/home