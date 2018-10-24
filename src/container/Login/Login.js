import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'native-base';
import PropTypes from 'prop-types';

import sea from '../../../assets/sea.jpg';
import node from '../../../assets/node.png';

class Login extends Component {
    state = {
        username : 'willem',
        password : 'sebastian',
    }
    
    render() {

        loginEventHandler = () => { 
            console.log("a");
        };

        if(this.state.username == 'willem' && this.state.password == 'sebastian'){
            return(
                <ImageBackground source = {sea} style={styles.backgroundContainer} >
                    <View style ={styles.LogoContainer}>
                        <Image source = {node} style={styles.Logo}>
                        </Image>
                    </View>
                        <Input style={styles.LoginInput} onChange = {console.log('b')} placeholder='Username' />
                        <Input style={styles.LoginInput} onClick = {console.log('c')} placeholder='Password' />
                        {/* <View style ={styles.LogoContainer}> */}
                            <Button 
                            light 
                            style={styles.LoginButton}
                            clicked={loginEventHandler}><Text>Login</Text></Button>
                        {/* </View> */}
                </ImageBackground>
            )
        } 
        else {
            return(
                <Text>a</Text>
            )
        }
    }
}

    

const styles = StyleSheet.create({
    backgroundContainer: {
        // flex: 1,
        width: null,
        height: 700,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
  
    },

    LogoContainer: {
        alignItems: 'center',
    },

    Logo: { 
        width: 180,
        height: 100,
        zIndex: 1,
    },

    LoginInput: {
        backgroundColor: 'white',
        width: '80%',
        maxHeight: 50,
        marginTop: 20,
        textAlign: 'center',
        borderRadius: 20,
    },

    LoginButton: {
        backgroundColor: 'lightblue',
        width: 320,
        top: 130,
        left: '7%',
        maxHeight: 80,
        marginTop: 50,
        borderRadius: 20,
        paddingLeft: '35%',
    }
})
export default Login;