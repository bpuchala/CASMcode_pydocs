.. _basis-sets-dir:

Basis set input, results, and generated code
============================================

.. raw:: html

    <dl class="casm-list">
    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
        <dt class="casm-part">Location:</dt>
        <dd class="casm-part"><code>&lt;project&gt;/basis_sets/bset.&lt;bset_id&gt;/</code></dd>
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
            <td><code>bspecs.json</code></td>
            <td>Basis function specs</td>
            <td><a href="TODO">BSpecs</a></td>
        </tr>
        <tr>
            <td><code>basis.json</code></td>
            <td>Basis functions</td>
            <td><a href="TODO">Basis</a></td>
        </tr>
        <tr>
            <td><code>equivalents_info.json</code></td>
            <td>Equivalents info for local correlations</td>
            <td><a href="TODO">EquivalentsInfo</a></td>
        </tr>
        <tr>
            <td><code>cluster_functions.json.gz</code></td>
            <td>Cluster functions</td>
            <td><a href="TODO">ClusterFunctions</a></td>
        </tr>
        <tr>
            <td><code>variables.json.gz</code></td>
            <td>Clexulator variables</td>
            <td><a href="TODO">ClexulatorVariables</a></td>
        </tr>
        <tr>
            <td><code>&lt;projectname&gt;_Clexulator_&lt;bset_id&gt;.cc</code></td>
            <td>Clexulator C++ source file</td>
            <td><a href="TODO">Clexulator source</a></td>
        </tr>
        <tr>
            <td><code>&lt;projectname&gt;_Clexulator_&lt;bset_id&gt;.o</code></td>
            <td>Compiled clexulator object file</td>
            <td><a href="TODO">Clexulator object</a></td>
        </tr>
        <tr>
            <td><code>&lt;projectname&gt;_Clexulator_&lt;bset_id&gt;.so</code></td>
            <td>Compiled clexulator shared library</td>
            <td><a href="TODO">Clexulator shared lib</a></td>
        </tr>
    </table>
    </dd>
    </dl>
