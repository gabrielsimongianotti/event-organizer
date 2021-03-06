import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ApolloProvider } from "react-apollo";
import { Actions } from 'react-native-router-flux';

import apolloClient from "../../services/apollo"
import ListCard from "../../components/listCards/ListCards"
import Backgroud from "../../components/background/Backgroud"

export default class Choise extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <Backgroud goBack={() => Actions.home()}>
        <ScrollView>
          <ApolloProvider client={apolloClient}>
            <ListCard />
          </ApolloProvider>
        </ScrollView>
      </Backgroud>
    )
  }
}

