I'm redoing our website. 
The original is @../CASMcode_docs/. 
The next step is recreating the CASM project directory structure reference.
The original page is from @../CASMcode_docs/_formats/project_directory_structure.md 
The new page is @src/home/reference/project_structure_reference.rst.

The definitive sources of the project directory structure are:
- The class casm.project.DirectoryStructure defined in @../CASMcode_project/casm/project/_DirectoryStructure.py
- Classes like casm.project.enum.EnumData defined in @../CASMcode_project/casm/project/enum/EnumData.py

For this version, we will:
- Encode the directory structure in @src/home/_scripts/directory_tables.json
- Use @src/home/_scripts/generate_directory_tables.py to read directory_tables.json and generate the tables.
- Use @src/home/_scripts/make_tables.py to make all website tables that are constructed algorithmically. Currently, it's just the directory structure table, but I anticipate there will be more.
- The tables contain rows for each standard file and directory. For files, this will include a link to the reference page for the file format. For directories, this will include a link to the directory structure reference elsewhere on the page.

Issues:
- casm-dir.html shows only one item in the sidebar (toctree-l1 current active with just itself), while project_structure.html shows the
   full tree