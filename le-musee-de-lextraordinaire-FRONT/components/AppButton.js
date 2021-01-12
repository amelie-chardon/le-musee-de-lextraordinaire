//Components/AppButton.js

import React from 'react';
import { StyleSheet, TouchableOpacity, Button, View, SafeAreaView, Text, Alert } from 'react-native';
//import '../assets/import.css';


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={'onPress'} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);



    

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ECDABA",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 20,
        color: "#054A61",
        alignSelf: "center",
        //fontFamily: 'Linux Libertine'
    },
});

export default AppButton;