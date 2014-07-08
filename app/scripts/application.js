'use strict';
/*global Ember */
/*global Todos */
/*global DS */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});
