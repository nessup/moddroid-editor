/*global ModdroidEditor, $*/


window.ModdroidEditor = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        // Initialize the toolbar.
        new ModdroidEditor.Views.Toolbar({
            el: $('.toolbarContainer')[0]
        })
        .render();
    }
};

$(document).ready(function () {
    'use strict';
    ModdroidEditor.init();
});
