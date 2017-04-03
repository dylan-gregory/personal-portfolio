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
            <h5 className="title">Front-End Web Developer</h5>

          </div>

          </div>

          <div className="row proj-title">

              Here are a few things I'm working on

          </div>

          <div className="row proj-block">
            <div className="col m4 offset-m2">

              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator Moxy-pic" src="images/Moxy-screen-1.png" />

                </div>

              </div>

            </div>

            <div className="col m4">

              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator Moxy-pic" src="images/Moxy-screen-1.png" />

                </div>
                <div className="card-content">
                  <div className="card-title">Moxy<i className="material-icons right">more_vert</i></div>

                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
            </div>
          </div>


            <div className="row me-block">
              <div className="col m4">
                <img className="pic-me" src="images/me-by-darious.jpg" />
              </div>
              <div className="col m8">
                <p className="about-me">{"Hello, there! My name is Dylan and I'm a front-end web developer currently living in beautiful Greenville, SC. I see development as a form of art - I love to build applications and websites that express who the client is, but who I am as well. My approach to development is two-fold - I believe that the usability and function of a project is just as important as how it looks and how a person can interact with it. I'm a huge proponent of JavaScript and the cutting-edge libraries that are being built around it, such as ReactJS and Backbone.js, but I love to learn and problem solve in new ways every single day. In my free time, I'm a musician, songwriter, and lover of all things caffeinated and brewed"}</p>
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
