var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MainContainer = require('./components/main.jsx').MainContainer;
var MoxyDetail = require('./components/moxy.jsx').MoxyDetail;
var ThaiDetail = require('./components/thai.jsx').ThaiDetail;
var GithubDetail = require('./components/github.jsx').GithubDetail
var EtsyDetail = require('./components/etsy.jsx').EtsyDetail;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'moxy/': 'moxy',
    'thai/': 'thai',
    'github/': 'github',
    'etsy/': 'etsy'
  },
  home: function(){
    ReactDOM.render(
      React.createElement(MainContainer),
      document.getElementById('app')
    )
  },
  moxy: function(){
    ReactDOM.render(
      React.createElement(MoxyDetail),
      document.getElementById('app')
    )
  },
  thai: function(){
    ReactDOM.render(
      React.createElement(ThaiDetail),
      document.getElementById('app')
    )
  },
  github: function(){
    ReactDOM.render(
      React.createElement(GithubDetail),
      document.getElementById('app')
    )
  },
  etsy: function(){
    ReactDOM.render(
      React.createElement(EtsyDetail),
      document.getElementById('app')
    )
  }
});

var myRouter = new AppRouter();

module.exports = myRouter;
