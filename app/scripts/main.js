/*global ModdroidEditor, $*/


window.ModdroidEditor = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Inspector: {},
    init: function () {
        'use strict';

        // Initialize the toolbar.
        new ModdroidEditor.Views.Toolbar({
            el: $('.toolbarContainer')[0]
        })
        .render();

        // Show properties.
        var propertiesView = new ModdroidEditor.Views.Properties({
            el: $('.sidebar')[0]
        });

        // Connect to the server.
        var socket = ModdroidEditor.Inspector.socket = new WebSocket('ws://192.168.10.58:5000/live');
        socket.onopen = function(event) {
            // Listen for messages
            socket.onmessage = function(event) {
                propertiesView.properties = JSON.parse(event.data);
                propertiesView.render();
            };

            // Listen for socket closes
            socket.onclose = function(event) {
                console.log('Client notified socket has closed',event);
            };
        };
    }
};

$(document).ready(function () {
    'use strict';
    ModdroidEditor.init();
});
