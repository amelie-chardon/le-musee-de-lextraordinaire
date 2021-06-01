//Components/LoginForm.js

import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from 'react-native';
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
        console.log(this.state.mdp);
        

        //Appel à l'API
        fetch("https://amelie-chardon.students-laplateforme.io/le-musee-de-lextraordinaire-API/utilisateur/connexion",
            {
                // Adding method type 
                method: "POST",

                // Adding body or contents to send 
                body: JSON.stringify({
                    email: this.state.email,
                    mdp: this.state.mdp
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

                <View>
                <Text >
                    Connexion
                </Text>
                
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input  name ='email'
                            type="email" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Email'
                            placeholder='Email'
                            />
                    <input  name ='mdp'
                            type="password" 
                            value={this.state.value} 
                            onChange={this.handleChange}
                            label='Password'
                            placeholder='Password'
                            />
                  </label>
                  <input type="submit" value="Envoyer" />
                </form>


                    
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

                    <Button
                        onClick= {(event) => this.handleSubmit()}
                        title="Valider"
                        accessibilityLabel="Valider"
                    /> */}
                    </View>
               

            );
        }

    }

