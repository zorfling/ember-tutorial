'use strict';
/*global Ember */
/*global Todos */
Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function() {
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
