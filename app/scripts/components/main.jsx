var React = require('react');
var $ = window.$ = window.jQuery = require('jquery');

require('materialize-sass-origin/js/parallax.js');

class MainContainer extends React.Component {
  componentDidMount(){
    $('.parallax').parallax();
  }
  render(){
    return (
      <div>
        <div className="row">
          <div className="col m3">
            <h2>This is where my sticky nav will go...maybe?</h2>
          </div>

          <div className="col m9">

            <div className="parallax-container">
              <div className="parallax" ><img className="header-logo" src="images/logo-red-png.png" /></div>
            </div>

            
            <div className="row container">
              <div className="card">
                <div className="card-content">
                  hey cool stuff and things
                </div>
              </div>
              <h1>big words to make the paralax work?</h1>
              <h1>how about this?</h1>
            </div>


          </div>

        </div>

      </div>
    )
  }
}



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
