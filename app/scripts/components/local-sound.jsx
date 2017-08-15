var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/tooltip.js');

class LocalSoundDetail extends React.Component {
  componentWillMount(){
    window.scrollTo(0, 0);
  }
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});
  }
  render(){
    return (
      <div className="Sound-detail">
        <div className="row title-row">
          <a className="btn-floating btn-large waves-effect waves-light back-btn" onClick={() => {window.history.back()}}><i className="material-icons">arrow_back</i></a>
            <div className="detail-title">

              <span className="name-title">Local Sound</span>
            </div>
        </div>

        <div className="row">


        <div className="container-fluid">
          <div className="sound-photos col l6 s12">

            <img className="ls-detail-pic" src="images/local-sound-grabs.png" />


          </div>

          <div className="col l6 s12 tools-used sound-tools">

            <div className="proj-tools">

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
                  <img className="detail-tool" src="./images/firebase-logo.png"/>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <img className="detail-tool" src="./images/react-native-logo.png"/>
                </div>
              </div>

              <div className="col m4 s6">
                <div className="devicons">
                  <img className="detail-tool" src="./images/redux-logo.png"/>
                </div>
              </div>


            </div>

            <div className="button-box col l6 offset-l3 s12">

              <a className="btn-floating btn-large waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Visit the codebase" href="https://github.com/dylan-gregory/local-sound-native"><i className="material-icons">code</i></a>

            </div>

          </div>
          </div>



        </div>

        <div className="row">

          <div className="row descript-row">
            <div className="col m8 offset-m2">
              <p className="description">This is my attempt at reviving local music in my city, but also in YOUR city. I am a guitarist, vocalist, and songwriter and have struggled for years to find like-minded creatives near me, so I wanted to build an app that makes it much more convenient for us musicians to collaborate. This is my biggest project with React Native and Redux so far, and I'm currently using Firebase for user auth and data storage until I can develop a personal solution. I had my doubts about Redux to begin with, but quickly found out how powerful it can be at a much larger scale - where I would love to take this some day. Since I have many many features still to add, the only way to interact with it right now is to clone the repo and open it with XCode. I love being able to see a need and meet it by building and designing a piece of software. (And in case you cared, all pictures featured in the app were taken by a friend of mine OF friends of mine. Go check out the band Beket if you love some good alt-rock!)</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = {
  LocalSoundDetail
};
