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
                    <Text style={{color:"#054A61", padding:20,fontFamily:'LinuxLibertine',fontSize:20,fontWeight: 'bold',fontFamily:'LinuxLibertine'}}>{val.artiste}</Text>
                    <Image style={styles.Image} source={{uri: url}}/>
                    <Text style={{color:"#054A61", fontSize:15,  fontWeight: 'bold',fontFamily:'LinuxLibertine'}}>{val.mouvement}</Text>
                    <Text style={{color:"#fff",fontFamily:'LinuxLibertine', padding:10, textAlign:'center', fontSize:15}}>{val.biographie}</Text>
                </View>
            )
         });
        return (
            <ScrollView style={{backgroundColor:'#ECDABA'}}>
                <View style={{flexDirection: "row", justifyContent: 'space-between',  alignItems:'center', borderColor:'#fff',borderWidth: 5, shadowColor: "black", fontFamily:'LinuxLibertine'}}>
                <Image source = {require('../assets/img/cat.jpg')} style={{width:200, height:150, borderColor:'#fff',borderWidth: 5}}></Image>
                <Text style={{color:'#FFF', fontSize:40,margin:'auto', fontFamily:'LinuxLibertine'}}> Artistes </Text>
                </View>
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
        borderColor:'#fff',
        borderWidth: 5
    },
    Views:{
        display:'flex',
        alignItems:'center',
        marginBottom:20,
        
    }
  });

