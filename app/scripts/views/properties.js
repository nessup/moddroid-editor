/*global ModdroidEditor, Backbone, JST*/

ModdroidEditor.Views = ModdroidEditor.Views || {};

(function () {
    'use strict';

    // This method takes the raw values of a view property from Android and converts it to a user-readable format. For exmaple, a value of -1 for layout_width is converted to the string 'match_parent'.
    function preparePropertiesForDisplay(properties) {
        properties = _.clone(properties);

        properties.data.forEach(function(property) {
            switch(property.type) {
                case 'string':
                case 'int':
                case 'float':
                    property.displayValue = property.value;
                    break;

                default:
                    property.displayValue = property.value + ' (' + property.type + ')';
                    break;
            }
        });

        return properties;
    }

    ModdroidEditor.Views.Properties = Backbone.View.extend({

        template: JST['app/scripts/templates/properties.ejs'],

        className: '',

        events: {
            'keyup input': 'onInputKeyUp'
        },

        initialize: function () {
        },

        render: function () {
            // Make the values of view properties human-readible.
            var preparedProperties = preparePropertiesForDisplay(this.properties);

            // Render.
            this.$el.html(this.template({
                properties: preparedProperties
            }));

            return this;
        },

        /*
         * Events.
         */

         onInputKeyUp: function(e) {
             var $target = $(e.currentTarget),
                key = $target.parents('tr').data('key'),
                viewId = $target.parents('table').data('id'),
                socket = ModdroidEditor.Inspector.socket;

            // Send a property update to Android.
            socket.send(JSON.stringify({
                id: viewId,
                key: key,
                value: $target.val()
            }));
         }
    });

})();
