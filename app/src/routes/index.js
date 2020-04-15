import React, { Component } from 'react';
import { Router, Scene, Actions,  } from 'react-native-router-flux';

import Login from '../pages/login/Login';
import Choise from "../pages/choise/Choise";
import Descrition from "../pages/description/Description";
import Register from "../pages/register/Register";
import Home from '../pages/home/Home';
import Result from '../pages/result/Result';

console.disableYellowBox = true;
export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = { dataValid: false };
    }

    render() {
        const { dataValid } = this.state;
        const scenes = Actions.create(
            <Scene type="replace" >

                <Scene
                    key="login"
                    component={Login}
                    type="reset"
                    initial={dataValid}
                    hideNavBar={true}
                />

                <Scene
                    key="home"
                    component={Home}
                    type="reset"
                    initial={!dataValid}
                    hideNavBar={true}
                />

                <Scene
                    key="choise"
                    component={Choise}
                    type="reset"
                    initial={dataValid}
                    hideNavBar={true}
                />

                <Scene
                    key="descrition"
                    component={Descrition}
                    type="reset"
                    initial={dataValid}
                    hideNavBar={true}
                />

                <Scene
                    key="register"
                    component={Register}
                    type="reset"
                    initial={dataValid}
                    hideNavBar={true}
                />

                <Scene
                    key="result"
                    component={Result}
                    type="reset"
                    initial={dataValid}
                    hideNavBar={true}
                />

            </Scene>,
        );

        return <Router scenes={scenes} />;
    }
}
