//Components/ProfilForm.js

import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
// import AppButton from './AppButton'
// import styles from '../assets/css/styles';
import { MaterialIcons } from '@expo/vector-icons';




export default class ProfilForm extends React.Component {

    constructor(props) {
        super(props);

        //Load API
        this.loading = true;
        this.data = null;

        //Form
        this.state = { email: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Lors d'un changement dans le formulaire
    handleChange(event) {
        this.setState({ [event.target.type]: event.target.value });
        console.log(this.state);
    }

    //Lors de l'envoi du formulaire
    handleSubmit(event) {
        event.preventDefault();
        console.log('Try submit');
        console.log(this.state.email);
        console.log(this.state.password);
    
        //Appel à l'API
        fetch("https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/utilisateur/connexion",
            {
                // Adding method type 
                
                method: "POST",
            

                // Adding body or contents to send 
                body: JSON.stringify({
                    email: this.state.email,
                    mdp: this.state.password
                }),

            }
        )
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error))
            .finally(() => this.loading = false);
    }


        render(){

            return (

                <View style={{flex:1,backgroundColor: "#054A61"}}>
                     <View style={{flexDirection: "row", justifyContent: 'space-between',  marginTop:50, alignItems:'center', borderColor:'#fff',borderWidth: 5, shadowColor: "black"}}>
                        <Image source = {require('../assets/img/cat.jpg')} style={{width:200, height:150, borderColor:'#fff',borderWidth: 5}}></Image>
                        <Text style={{color:'#FFF', fontSize:40,margin:'auto', fontFamily:'LinuxLibertine'}}>Mon profil</Text>
                    </View>
                <View style={{flex : 5, alignItems: 'center', justifyContent: 'space-around', flexDirection:'column',height:100}}>
                
                    <TextInput
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1, fontSize:'150%', fontFamily:'LinuxLibertine'}}
                            name ="Login"
                            type="Text" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Login'
                            placeholder='Login'
                            />
                    <TextInput
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1, fontSize:'150%', fontFamily:'LinuxLibertine'}}
                            name ="email"
                            type="email" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Email'
                            placeholder='Email'
                            />
                    <TextInput  
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1,fontSize:'150%',fontFamily:'LinuxLibertine'}}
                            name ="mdp"
                            type="password" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Mot de passe'
                            placeholder='Mot de passe'
                            />
                   
                  
                <TouchableOpacity 
                    onPress={this.handleSubmit} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={this.handleSubmit} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Supprimer compte</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={this.handleSubmit} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>Mes Favoris</Text>
                </TouchableOpacity>

                 
                </View>
            </View>
               

            );
        }

    }

    const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor:"#ECDABA",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 20,
        color: "#054A61",
        alignSelf: "center",
        fontFamily:'LinuxLibertine'
    },
});

