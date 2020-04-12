import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ApolloProvider } from "react-apollo";

import apolloClient from "../../services/apollo"
import ListCard from "../../components/listCards/ListCards"
import Backgroud from "../../components/background/Backgroud"

export default class Home extends Component {

  render() {
    return (
      <Backgroud>
        <ScrollView>
          <ApolloProvider client={apolloClient}>

            <ListCard   />
          </ApolloProvider>


        </ScrollView>
      </Backgroud>
    )
  }
}

