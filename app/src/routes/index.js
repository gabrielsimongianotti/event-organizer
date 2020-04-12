import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Login from '../pages/login/Login';
import Choise from "../pages/choise/Choise"

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { dataValid: false };
  }

  render() {
    const { dataValid } = this.state;
    const scenes = Actions.create(
      <Scene key="root">
        <Scene
          key="login"
          component={Login}
          type="reset"
          initial={dataValid}
          hideNavBar={true}
        />
        <Scene
          key="choise"
          component={Choise}
          type="reset"
          initial={!dataValid}
          hideNavBar={true}
        />

      </Scene>,
    );
    return <Router scenes={scenes} />;
  }
}
