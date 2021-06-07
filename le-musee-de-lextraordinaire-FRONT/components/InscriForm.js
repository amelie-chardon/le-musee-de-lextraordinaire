//Components/LoginForm.js

import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
// import AppButton from './AppButton'
// import styles from '../assets/css/styles';
import { MaterialIcons } from '@expo/vector-icons';




export default class LoginForm extends React.Component {

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
        
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost/le-musee-de-lextraordinaire/');
        // headers.append('GET', 'POST', 'OPTIONS');
        //Appel à l'API
        fetch("https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/utilisateur/connexion",
            {
                // Adding method type 
                // credentials: 'include',
                method: "POST",
                // headers: headers,
                // mode: 'no-cors',

                // Adding body or contents to send 
                body: JSON.stringify({
                    email: this.state.email,
                    mdp: this.state.password
                }),

                // Adding headers to the request 
                //DELETE HEADER DELETE PROB CORS WTF
                //https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
                // headers: {
                //     "Content-type": "application/json; charset=UTF-8"
                // }
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
                        <Text style={{color:'#FFF', fontSize:40,margin:'auto'}}> Inscription</Text>
                    </View>
                <View style={{flex : 5, alignItems: 'center', justifyContent: 'space-around', flexDirection:'column',height:100}}>
                
                    <TextInput
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1, fontSize:'150%'}}
                            name ="Login"
                            type="Login" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Login'
                            placeholder='Login'
                            />
                    <TextInput
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1, fontSize:'150%'}}
                            name ="email"
                            type="email" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Email'
                            placeholder='Email'
                            />
                    <TextInput  
                            style= {{borderBottomColor:'#fff', borderBottomWidth:1,fontSize:'150%'}}
                            name ="mdp"
                            type="password" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Mot de passe'
                            placeholder='Mot de passe'
                            />
                   
                        <TouchableOpacity 
                           onPress={this.handleSubmit} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Envoyer</Text>
                        </TouchableOpacity>
                
                
    
    
 
  


                    
                        {/* <MaterialIcons name="account-circle" size={24} color="#ECDABA" /> */}
                        {/* <TextInput
                            name='email'
                            
                            autoCompleteType='email'
                            label='Email'
                            clearTextOnFocus={true}
                            keyboardType='email-address'
                            placeholder='Email'
                            placeholderTextColor="#ECDABA"
                            textContentType='emailAddress'
                            autoCompleteType='email'
                            //value={ this.state.value }
                            onChange={this.handleChange}
                        />
                    </View>
                    <View >
                        <MaterialIcons name="vpn-key" size={24} color="#ECDABA" />
                        <TextInput
                            name='password'
                            
                            label='Mot de passe'
                            clearTextOnFocus={true}
                            keyboardType='default'
                            placeholder='Mot de passe'
                            placeholderTextColor="#ECDABA"
                            secureTextEntry={true}
                            textContentType='password'
                            //value={this.state.mdp}
                            onChange={this.handleChange}
                        />
                    </View>
*/
                    // <Button
                        
                    //     onClick= {(event) => this.handleSubmit()}
                    //     title="Valider"
                    //     accessibilityLabel="Valider"
                    // />
                 }
                    </View>
                    </View>
               

            );
        }

    }

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
    },
});

