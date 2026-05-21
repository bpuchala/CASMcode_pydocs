.. include:: ../_shared/logo_and_spacing.rst


User Guide
==========

.. toctree::
    :maxdepth: 1
    :hidden:

    installation
    introduction
    usage

CASM (Clusters Approach to Statistical Mechanics) is an open source software suite designed to perform first-principles statistical mechanical studies of multi-component crystalline solids. CASM uses group theoretic techniques that take full advantage of crystal symmetry in order to rigorously construct effective Hamiltonians for almost arbitrary degrees of freedom in crystalline solids. Examples include:

- cluster expansions for configurational disorder in multi-component solids,
- coupled Hamiltonians of configurational disorder and homogeneous strain,
- lattice-dynamical effective Hamiltonians for vibrational degrees of freedom involved in structural phase transitions.

CASM consists of several Python packages, some are pure Python packages and some are interfaces to libraries written in C++. These provide tools to:

- automate the construction and parameterization of effective Hamiltonians,
- interface with first-principles electronic structure codes,
- build highly optimized (kinetic) Monte Carlo codes to predict finite-temperature thermodynamic and kinetic properties.

This user guide focuses on using the CASM software suite as a whole. For individual packages, see the :ref:`CASM Python packages public API reference <public_api_reference>`.