.. _enum-dir:

Enumeration data
================

.. toctree::
   :hidden:

   training-data-dir
   kmc-events-dir

.. raw:: html

    <dl class="casm-list">
    <div style="display: flex; flex-direction: row; align-items: center; gap: 5px;">
        <dt class="casm-part">Location:</dt>
        <dd class="casm-part"><code>&lt;project&gt;/enumerations/enum.&lt;enum_id&gt;/</code></dd>
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
            <td><code>meta.json</code></td>
            <td>Description of the enumeration</td>
            <td><a class="only-light reference internal image-reference" href="#meta-file"><img alt="link icon" class="only-light" src="../../_static/link-16.svg"></a>
            <a class="only-dark reference internal image-reference" href="#meta-file"><img alt="link icon" class="only-dark" src="../../_static/link-16-dark.svg"></a>
        </tr>
        <tr>
            <td><code>scel_set.json</code></td>
            <td>Enumerated supercells, as a set</td>
            <td><a href="TODO">SupercellSet</a></td>
        </tr>
        <tr>
            <td><code>scel_list.json</code></td>
            <td>Enumerated supercells, as a list</td>
            <td><a href="TODO">list[SupercellSet]</a></td>
        </tr>
        <tr>
            <td><code>config_set.json</code></td>
            <td>Enumerated configurations, as a set</td>
            <td><a href="TODO">ConfigurationSet</a></td>
        </tr>
        <tr>
            <td><code>config_list.json</code></td>
            <td>Enumerated configurations, as a list</td>
            <td><a href="TODO">list[Configuration]</a></td>
        </tr>
        <tr>
            <td><code>training_data/</code></td>
            <td>Calculation input and output files</td>
            <td><a class="only-light reference internal image-reference" href="training-data-dir.html"><img alt="link icon" class="only-light" src="../../_static/link-16.svg"></a>
            <a class="only-dark reference internal image-reference" href="training-data-dir.html"><img alt="link icon" class="only-dark" src="../../_static/link-16-dark.svg"></a>
        </tr>
        <tr>
            <td><code>kmc_events/</code></td>
            <td>Enumerated KMC events</td>
            <td><a class="only-light reference internal image-reference" href="kmc-events-dir.html"><img alt="link icon" class="only-light" src="../../_static/link-16.svg"></a>
            <a class="only-dark reference internal image-reference" href="kmc-events-dir.html"><img alt="link icon" class="only-dark" src="../../_static/link-16-dark.svg"></a>
        </tr>
    </table>
    </dd>
    </dl>
