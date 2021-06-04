import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, Text, View,Image,ImageBackground,Button , StyleSheet, ScrollView} from 'react-native';
// import styles from '../assets/css/styles';

export default class Oeuvres extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        fetch('https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/oeuvres')
            .then((response) => response.json())
            .then((responseData) => this.setState({
                loading: true,
                data: responseData
            }))
            .catch((error) => console.error(error))
            .finally(() => this.loading = false);
    }

   
    render() {
        
        const oeuvres = this.state.data.map((val, key) => {
        let url  = `https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/user_guide/_static/images/${val.img}`;
            return(
              
                <View key={key} style={styles.Views}>
                    <Text style={{color:"#fff", padding:20,fontFamily:'LinuxLibertine',fontSize:20}}>{val.mouvement}</Text>
                    <Image style={styles.Image} source={{uri: url}}/>
                </View>
            )
         });
        return (
            <ScrollView style={{backgroundColor: "#054A61"}}>
              <View style={{flexDirection: "row", justifyContent: 'space-between',  marginTop:50, alignItems:'center', borderColor:'#fff',borderWidth: 5, shadowColor: "black", fontFamily:'LinuxLibertine'}}>
            <Image source = {require('../assets/img/cat.jpg')} style={{width:200, height:150, borderColor:'#fff',borderWidth: 5}}></Image>
            <Text style={{color:'#FFF', fontSize:40,margin:'auto', fontFamily:'LinuxLibertine'}}> Mouvements </Text>
          </View>
                <View>{oeuvres}</View>
            </ScrollView>
        )
        
    }
}


const styles = StyleSheet.create({
    Titleh1blue: {
      flex: 1,
      backgroundColor: '#054A61',
      alignItems: 'center',
          justifyContent: 'center',
      padding:10,
      
    },
    Image:{
        width:150,
        height:150,
        borderColor:'#fff',
        borderWidth: 5
    },
    Views:{
        display:'flex',
        alignItems:'center',
        padding:20
    }
  });

