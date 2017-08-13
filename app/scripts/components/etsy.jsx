var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/tooltip.js');

class EtsyDetail extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});
  }
  render(){
    return (
      <div className="Etsy-detail">
        <div className="row title-row">
          <a className="btn-floating btn-large waves-effect waves-light back-btn" onClick={() => {window.history.back()}}><i className="material-icons">arrow_back</i></a>
            <div className="detail-title">

              <span className="name-title">Etsy Recreation</span>
            </div>
        </div>

        <div className="row">

          <div className="container-fluid">
          <div className="col l6 s12">

            <img className="etsy-detail-pic" src="images/etsy-grab.png" />

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
                  <i className="devicon-bootstrap-plain"></i>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-backbonejs-plain"></i>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <i className="devicon-sass-original"></i>
                </div>
              </div>

            </div>

            <div className="button-box col l6 offset-l3 s12">
              <a className="btn-floating btn-large waves-effect waves-light tooltipped"
                data-position="bottom" data-delay="50" data-tooltip="Visit the site" href="https://dylan-gregory.github.io/4.2-etsy-recreation/"><i className="material-icons">computer</i></a>
              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Visit the codebase" href="https://github.com/dylan-gregory/4.2-etsy-recreation"><i className="material-icons">code</i></a>
            </div>
          </div>

          </div>

        </div>

        <div className="row">

          <div className="row descript-row">
            <div className="col m8 offset-m2">
              <p className="description">Etsy recreation was our very first project working with APIs and making specific AJAX calls with jQuery. This was definitely one of my favorites up to this point in my time at the Iron Yard because it was practical yet complicated, in both the behind the scenes data handling and the way in which it's displayed. This was the project that helped solidify my skills in responsive web layout and using templates.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  EtsyDetail
};
