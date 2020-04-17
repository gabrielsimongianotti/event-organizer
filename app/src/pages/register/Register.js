import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import InputValue from "../../components/input/Input"
import Button from "../../components/button/Button"
import Backgroud from "../../components/background/Backgroud"
import styles from './Style';

export default class Register extends Component {
  render() {
    return (
      <Backgroud  goBack={() => { Actions.login() }}>

        <View style={styles.block}>
        
            <InputValue
              label="Email"
              name="email"
              onChange={(nameState, valueInput) => console.log(nameState, valueInput)}
            />
            <InputValue
              label="Senha"
              name="password"
              onChange={(nameState, valueInput) => console.log(nameState, valueInput)}
            />
            <InputValue
              label="Digite a senha novamente"
              name="password"
              onChange={(nameState, valueInput) => console.log(nameState, valueInput)}
            />
            
            <TouchableHighlight onPress={() => {
              Actions.login()
            }} underlayColor="transparent">
              <Button text={"Cadastrar"} />
            </TouchableHighlight>
          {/* </View> */}
        </View>
   
      </Backgroud>
    )
  }
}
