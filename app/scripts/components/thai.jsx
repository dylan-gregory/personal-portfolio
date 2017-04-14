var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/tooltip.js');

class ThaiDetail extends React.Component {
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});
  }
  render(){
    return (
      <div className="Thai-detail">
        <div className="row">
          <div className="thai-detail-title">Majestic Thai</div>
          <div className="container-fluid">
          <div className="col l6 s12">

            <img className="thai-detail-pic" src="images/majestic-thai.png" />

          </div>

          <div className="col l6 s12">

            <div className="proj-tools">

              <div className="col m4 s6">
                <div className="devicons devicons-html5"></div>
              </div>

              <div className="col m4 s6">
                <div className="devicons devicons-css3"></div>
              </div>

              <div className="col m4 s6">
                <div className="devicons devicons-javascript_badge"></div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-react-original"></i>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-backbonejs-plain"></i>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-bootstrap-plain"></i>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-sass-original"></i>
                </div>
              </div>

            </div>

            <div className="button-box thai-buttons col l6 offset-l3 s12">
              <a className="btn-floating btn-large waves-effect waves-light tooltipped"
                data-position="bottom" data-delay="50" data-tooltip="Visit the site" href="https://dylan-gregory.github.io/7.4-majestic-thai/"><i className="material-icons">computer</i></a>
              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Visit the codebase" href="https://github.com/dylan-gregory/7.4-majestic-thai"><i className="material-icons">code</i></a>
            </div>
          </div>

          </div>

        </div>

        <div className="row">

          <div className="row">
            <div className="col m8 offset-m2">
              <p className="description">Majestic Thai was one of my favorite projects from my time at The Iron Yard. We were tasked with building an online webstore for a thai restaurant, capable of adding food items to a cart, calculating a subtotal, and submitting an order.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  ThaiDetail
};
