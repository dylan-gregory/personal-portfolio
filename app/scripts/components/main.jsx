var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/parallax.js');
require('materialize-sass-origin/js/tooltip.js');

class MainContainer extends React.Component {
  componentDidMount(){
    $('.tooltipped').tooltip({delay: 50});


  }
  render(){
    return (
      <div>
        <div className="row head">

            <img className="logo" src="images/surfboard-2.png" />
            <h3 className="name">Dylan Gregory</h3>
            <h5 className="my-title">Web Developer & Designer</h5>



        </div>

        <div className="body">
          <div className="row proj-title">
            <img className="dagger" src="./images/dagger.png" />
              <span>My latest projects</span>

          </div>

          <div className="row proj-block">
            <div className="container">

              <div className="col l4 m6 s12">

                <a href="#local_sound/" >
                  <div className="card ls-card">

                    <div className="box">


                        <div className="overbox">

                          <div className="title overtext">Local Sound</div>

                          <div className="tagline overtext">Musician collaboration app</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>

              <div className="col l4 m6 s12">

                <a href="#moxy/">
                  <div className="card moxy-card">
                    <div className="box">

                        <div className="overbox">

                          <div className="title overtext">Moxy</div>

                          <div className="tagline overtext">Health coach interface</div>

                        </div>

                    </div>

                  </div>
                </a>


              </div>

              <div className="col l4 m6 s12">

                <a href="#thai/">
                  <div className="card majestic-card">

                    <div className="box">


                        <div className="overbox">

                          <div className="title overtext">Thai</div>

                          <div className="tagline overtext">Takeout ordering portal</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>

              <div className="col l4 m6 s12">

                <a href="#github/">
                  <div className="card github-card">

                    <div className="box">


                        <div className="overbox">

                          <div className="title overtext">GitHub</div>

                          <div className="tagline overtext">Github recreation</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>

              <div className="col l4 m6 s12">

                <a href="#etsy/" >
                  <div className="card etsy-card">

                    <div className="box">


                        <div className="overbox">

                          <div className="title overtext">Etsy</div>

                          <div className="tagline overtext">Etsy recreation</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>

            </div>
          </div>

          <div className="row toolkit-block">
            <div className="program-header">
              <img className="razor" src="./images/razor-logo.png" />
              <span>Tools of the trade</span>

            </div>

            <div className="container tool-box">
              <div className="row">
                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="HTML5">
                  <i className="devicon-html5-plain-wordmark colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="CSS3">
                  <i className="devicon-css3-plain-wordmark colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="JavaScript (ES6)">
                  <i className="devicon-javascript-plain"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Backbone.js">
                  <i className="devicon-backbonejs-plain-wordmark colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="ReactJS">
                  <i className="devicon-react-original-wordmark"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="jQuery">
                  <i className="devicon-jquery-plain-wordmark"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Sass">
                  <i className="devicon-sass-original colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Bootstrap">
                  <i className="devicon-bootstrap-plain-wordmark colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Git/GitHub">
                  <i className="devicon-github-plain colored"></i>
                </div>

                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Mocha">
                  <i className="devicon-mocha-plain colored"></i>
                </div>

                <div className="odd-tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Yeoman">
                  <i className="devicons devicons-yeoman"></i>
                </div>

                <div className="odd-tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Require.js">
                  <i className="devicons devicons-requirejs"></i>
                </div>
              </div>



              <div className="row new-tools">
                <div className="tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Materialize/Material UI">
                  <img src="./images/materialize-logo-png.png" />
                </div>

                <div className="strange-tool tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="React Native">
                  <img src="./images/react-native-logo.png" />
                </div>

                <div className="strange-tool tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Redux">
                  <img src="./images/redux-logo.png" />
                </div>

                <div className="strange-tool tool col l2 m3 s6 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Firebase">
                  <img src="./images/firebase-logo.png" />
                </div>
              </div>

            </div>



          </div>


            <div className="row me-block">
              <div className="me-head">
                <img className="anchor" src="./images/anchor-logo-1.png" />
                 About Me</div>
              <div className="col l4 m5 s12">
                <img className="pic-me" src="images/first-headshot.jpg" />
              </div>
              <div className="col l8 m7 s12">
                <p className="about-me">{"Hey friend! My name is Dylan - I'm a front-end developer and aspiring designer currently living in beautiful Greenville, SC. I see development as a form of art - I love to build applications and websites that express who the client is, but who I am as well. My approach to development is two-fold: the usability and function of a project is just as important as how it looks and how a person can interact with it. I'm a huge proponent of JavaScript and the cutting-edge libraries that are being built around it, such as React.js and Backbone.js, as well as React Native to build native iOS and Android apps. I love learning and problem solving, and am growing as a developer and designer every single day. In my free time, I play the guitar, sing, write songs, whip up neat vector icons (as seen all over this here website), collect tattoos, and drink a ridiculous amount of coffee."}</p>


              </div>

            </div>

            <div className="row contact-block">
              <h3 className="contact-head">
                <img className="swallow" src="./images/rose-red.png" />
                Contact me </h3>
              <div className="container">

                <div className="col m6">
                  <ul>
                    <li><a href="mailto:jdylangregory@gmail.com"><i className="material-icons prefix">mail_outline</i> jdylangregory@gmail.com</a></li>
                    <li><a href="https://github.com/dylan-gregory"><i className="fa fa-github" aria-hidden="true"></i> github.com/dylan-gregory</a></li>
                    <li><a href="https://www.linkedin.com/in/dylan-gregory-66a551138/"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn Profile</a></li>
                    <li><a href="https://www.instagram.com/dylangreg"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                    <li><a href="https://dribbble.com/dylan_gregory"><i className="fa fa-dribbble" aria-hidden="true"></i> Dribbble</a></li>
                    <li><a href="./images/dylans-resume.pdf"><i className="material-icons">insert_drive_file</i>Checkout my resume</a></li>
                  </ul>

                </div>
                <div className="big-logo col m6">
                  <img className="right palm" src="./images/palm-tree.png"/>
                </div>
              </div>


            </div>
          </div>
        </div>


    )
  }
}

// <div className="card-content">
//   <div className="card-title center activator">Moxy: a multi-user interface<i className="material-icons right">more_vert</i></div>
//
// </div>
// <div className="card-reveal">
//     <span className="card-title center grey-text text-darken-4">Moxy<i className="material-icons right">close</i></span>
//     <p>Here is some more information about this product that is only revealed once clicked on.</p>
// </div>



/////
// This was my inital stab at using Material-UI - which works, but I ditched it to move more quickly with what
// I already knew with Materialize
/////


// var mui = require('material-ui');
// // var ThemeManager = require('material-ui/styles/theme-manager').default;
// var injectTapEventPlugin = require('react-tap-event-plugin');
// var darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default;
// var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
// var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
// var AppBar = require('material-ui/AppBar').default;
// var IconButton = require('material-ui/IconButton').default;
// var NavigationClose = require('material-ui/svg-icons/navigation/close').default;
// var FlatButton = require('material-ui/FlatButton').default;
//
// injectTapEventPlugin();
//
// // var ThemeManager = new mui.Styles.ThemeManager();
//
// class MainContainer extends React.Component{
//   childContextTypes() {
//      muiTheme: React.PropTypes.object
//   }
//   // getChildContext() {
//   //       return {
//   //           stores: this.props.stores,
//   //           muiTheme: ThemeManager.getCurrentTheme()
//   //       };
//   //   }
//   handleTouchTap(){
//     console.log('hey');
//   }
//   render(){
//     return (
//       <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//         <AppBar title="My AppBar"
//           title={<span>Title</span>}
//           onTitleTouchTap={this.handleTouchTap}
//           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//           iconElementRight={<FlatButton label="Save" />}
//
//           />
//       </MuiThemeProvider>
//     )
//   };
// }

module.exports = {
  MainContainer
}
