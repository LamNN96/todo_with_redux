import { reduxifyNavigator } from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import AppNavigator from "./AppNavigator";

const AppReduxify = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppReduxify);

export default AppWithNavigationState;
