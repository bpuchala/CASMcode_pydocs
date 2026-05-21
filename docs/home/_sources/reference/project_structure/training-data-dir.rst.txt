.. _training-data-dir:

Calculation input and output files
==================================

.. raw:: html

    <dl class="casm-list">
    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
        <dt class="casm-part">Location:</dt>
        <dd class="casm-part"><code>&lt;project&gt;/enumerations/enum.&lt;enum_id&gt;/training_data/calctype.&lt;calctype_id&gt;/&lt;configname&gt;/</code></dd>
    </div>
    <dt class="casm-part">Contents:</dt>
    <dd class="casm-part">
    <table class="casm-table">
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Format</th>
        </tr>
        <tr>
            <td><code>config.json</code></td>
            <td>Configuration (occupation and continuous DoF)</td>
            <td><a href="TODO">Configuration</a></td>
        </tr>
        <tr>
            <td><code>structure.json</code></td>
            <td>Ideal crystal structure corresponding to the configuration</td>
            <td><a href="TODO">Structure</a></td>
        </tr>
        <tr>
            <td><code>structure_with_properties.json</code></td>
            <td>Crystal structure with calculated properties</td>
            <td><a href="TODO">StructureWithProperties</a></td>
        </tr>
        <tr>
            <td><code>POS</code></td>
            <td>VASP POSCAR file for the configuration</td>
            <td><a href="TODO">POSCAR</a></td>
        </tr>
    </table>
    </dd>
    </dl>
