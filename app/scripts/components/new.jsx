var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/parallax.js');
require('materialize-sass-origin/js/tooltip.js');

class NewContainer extends React.Component {
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});


  }
  render(){
    return (
      <div>
        <div className="container-fluid new-container">
          <div className="row">
            <div className="col l4 m6 s12">
              <div className="box1">
                <img className="pic-me" src="images/first-headshot.jpg" />
              </div>
            </div>
            <div className="col l8 m6 s12">
              <div className="box2">
                Hey there hi there ho there
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

module.exports = {
  NewContainer
};
