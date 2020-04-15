import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Backgroud from "../../components/background/Backgroud"
import styles from './Style';
import ranking from "../../assets/image/ranking.png"
import trophy from "../../assets/image/trophy.png"

export default class Home extends Component {
  render() {

    return (
      <Backgroud goBack={() => { Actions.login() }}>

        <View style={styles.login}>
          <TouchableOpacity style={styles.grid} onPress={() => { Actions.choise() }}>
            <Image source={ranking} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.grid} onPress={() => { Actions.result() }}>
            <Image source={trophy} />
          </TouchableOpacity>

        </View>
      </Backgroud>
    )
  }
}
