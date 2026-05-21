..
    .. include:: ../_shared/logo_and_spacing.rst

.. _public_api_reference:

Packages
========

CASM consists of a collection of distribution packages that implement related
features in one or more Python packages. The Python namespace ``libcasm`` is
used for packages that include C++ implementations; the namespace ``casm`` is
used for pure Python packages.

.. list-table::
   :widths: 35 65
   :header-rows: 1

   * - **libcasm-global** |version_libcasm_global|
     - |Docs_global_light|_ |Docs_global_dark|_ |GitHub_global_light|_ |GitHub_global_dark|_ |PyPI_global_light|_ |PyPI_global_dark|_
   * - :mod:`libcasm.casmglobal`
     - CASM global constants, definitions, and configuration variables
   * - :mod:`libcasm.counter`
     - Iterate over many incrementing variables in one loop

.. list-table::
   :widths: 35 65
   :header-rows: 1

   * - **libcasm-xtal** |version_libcasm_xtal|
     - |Docs_xtal_light|_ |Docs_xtal_dark|_ |GitHub_xtal_light|_ |GitHub_xtal_dark|_ |PyPI_xtal_light|_ |PyPI_xtal_dark|_
   * - :mod:`libcasm.xtal`
     - Data structures for lattices, crystal structures, DoF, symmetry operations,
       and crystal sites; methods for enumerating superlattices, super structures,
       primitive/reduced cells, and symmetry operations

.. list-table::
   :widths: 35 65
   :header-rows: 1

   * - **libcasm-configuration** |version_libcasm_configuration|
     - |Docs_configuration_light|_ |Docs_configuration_dark|_ |GitHub_configuration_light|_ |GitHub_configuration_dark|_ |PyPI_configuration_light|_ |PyPI_configuration_dark|_
   * - :mod:`libcasm.clusterography`
     - Unique cluster enumeration and orbits; impact table neighborhoods
   * - :mod:`libcasm.configuration`
     - Supercell and configuration classes; configuration comparison and copying;
       configurations from mapped structures
   * - :mod:`libcasm.enumerate`
     - Configuration enumeration methods
   * - :mod:`libcasm.group`
     - Symmetry group data structures and algorithms
   * - :mod:`libcasm.irreps`
     - Irreducible space decompositions
   * - :mod:`libcasm.local_configuration`
     - Local configuration representation, comparison, and transformation
   * - :mod:`libcasm.occ_events`
     - Occupation events for KMC; event comparison and enumeration
   * - :mod:`libcasm.sym_info`
     - Crystal factor/point groups; group-subgroup relationships; symmetry
       representations for site coordinates and DoF values


.. _CASM: https://prisms-center.github.io/CASMcode_docs/

.. |Docs_global_light| image:: ../_static/globe.svg
  :alt: Link to libcasm-global documentation
  :width: 24
  :class: only-light
.. _Docs_global_light: ../../libcasm/global/2.0/

.. |Docs_global_dark| image:: ../_static/globe_dark.svg
  :alt: Link to libcasm-global documentation
  :width: 24
  :class: only-dark
.. _Docs_global_dark: ../../libcasm/global/2.0/

.. |Docs_xtal_light| image:: ../_static/globe.svg
  :alt: Link to libcasm-xtal documentation
  :width: 24
  :class: only-light
.. _Docs_xtal_light: ../../libcasm/xtal/2.0/

.. |Docs_xtal_dark| image:: ../_static/globe_dark.svg
  :alt: Link to libcasm-xtal documentation
  :width: 24
  :class: only-dark
.. _Docs_xtal_dark: ../../libcasm/xtal/2.0/

.. |Docs_configuration_light| image:: ../_static/globe.svg
  :alt: Link to libcasm-configuration documentation
  :width: 24
  :class: only-light
.. _Docs_configuration_light: ../../libcasm/configuration/2.0/

.. |Docs_configuration_dark| image:: ../_static/globe_dark.svg
  :alt: Link to libcasm-configuration documentation
  :width: 24
  :class: only-dark
.. _Docs_configuration_dark: ../../libcasm/configuration/2.0/


.. |GitHub_global_light| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_global GitHub repository
  :width: 24
  :class: only-light
.. _GitHub_global_light: https://github.com/prisms-center/CASMcode_global/

.. |GitHub_global_dark| image:: ../_static/github-mark-white.png
  :alt: Link to CASMcode_global GitHub repository
  :width: 24
  :class: only-dark
.. _GitHub_global_dark: https://github.com/prisms-center/CASMcode_global/

.. |PyPI_global_light| image:: ../_static/python-mark.svg
  :alt: Link to libcasm-global PyPI package
  :width: 20
  :class: only-light
.. _PyPI_global_light: https://pypi.org/project/libcasm-global/

.. |PyPI_global_dark| image:: ../_static/python-mark-white.svg
  :alt: Link to libcasm-global PyPI package
  :width: 20
  :class: only-dark
.. _PyPI_global_dark: https://pypi.org/project/libcasm-global/


.. |GitHub_xtal_light| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_crystallography GitHub repository
  :width: 24
  :class: only-light
.. _GitHub_xtal_light: https://github.com/prisms-center/CASMcode_crystallography/

.. |GitHub_xtal_dark| image:: ../_static/github-mark-white.png
  :alt: Link to CASMcode_crystallography GitHub repository
  :width: 24
  :class: only-dark
.. _GitHub_xtal_dark: https://github.com/prisms-center/CASMcode_crystallography/

.. |PyPI_xtal_light| image:: ../_static/python-mark.svg
  :alt: Link to libcasm-xtal PyPI package
  :width: 20
  :class: only-light
.. _PyPI_xtal_light: https://pypi.org/project/libcasm-xtal/

.. |PyPI_xtal_dark| image:: ../_static/python-mark-white.svg
  :alt: Link to libcasm-xtal PyPI package
  :width: 20
  :class: only-dark
.. _PyPI_xtal_dark: https://pypi.org/project/libcasm-xtal/


.. |GitHub_configuration_light| image:: ../_static/github-mark.png
  :alt: Link to CASMcode_configuration GitHub repository
  :width: 24
  :class: only-light
.. _GitHub_configuration_light: https://github.com/prisms-center/CASMcode_configuration/

.. |GitHub_configuration_dark| image:: ../_static/github-mark-white.png
  :alt: Link to CASMcode_configuration GitHub repository
  :width: 24
  :class: only-dark
.. _GitHub_configuration_dark: https://github.com/prisms-center/CASMcode_configuration/

.. |PyPI_configuration_light| image:: ../_static/python-mark.svg
  :alt: Link to libcasm-configuration PyPI package
  :width: 20
  :class: only-light
.. _PyPI_configuration_light: https://pypi.org/project/libcasm-configuration/

.. |PyPI_configuration_dark| image:: ../_static/python-mark-white.svg
  :alt: Link to libcasm-configuration PyPI package
  :width: 20
  :class: only-dark
.. _PyPI_configuration_dark: https://pypi.org/project/libcasm-configuration/


.. toctree::
   :hidden:
   :caption: libcasm-global

   _autosummary/libcasm.casmglobal
   _autosummary/libcasm.counter

.. toctree::
   :hidden:
   :caption: libcasm-xtal

   _autosummary/libcasm.xtal

.. toctree::
   :hidden:
   :caption: libcasm-configuration

   _autosummary/libcasm.clusterography
   _autosummary/libcasm.configuration
   _autosummary/libcasm.enumerate
   _autosummary/libcasm.group
   _autosummary/libcasm.irreps
   _autosummary/libcasm.local_configuration
   _autosummary/libcasm.occ_events
   _autosummary/libcasm.sym_info

..
    Stub files in _autosummary/ are generated by _stub_gen.rst (an orphan page).
    Its toctree is outside the main nav tree, so the captioned toctrees above
    can claim the stubs without conflict. Stubs are regenerated on every build.
