import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Erro from "../../assets/image/error.png"
import Star from "../../components/star/Star"
import Backgroud from "../../components/background/Backgroud"
import styles from './Style.js';

export default class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false,
      star: 0,
      starPitch: 0
    }
  }

  alterState(nameState, value) {
    this.setState({
      ...this.state,
      [nameState]: value
    });
  }

  backPage() { Actions.choise() }

  render() {
    const { imageUrl = "", description = "", name = "" } = this.props.Startup
    return (
      <Backgroud goBack={() => this.backPage()}>
        <ScrollView>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={this.state.error ? Erro : { uri: imageUrl }}
              onError={(e) => this.setState({ ...this.state, error: !this.state.error })}
            />
            <View style={styles.box}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
              <Text style={styles.text}>Proposta</Text>
              <Star disabled={false} rating={this.state.star} onStarRatingPress={event => this.alterState("star", event)} />
              <Text style={styles.text}>Apresentação/Pitch</Text>
              <Star disabled={false} rating={this.state.starPitch} onStarRatingPress={event => this.alterState("starPitch", event)} />
            </View>
          </View >
        </ScrollView>
      </Backgroud>
    )
  }
}

