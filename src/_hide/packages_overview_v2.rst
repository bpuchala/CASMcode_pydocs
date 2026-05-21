.. include:: ../_shared/logo_and_spacing.rst

Distribution packages
=====================

CASM consists of a collection of distribution packages that implement different functionality.
Below are links to the documentation for the latest release of the each package. The Python namespace `libcasm` is used for CASM_ packages that include C++ implementations. The Python namespace `casm` is used for pure Python CASM_ packages.


libcasm-global
--------------

CASM global constants and tools

- **libcasm.casmglobal** - CASM global constants
- **libcasm.counter** - Loop over many incrementing variables in one loop

``pip install libcasm-global`` — Docs: `[2.2.0] <../../libcasm/global/2.0/>`_ |GitHub_global|_ |PyPI_global|_


libcasm-xtal
------------

CASM crystallography

- **libcasm.xtal** - Data structures for lattices, crystal structures, DoF, symmetry operations, and crystal sites; methods for enumerating superlattices, super structures, primitive/reduced cells, and symmetry operations.

``pip install libcasm-xtal`` — Docs: `[2.2.0] <../../libcasm/xtal/2.0/>`_ |GitHub_xtal|_ |PyPI_xtal|_


libcasm-composition
-------------------

CASM composition axes, conversions, and calculations

- **libcasm.composition** - Standard composition axes construction; mol and parametric composition conversions; sublattice composition calculations.

``pip install libcasm-composition`` — Docs: `[2.2.0] <../../libcasm/composition/2.0/>`_ |GitHub_composition|_ |PyPI_composition|_


libcasm-mapping
---------------

CASM structure mapping methods

- **libcasm.mapping** - Low-cost lattice, atom, and structure mappings with symmetry; interpolated structures; symmetrically equivalent mappings; custom mapping searches.

``pip install libcasm-mapping`` — Docs: `[2.3.0] <../../libcasm/mapping/2.0/>`_ |GitHub_mapping|_ |PyPI_mapping|_


libcasm-clexulator
------------------

CASM cluster expansion calculator (clexulator) package

- **libcasm.clexulator** - DoF data structures; neighbor list generation; cluster expansion basis function evaluation; order parameter evaluation.

This package uses basis functions generated elsewhere (i.e. `casm-bset`) and written as CASM clexulator source code.

``pip install libcasm-clexulator`` — Docs: `[2.2.0] <../../libcasm/clexulator/2.0/>`_ |GitHub_clexulator|_ |PyPI_clexulator|_


libcasm-configuration
---------------------

CASM configuration comparison and enumeration

- **libcasm.clusterography** - Unique cluster enumeration and orbits; impact table neighborhoods.
- **libcasm.configuration** - Supercell and configuration classes; configuration comparison and copying; configurations from mapped structures.
- **libcasm.enumerate** - Configuration enumeration methods.
- **libcasm.irreps** - Irreducible space decompositions.
- **libcasm.local_configuration** - Local configuration representation, comparison, and transformation.
- **libcasm.occ_events** - Occupation events for KMC; event comparison and enumeration.
- **libcasm.sym_info** - Crystal factor/point groups; group-subgroup relationships; symmetry representations for site coordinates and DoF values.

``pip install libcasm-configuration`` — Docs: `[2.2.0] <../../libcasm/configuration/2.0/>`_ |GitHub_configuration|_ |PyPI_configuration|_


casm-bset
---------

CASM cluster expansion basis set construction module

- **casm.bset** - Coupled cluster expansion Hamiltonians; C++ clexulator code generation; symmetry adapted functions.

See the `casm-bset documentation <https://prisms-center.github.io/CASMcode_pydocs/casm/bset/2.0/installation.html#environment-variable-configuration>`_ for environment configuration instructions.

``pip install casm-bset`` — Docs: `[2.1.0] <../../casm/bset/2.0/>`_ |GitHub_bset|_ |PyPI_bset|_


libcasm-monte
-------------

CASM building blocks for Monte Carlo simulations

- **libcasm.monte** - Sampling; equilibration, convergence checking, and statistics; results IO; supercell index conversions; generic event definitions and selection; Ising model examples.

``pip install libcasm-monte`` — Docs: `[2.2.0] <../../libcasm/monte/2.0/>`_ |GitHub_monte|_ |PyPI_monte|_


libcasm-clexmonte
-----------------

CASM cluster expansion Monte Carlo simulations

``pip install libcasm-clexmonte`` — Docs: `[2.2.0] <../../libcasm/clexmonte/2.0/>`_ |GitHub_clexmonte|_ |PyPI_clexmonte|_


casm-tools
----------

Pure Python CLI tools and helper functions:

- **casm-calc** - Setup, run, and import results of structure calculations
- **casm-map** - Structure mapping and import
- **casm.tools.shared** - Helper functions for I/O, ASE integration, and context managers.

Docs: `[2.0a2] <../../casm/tools/2.0/>`_ |GitHub_project|_ |PyPI_project|_


casm-project
------------

Easier cluster expansion construction, fitting, and use in CASM v2+: quick access to common methods, automatic project directory I/O.

Docs: `[2.0a1] <../../casm/project/2.0/>`_ |GitHub_project|_ |PyPI_project|_


About CASM
==========

The libcasm packages are part of the CASM_ open source software package, which is designed to perform first-principles statistical mechanical studies of multi-component crystalline solids.

CASM is developed by the Van der Ven group, originally at the University of Michigan and currently at the University of California Santa Barbara.

For more information, see the `CASM homepage <CASM_>`_.


.. _CASM: https://prisms-center.github.io/CASMcode_docs/

.. |GitHub_global| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_global GitHub repository
  :width: 24
.. _GitHub_global: https://github.com/prisms-center/CASMcode_global/

.. |PyPI_global| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-global PyPI package
  :width: 20
.. _PyPI_global: https://pypi.org/project/libcasm-global/


.. |GitHub_xtal| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_crystallography GitHub repository
  :width: 24
.. _GitHub_xtal: https://github.com/prisms-center/CASMcode_crystallography/

.. |PyPI_xtal| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-xtal PyPI package
  :width: 20
.. _PyPI_xtal: https://pypi.org/project/libcasm-xtal/


.. |GitHub_composition| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_composition GitHub repository
  :width: 24
.. _GitHub_composition: https://github.com/prisms-center/CASMcode_composition/

.. |PyPI_composition| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-composition PyPI package
  :width: 20
.. _PyPI_composition: https://pypi.org/project/libcasm-composition/


.. |GitHub_mapping| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_mapping GitHub repository
  :width: 24
.. _GitHub_mapping: https://github.com/prisms-center/CASMcode_mapping/

.. |PyPI_mapping| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-mapping PyPI package
  :width: 20
.. _PyPI_mapping: https://pypi.org/project/libcasm-mapping/


.. |GitHub_clexulator| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_clexulator GitHub repository
  :width: 24
.. _GitHub_clexulator: https://github.com/prisms-center/CASMcode_clexulator/

.. |PyPI_clexulator| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-clexulator PyPI package
  :width: 20
.. _PyPI_clexulator: https://pypi.org/project/libcasm-clexulator/


.. |GitHub_configuration| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_configuration GitHub repository
  :width: 24
.. _GitHub_configuration: https://github.com/prisms-center/CASMcode_configuration/

.. |PyPI_configuration| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-configuration PyPI package
  :width: 20
.. _PyPI_configuration: https://pypi.org/project/libcasm-configuration/


.. |GitHub_bset| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_bset GitHub repository
  :width: 24
.. _GitHub_bset: https://github.com/prisms-center/CASMcode_bset/

.. |PyPI_bset| image:: ../_static/python-logo-only.png
  :alt: Link to casm-bset PyPI package
  :width: 20
.. _PyPI_bset: https://pypi.org/project/casm-bset/


.. |GitHub_monte| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_monte GitHub repository
  :width: 24
.. _GitHub_monte: https://github.com/prisms-center/CASMcode_monte/

.. |PyPI_monte| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-monte PyPI package
  :width: 20
.. _PyPI_monte: https://pypi.org/project/libcasm-monte/


.. |GitHub_clexmonte| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_clexmonte GitHub repository
  :width: 24
.. _GitHub_clexmonte: https://github.com/prisms-center/CASMcode_clexmonte/

.. |PyPI_clexmonte| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-clexmonte PyPI package
  :width: 20
.. _PyPI_clexmonte: https://pypi.org/project/libcasm-clexmonte/


.. |GitHub_project| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_project GitHub repository
  :width: 24
.. _GitHub_project: https://github.com/prisms-center/CASMcode_project/

.. |PyPI_project| image:: ../_static/python-logo-only.png
  :alt: Link to libcasm-project PyPI package
  :width: 20
.. _PyPI_project: https://pypi.org/project/libcasm-project/
