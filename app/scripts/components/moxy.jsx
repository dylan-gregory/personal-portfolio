var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');

class MoxyDetail extends React.Component {
  render(){
    return (
      <div>
        <div className="row">
          <div className="col m6">

            <img src="images/Moxy-screen-1.png" />

          </div>

          <div className="col m6">

            <div className="proj-tools">

              <div className="col m4">
                <div className="devicons devicons-html5"></div>
              </div>

              <div className="col m4">
                <div className="devicons devicons-css3"></div>
              </div>

              <div className="col m4">
                <div className="devicons devicons-javascript_badge"></div>
              </div>

              <div className="col m4">
                <div className="devicons">
                  <i className="devicon-react-original"></i>
                </div>
              </div>

              <div className="col m4">
                <div className="devicons">
                  <i className="devicon-backbonejs-plain"></i>
                </div>
              </div>

              <div className="col m4">
                <div className="devicons">
                  <i className="devicon-sass-original"></i>
                </div>
              </div>



            </div>

          </div>

        </div>

        <div className="row">
          <div className="">
            <a href="https://dylan-gregory.github.io/tiy-final-project/"> Visit the live site</a>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  MoxyDetail
};
