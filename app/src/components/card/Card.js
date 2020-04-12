import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, } from 'react-native';
import PropTypes from 'prop-types';

import { graphql } from "react-apollo";
import gql from "graphql-tag"
import Erro from "../../assets/image/error.png"
import styles from './Style.js';

//Exemples
//<Card label="oisss" image='https://static.wixstatic.com/media/0adf28_eec83b33056243a9a33440a10b5d7afd.png' segment="rua"/>

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }
    render() {

        return (
            <TouchableOpacity disabled={true} style={styles.card} onPress={()=>console.log("opacity: 0.3,")}>
                <Image
                    style={styles.image}
                    source={this.state.error == false ? { uri: this.props.image } : Erro}
                    onError={(e) => this.setState({ ...this.state, error: !this.state.error })}
                />
                <Text style={styles.name}>{this.props.label}</Text>
                <Text style={styles.segment}>{this.props.segment}</Text>
            </TouchableOpacity >
        );
    }
}


Card.propTypes = {
    image: PropTypes.string,
    label: PropTypes.string,
    segment: PropTypes.string
}

export default Card