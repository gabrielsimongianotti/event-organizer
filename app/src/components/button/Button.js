import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./Style.js";

class Button extends Component {
    render() {
        return (
            <View style={styles.button}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </View>
        );
    }
}

export default Button;