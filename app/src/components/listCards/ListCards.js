import React, { Component } from 'react';
import { ActivityIndicator, Modal} from "react-native";
import { Actions } from 'react-native-router-flux';

import { graphql } from "react-apollo";
import gql from "graphql-tag"

import Card from '../card/Card';

//Exemples
//<Card label="oisss" image='https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png' segment="rua"/>

class listCards extends Component {

   alterPage(StartUp) {
    Actions.descrition({ Startup: StartUp })
    
  }

  render() {
    let { allStartups = [] } = this.props.data
    return (
      <>
        {
          allStartups.length === 0 ?
            <Modal
              transparent={true}
              // animationType={'none'}
              visible={true}>
              <ActivityIndicator style={{
                marginTop:"85%"
              }} size={100} color="#000" />
            </Modal>
            :
            allStartups.map((StartUp, int) => (
              < Card
                key={int}
                label={StartUp.name}
                image={StartUp.imageUrl}
                segment={StartUp.Segment.name}
                onPress={() => this.alterPage(StartUp)}
              />
            ))
        }
      </>
    )
  }
}
const StartUpQuery = gql`
query{
  allStartups {
    name
    imageUrl
    description
    Segment {
      name
    }
  }
}
`;


export default graphql(StartUpQuery, { name: "data" })(listCards);