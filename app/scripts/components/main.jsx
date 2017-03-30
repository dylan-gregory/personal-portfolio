var React = require('react');
var mui = require('material-ui');
// var ThemeManager = require('material-ui/styles/theme-manager').default;

var darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
var AppBar = require('material-ui/AppBar').default;

// var ThemeManager = new mui.Styles.ThemeManager();

class MainContainer extends React.Component{
  childContextTypes() {
     muiTheme: React.PropTypes.object
  }
  // getChildContext() {
  //       return {
  //           stores: this.props.stores,
  //           muiTheme: ThemeManager.getCurrentTheme()
  //       };
  //   }
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
    )
  };
}

module.exports = {
  MainContainer
}
