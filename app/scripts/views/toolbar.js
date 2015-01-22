/*global ModdroidEditor, Backbone, JST*/

ModdroidEditor.Views = ModdroidEditor.Views || {};

(function () {
    'use strict';

    ModdroidEditor.Views.Toolbar = Backbone.View.extend({

        template: JST['app/scripts/templates/toolbar.ejs'],

        className: 'toolbarContainer',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
