/* Insert distribution package labels into the sidebar nav. */
document.addEventListener('DOMContentLoaded', function () {
    var groups = [
        { module: 'libcasm.casmglobal', label: 'libcasm-global' },
        { module: 'libcasm.xtal', label: 'libcasm-xtal' },
        { module: 'libcasm.clusterography', label: 'libcasm-configuration' },
    ];

    var sidenav = document.querySelector('.bd-sidenav');
    if (!sidenav) return;

    groups.forEach(function (group) {
        var links = sidenav.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            if (links[i].textContent.trim() === group.module) {
                var li = links[i].closest('li');
                if (li) {
                    var label = document.createElement('li');
                    label.className = 'nav-pkg-label';
                    label.textContent = group.label;
                    li.parentNode.insertBefore(label, li);
                }
                break;
            }
        }
    });
});
