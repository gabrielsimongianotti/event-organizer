import React, { Component } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Erro from "../../assets/image/error.png"
import Star from "../../components/star/Star"
import Backgroud from "../../components/background/Backgroud"
import styles from './Style';
import ranking from "../../assets/image/ranking.png"
import trophy from "../../assets/image/trophy.png"

export default class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    const data = [
      {
        "imageUrl": "https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png",
        "Segment": {
          "name": "AgriTech"
        },
        "name": "AgroNow",
        "pitch": 4,
        "proposal": 5
      },
      {
        "imageUrl": "https://www.eaalim.com/download/wp-content/uploads/2014/01/hellfire.jpg",
        "description": "Criamos games interativos disponíveis nas plataformas Console e PC para gamers hardcore!",
        "Segment": {
          "name": "Games"
        },
        "name": "Hellfire Games",
        "pitch": 3.4,
        "proposal": 4.5
      },
      {
        "imageUrl": "http://www.sevna.com.br/site/wp-content/uploads/2018/08/MarcasAceleradas_predify.png",
        "description": "Plataforma que oferece ao micro e pequeno empreendedor uma inteligência de negócios de forma intuitiva e eficiente através do entendimento e controle dos números da empresa.",
        "Segment": {
          "name": "Fintech"
        },
        "name": "Predify",
        "pitch": 3,
        "proposal": 2.5
      }
    ]
    return (
      <Backgroud goBack={() => { Actions.home() }}>

        <View style={styles.login}>

          <Text style={styles.result}>Resultados</Text>
          <ScrollView style={{ textAlign:"center"}}>
            <Text style={styles.text}>Proposta</Text>
            {data.map((value, int) => (
              <View style={styles.card} >
                <View>
                  <Text style={styles.number}>{int + 1}</Text>
                </View>
                <Image
                  style={styles.image}
                  source={this.state.error == false ? { uri: value.imageUrl } : Erro}
                  onError={(e) => this.setState({ ...this.state, error: !this.state.error })}
                />
                <View>
                  <Text style={styles.textData}>Nome: {value.name}</Text>
                  <Text style={styles.textData}>{value.Segment.name}</Text>
                  <Text style={styles.textStar}>{value.proposal}/5</Text>
                  <Star disabled={true} rating={value.proposal} size={27} />
                </View>
              </View>
            ))}



            <Text style={styles.text}>Apresentação/ Pitch</Text>
            {data.map((value, int) => (
              <View style={styles.card} >
                <View>
                  <Text style={styles.number}>{int + 1}</Text>
                </View>
                <Image
                  style={styles.image}
                  source={this.state.error == false ? { uri: value.imageUrl } : Erro}
                  onError={(e) => this.setState({ ...this.state, error: !this.state.error })}
                />
                <View>
                  <Text style={styles.textData}>Nome: {value.name}</Text>
                  <Text style={styles.textData}>{value.Segment.name}</Text>
                  <Text style={styles.textStar}>{value.pitch}/5</Text>
                  <Star disabled={true} rating={value.pitch} size={30}  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

      </Backgroud>
    )
  }
}
