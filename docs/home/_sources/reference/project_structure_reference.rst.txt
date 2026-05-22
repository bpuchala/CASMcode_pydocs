..
    .. include:: ../_shared/logo_and_spacing.rst

.. _project_structure_reference:

CASM Project structure
======================

The CASM project structure standardizes the location of various files used by CASM when constructing, fitting, and evaluating a cluster expansion.


Path variable convention
------------------------

In the descriptions that follow, some name or paths include codes of the form *<variable>* to indicate that there are multiple files or directory paths with varying names but following the same pattern.

Path variables include:

- *<project>*: The root CASM project directory
- *<configname>*: The name of a configuration.
- *<title>*: The CASM project title, as given in the *prim.json* file used to initialize it.
- *<enum>*: Enumeration directory, ex: *<enum> = 'enum.main'*.
- *<event>*: Event directory, ex: *<event> = 'event.1'*.
- *<bset>*: Basis set directory, ex: *<bset> = 'bset.chebychev'*.
- *<calctype>*: Calculation settings directory, Ex: *<calctype> = 'calctype.vasp_gga'*.
- *<ref>*: Reference states directory, ex: *<ref> = 'ref.1'*.
- *<fit>*: Fitting coefficients (effective cluster interactions) directory, ex: *<fit> = 'fit.formation_energy_1'*.


CASM project directories
-------------------------

See :ref:`project-dir` for the top-level directory structure.

.. BEGIN GENERATED TOCTREE - updated by src/home/_scripts/update.py

.. toctree::
   :hidden:
   :caption: Project Directories

   project_structure/project-dir

.. END GENERATED TOCTREE
