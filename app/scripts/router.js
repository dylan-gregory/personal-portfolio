var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MainContainer = require('./components/main.jsx').MainContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home'
  },
  home: function(){
    ReactDOM.render(
      React.createElement(MainContainer),
      document.getElementById('app')
    )
  }
});

var myRouter = new AppRouter();

module.exports = myRouter;
