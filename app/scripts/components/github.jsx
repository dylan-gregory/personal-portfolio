var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/tooltip.js');

class GithubDetail extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});
  }
  render(){
    return (
      <div className="Github-detail">
        <div className="row title-row">
          <a className="btn-floating btn-large waves-effect waves-light back-btn" onClick={() => {window.history.back()}}><i className="material-icons">arrow_back</i></a>
            <div className="detail-title">

              <span className="name-title">GitHub Recreation</span>
            </div>
        </div>
        <div className="row">

          <div className="container-fluid">
          <div className="col l6 s12">

            <img className="github-detail-pic" src="images/github-grab.png" />

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

            <div className="button-box col l6 offset-l3 s12 ">
              <a className="btn-floating btn-large waves-effect waves-light tooltipped"
                data-position="bottom" data-delay="50" data-tooltip="Visit the site" href="https://dylan-gregory.github.io/4.4-github-profile/"><i className="material-icons">computer</i></a>
              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Visit the codebase" href="https://github.com/dylan-gregory/4.4-github-profile"><i className="material-icons">code</i></a>
            </div>
          </div>

          </div>

        </div>

        <div className="row">

          <div className="row descript-row">
            <div className="col m8 offset-m2">
              <p className="description">
                This was one of my first attempts at working with AJAX calls to an API. Thankfully, GitHub has a super awesome and easy to use API, which I queried to bring in all of the data you see here: the photos, list of projects, organizations, etc. This project is what definitely brought programming to a whole new level in my mind - dynamic data is a game changer!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  GithubDetail
};
