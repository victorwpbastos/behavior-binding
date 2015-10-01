# Behavior Binding

> It's a Marionette Behavior for data binding.

## Install

1. Download [Backbone Stickit](https://github.com/NYTimes/backbone.stickit);
2. Download the `binding.js` file;
3. If you are using [Boiler](https://github.com/baltazzar/boiler), put the `binding.js` file inside the `application/behaviors` folder. Create the `behaviors` folder if it not exists.

## How to use

Put this in your Marionette ItemView:

```js
behaviors: [{
	behaviorClass: require('behaviors/binding'), // if using webpack|browserify
	bindAttr: 'name', // default attribute for automatic binding
	bindings: {} // custom bindings
}]
```

## Custom bindings

Follow the [Backbone Stickit Bindings](https://github.com/NYTimes/backbone.stickit#bindings) reference.
