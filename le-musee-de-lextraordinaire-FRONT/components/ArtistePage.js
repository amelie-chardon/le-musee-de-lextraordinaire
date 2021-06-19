import * as React from 'react';
import { View, Button, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';


export default class ArtistePage extends React.Component {
    
  render() {
    // console.log(this.props);
    const res = this.props.route.params.val;
    let url  = `https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/user_guide/_static/images/${res.img}`;
    // console.log(this.props.route.params.val);
    return (
      <View style={styles.Views}>
        <Image style={styles.Image} source={{uri: url}}/> 
        <Text>{res.artiste}</Text>
        <Text>{res.mouvement}</Text>
        <Text>{res.biographie}</Text>

      </View>
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
      flex:1,
      alignItems:'center',
      backgroundColor: '#054A61'
      
  }
});