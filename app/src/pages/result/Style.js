import { StyleSheet } from "react-native";

export default StyleSheet.create({
    login: {
        width: 350,
        borderRadius: 5,
        backgroundColor: "#F5F5F5",
        alignContent: 'space-around',
        
        flexWrap: 'wrap',
        justifyContent: "space-around"
    },
    card: {
        margin: 10,
        borderRadius: 5,
        width: "95%",
        height: 150,
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },
    image: {
        margin: 2,
        width: "40%",
        height: 100,
        resizeMode: 'contain',
        borderRadius: 5,
    },
    number: {
        fontSize: 40,
        marginLeft:2,
        marginRight:4
    },
    text: {
        marginLeft: 10,
        fontSize: 30
    },
    result: {
        marginLeft: 10,
        fontSize: 40
    },
    textData: {
        marginLeft: 10,
        fontSize: 14
    },
    textStar: {
        color: "#ffcc00",
        marginLeft: 15,
        fontSize: 15
    }
});