import React from "react";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main: {
        minHeight: 280
    },
    promoStyle: {
        width: 330,
        height: 150,
        marginTop: 200,
        marginLeft: 18,
        marginRight: 18
    },
    container: {
        backgroundColor: 'black',
        minHeight: 270,
        position: 'absolute',
    },
    searchBar: {
        margin: 10,
        width: '90%'
    },
    header: {
        backgroundColor: 'black',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        padding: 10,
        gap: '40%'
    },
    location: {
        width: 'auto'
    },
    textStyle: {
        fontSize: 15,
        color: 'white',
        margin: 5
    },
    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 5
    }
});