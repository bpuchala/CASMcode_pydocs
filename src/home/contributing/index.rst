..
    .. include:: ../_shared/logo_and_spacing.rst

.. _contributing-to-casm:

Contributing
============

Overview
--------

For CASM v2+, the large existing distributions CASMcode (for C++ code) and CASMpython (for Python code) are split into smaller distributions focused on particular topics. They are organized into two namespaces: *libcasm*, for packages that include C++ implementations, and *casm*, for pure Python packages.

Python namespace packages allow distributing subpackages seperately so a project may be split into smaller more focused efforts. For example, the CASM structure mapping package (*libcasm.mapping*) and the CASM cluster expansion Monte Carlo package (*libcasm.clexmonte*) can be developed and distributed separately. Each distribution package installs one or more Python namespace packages into the particular namespace.

.. comment
    Collaboration is welcome and new features can be incorporated by forking a CASM package repository on GitHub, creating a new feature, and submitting pull requests. If you are interested in developing features that involve a significant time investment we encourage you to first contact the CASM development team at :email:`<casm-developers@lists.engr.ucsb.edu>`.

.. toctree::
    :maxdepth: 1

    contributing_to_libcasm_packages
    contributing_to_casm_packages
