var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/bin/materialize.js');
require('materialize-sass-origin/js/parallax.js');

class MainContainer extends React.Component {
  componentDidMount(){
    $('.parallax').parallax();
  }
  render(){
    return (
      <div>
        <div className="row head">
          <div className="col m4 offset-m4">

            <img className="logo" src="images/Gold-no-bg.png" />
            <h3 className="name">Dylan Gregory</h3>
            <h5 className="my-title">Front-End Web Developer</h5>

          </div>

        </div>

        <div className="body">
          <div className="row proj-title">
            <img className="star" src="./images/star-gold.png" />
              My latest projects

          </div>

          <div className="row proj-block">
            <div className="container">
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

                          <div className="tagline overtext">Mobile ordering web-store</div>

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

                          <div className="tagline overtext">Working with GitHub's API</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>

              <div className="col l4 m6 s12">

                <a href="#etsy/">
                  <div className="card etsy-card">

                    <div className="box">


                        <div className="overbox">

                          <div className="title overtext">Etsy</div>

                          <div className="tagline overtext">Working with Etsy's API</div>

                        </div>

                    </div>

                  </div>
                </a>

              </div>



            </div>
          </div>

          <div className="row toolkit-block">
            <div className="program-header">
              <img className="shave" src="./images/shave.png" />
              Tools of the trade

            </div>

            <div className="container">

              <div className="tool col l2 m3 s6">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-javascript-plain colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-backbonejs-plain-wordmark colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-jquery-plain-wordmark"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-sass-original colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-bootstrap-plain-wordmark colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-github-plain colored"></i>
              </div>

              <div className="tool col l2 m3 s6">
                <i className="devicon-mocha-plain colored"></i>
              </div>

              <div className="odd-tool col l2 m3 s6">
                <i className="devicons devicons-yeoman"></i>
              </div>

              <div className="odd-tool col l2 m3 s6">
                <i className="devicons devicons-requirejs"></i>
              </div>

            </div>
          </div>


            <div className="row me-block">
              <div className="me-head">
                <img className="anchor" src="./images/anchor-gold.png" />
                 About Me</div>
              <div className="col l4 m5 s12">
                <img className="pic-me" src="images/flower-pic.JPG" />
              </div>
              <div className="col l8 m7 s12">
                <p className="about-me">{"Hello, there! My name is Dylan and I'm a front-end web developer currently living in beautiful Greenville, SC. I see development as a form of art - I love to build applications and websites that express who the client is, but who I am as well. My approach to development is two-fold: the usability and function of a project is just as important as how it looks and how a person can interact with it. I'm a huge proponent of JavaScript and the cutting-edge libraries that are being built around it, such as ReactJS and Backbone.js, but I love to learn and problem solve in new ways every single day. I'm a musician, songwriter, lover of tattoos and all things coffee and beer."}</p>


              </div>

            </div>

            <div className="row contact-block">
              <h3 className="contact-head">Contact me </h3>
              <div className="container">

                <div className="col m6">
                  <ul>
                    <li><a href="mailto:jdylangregory@gmail.com"><i className="material-icons prefix">mail_outline</i>jdylangregory@gmail.com</a></li>
                    <li><a href="https://github.com/dylan-gregory"><i className="fa fa-github" aria-hidden="true"></i>github.com/dylan-gregory</a></li>
                    <li><a href="https://www.linkedin.com/in/dylan-gregory-66a551138/"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn Profile</a></li>
                    <li><a href="https://www.instagram.com/dylangreg"><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a></li>
                    <li><a href="./images/my-resume.pdf"><i className="material-icons">insert_drive_file</i>Checkout my resume</a></li>
                  </ul>

                </div>
                <div className="col m6">
                  <img className="right" src="./images/red-convert.png"/>
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
