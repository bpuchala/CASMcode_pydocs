.. include:: _shared/logo_and_spacing.rst

.. toctree::
    :maxdepth: 2
    :hidden:

    User Guide <user_guide/index>
    Reference <reference/index>
    About <about/index>
    Citing <citing/index>
    Sample Publications <publications/index>
    Contributing <contributing/index>


Overview
--------

CASM (Clusters Approach to Statistical Mechanics) is an open source software suite designed to perform first-principles statistical mechanical studies of multi-component crystalline solids. CASM uses group theoretic techniques that take full advantage of crystal symmetry in order to rigorously construct effective Hamiltonians for almost arbitrary degrees of freedom in crystalline solids. Examples include:

- cluster expansions for configurational disorder in multi-component solids,
- coupled Hamiltonians of configurational disorder and homogeneous strain,
- lattice-dynamical effective Hamiltonians for vibrational degrees of freedom involved in structural phase transitions.

CASM consists of several Python packages, some are pure Python packages and some are interfaces to libraries written in C++. These provide tools to:

- automate the construction and parameterization of effective Hamiltonians,
- interface with first-principles electronic structure codes,
- build highly optimized (kinetic) Monte Carlo codes to predict finite-temperature thermodynamic and kinetic properties.


To read more about CASM, or to cite it in a publication, please see the `Citing CASM <cite.html>`_ page.

Sample publications using CASM
------------------------------

.. include:: /_static/publications/_featured_index.rst


Getting help
------------

- :email:`Email the developers <casm-developers@lists.engr.ucsb.edu>`
- `Join the announcements mailing list <https://lists.engr.ucsb.edu/mailman/listinfo/casm-users>`_
- To request features or report bugs, please go to the GitHub repositories for individual CASM packages.
