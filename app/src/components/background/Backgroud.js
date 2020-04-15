
import React, { Component } from "react";
import { BackHandler, StyleSheet, ImageBackground, StatusBar, View, TouchableHighlight } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import image from "../../assets/image/business.jpg"
export default class background extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = async () => {
    let { goBack = () => { console.log("click") } } = this.props
    await goBack();
  }

  render() {

    return (
      <ImageBackground source={image} style={styles.fund}>
        <StatusBar translucent backgroundColor="transparent" />

        <View style={{ marginTop: 40 }}>
          {this.props.children}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  fund: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center"
  }
});