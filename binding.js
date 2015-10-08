var Marionette = require('marionette');
var _ = require('underscore');

require('backbone.stickit');

module.exports = Marionette.Behavior.extend({
	onRender: function() {
		this.bindAttr = this.options.bindAttr || 'name';
		this.view.bindings = _.result(this.options, 'bindings') || {};
		this.populateDefaultBindings();
		this.view.stickit();
	},

	populateDefaultBindings: function() {
		var defaultBindings = {};

		this.view.$('[' + this.bindAttr + ']').each(function(index, element) {
			defaultBindings['[' + this.bindAttr + '="' + element[this.bindAttr] + '"]'] = element[this.bindAttr];
		}.bind(this));

		this.view.bindings = _.extend({}, defaultBindings, this.view.bindings);
	},

	onDestroy: function() {
		this.view.unstickit();
	}
});