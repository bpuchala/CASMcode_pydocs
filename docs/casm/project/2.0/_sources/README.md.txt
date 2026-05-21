# Generating directory structure table pages:

    python doc/generate_directory_tables.py 

# Building notebooks:

    jupyter nbconvert --to html --template casmnb --TemplateExporter.extra_template_basedirs=. notebooks/**/*.ipynb
