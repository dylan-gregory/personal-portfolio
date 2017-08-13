var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/tooltip.js');

class MoxyDetail extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});
  }
  render(){
    return (
      <div className="Moxy-detail">
        <div className="row title-row">
          <a className="btn-floating btn-large waves-effect waves-light back-btn" onClick={() => {window.history.back()}}><i className="material-icons">arrow_back</i></a>
            <div className="detail-title">

              <span className="name-title">Moxy</span>
            </div>
        </div>
        <div className="row">

          <div className="container-fluid">
          <div className="col l6 s12">

            <img className="moxy-detail-pic" src="images/moxy-grab.png" />

          </div>

          <div className="col l6 s12 tools-used">

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
                  <i className="devicon-sass-original"></i>
                </div>
              </div>

            </div>

            <div className="button-box col l6 offset-l3 s12">
              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="See the walkthrough" href="https://www.youtube.com/watch?v=W916hHsEMko"><i className="material-icons">live_tv</i></a>
              <a className="btn-floating btn-large waves-effect waves-light tooltipped"
                data-position="bottom" data-delay="50" data-tooltip="Visit the site" href="https://dylan-gregory.github.io/tiy-final-project/"><i className="material-icons">computer</i></a>
              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Visit the codebase" href="https://github.com/dylan-gregory/tiy-final-project"><i className="material-icons">code</i></a>
            </div>

          </div>
          </div>



        </div>

        <div className="row">

          <div className="row descript-row">
            <div className="col m8 offset-m2">
              <p className="description">The idea for Moxy came from my wife, who is in school right now to become what is called a Health Coach. A Health Coach is a person who - well - does just that. When someone goes to the doctor and finds out that they have diabetes, for instance, the doctor never has time to sit down with them and explain what about their diet and habits that they need to change - so that is where a health coach comes in. I built Moxy to be an interface specifically for use between a health coach and their various clients. With Moxy, a health coach can customize the health plan, made up of action steps (todos), for each individual client, tailored to their specific needs. I was able to integrate with a really awesome API called Nutritionix, which allows each client to search the database and keep track of the nutrition facts for the food they eat each day/week.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  MoxyDetail
};
