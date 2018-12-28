import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import AppWithNavigationState from "./src/navigation/AppWithNavigationState";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
