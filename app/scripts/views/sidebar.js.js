/*global ModdroidEditor, Backbone, JST*/

ModdroidEditor.Views = ModdroidEditor.Views || {};

(function () {
    'use strict';

    ModdroidEditor.Views.SidebarJs = Backbone.View.extend({

        template: JST['app/scripts/templates/sidebar.js.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
