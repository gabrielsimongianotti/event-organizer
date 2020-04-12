
import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import image from "../../assets/image/business.jpg"
export default class background extends Component {
    render() {
        return (
            <ImageBackground source={image} style={styles.fund}>
                {this.props.children}
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