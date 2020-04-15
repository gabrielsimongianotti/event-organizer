import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputValue from "../../components/input/Input"
import Button from "../../components/button/Button"
import Backgroud from "../../components/background/Backgroud"
import styles from './Style';

export default class Login extends Component {
  render() {
    return (
      <Backgroud >

        <View style={styles.login}>

          <InputValue
            label="Login"
            name="login"
            onChange={(nameState, valueInput) => console.log(nameState, valueInput)}
          />
          <InputValue
            label="Senha"
            name="password"
            onChange={(nameState, valueInput) => console.log(nameState, valueInput)}
            password
          />
          <TouchableHighlight onPress={() => {
            Actions.home();
          }} underlayColor="transparent">
            <Button text={"Logar"} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            Actions.register()
          }} underlayColor="transparent">
            <Button text={"Cadastrar-se"} />
          </TouchableHighlight>
          {/* </View> */}
        </View>

      </Backgroud>
    )
  }
}
