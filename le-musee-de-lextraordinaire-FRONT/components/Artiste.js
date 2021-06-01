import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, Text, View,Image,ImageBackground,Button , StyleSheet, ScrollView} from 'react-native';
// import styles from '../assets/css/styles';

export default class Artist extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        fetch('https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/artiste')
            .then((response) => response.json())
            .then((responseData) => this.setState({
                loading: true,
                data: responseData
            }))
            .catch((error) => console.error(error))
            .finally(() => this.loading = false);
    }

   
    render() {
        
        const artistes = this.state.data.map((val, key) => {
        let url  = `https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/user_guide/_static/images/${val.img}`;
            return(
                <View key={key} style={styles.Views}>
                    <Text>{val.artiste}</Text>
                    <Image style={styles.Image} source={{uri: url}}/>
                    <Text>{val.mouvement}</Text>
                    <Text>{val.biographie}</Text>
                </View>
            )
         });
        return (
            <ScrollView style={{backgroundColor:'#ECDABA'}}>
                <Text style={styles.Titleh1blue}>Artistes Disponibles</Text>
                <View>{artistes}</View>
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
    },
    Views:{
        display:'flex',
        alignItems:'center',
    }
  });

