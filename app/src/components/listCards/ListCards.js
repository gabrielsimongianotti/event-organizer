import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from "react-apollo";
import gql from "graphql-tag"

import Card from '../card/Card';

//Exemples
//<Card label="oisss" image='https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png' segment="rua"/>

class listCards extends Component {
    render() {
        let { allStartups = [] } = this.props.data
        return (
            allStartups.map((StartUp, int) => (

                < Card
                    key={int}
                    label={StartUp.name}
                    image={StartUp.imageUrl}
                    segment={StartUp.Segment.name}
                />
            ))
        )
    }
}
const StartUpQuery = gql`
query{
  allStartups {
    name
    imageUrl
    annualReceipt
    description
    Segment {
      id
      name
    }
  }
}
`;


export default graphql(StartUpQuery, { name: "data" })(listCards);