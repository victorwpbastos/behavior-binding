var Marionette = require('marionette');
var _ = require('underscore');

require('backbone.stickit');

module.exports = Marionette.Behavior.extend({
	initialize: function() {
		this.bindAttr = this.options.bindAttr || 'name';
		this.view.bindings = _.result(this.options, 'bindings') || {};
	},

	populateDefaultBindings: function() {
		var defaultBindings = {};

		this.view.$('[' + this.bindAttr + ']').each(function(index, element) {
			defaultBindings['[' + this.bindAttr + '="' + element[this.bindAttr] + '"]'] = element[this.bindAttr];
		}.bind(this));

		_.extend(this.view.bindings, defaultBindings);
	},

	onRender: function() {
		this.populateDefaultBindings();
		this.view.stickit();
	},

	onDestroy: function() {
		this.view.unstickit();
	}
});