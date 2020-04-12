import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './Style';


class Input extends Component {

  render() {
    return (
      <View style={styles.inputText}>
        <Text style={styles.Text} >{this.props.label}</Text>
        <View>
          <TextInput
            style={styles.input}
            onChange={(text) => this.props.onChange(this.props.name, text.nativeEvent.text)}
            value={this.props.value}
          />
        </View>
      </View>
    );
  }
}

export default Input;