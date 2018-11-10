import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Input, Button, Item, Form, Content, Container, Label } from 'native-base';
import Metrix from '../../components/Utility/Metrix';
import login from '../../../assets/login.png';
class Login extends Component {

    state = {
        username : 'Username',
        password : 'Password',
        login: 'false',
    }
    
    loginEventHandler = () => { 
        if (this.state.username == 'React' && this.state.password == 'Native'){
            this.setState({login: true});
            this.props.navigation.navigate('Dashboard');
        }
        else{
            this.setState({login: 'Login Failed'});
            alert(this.state.login);
        }
    };
    
    render() {
        
        return(
          
            <ImageBackground source = {login} style={styles.backgroundContainer} >
                <View style= {{alignItems: 'center', padding: '5%', marginTop: Metrix.screenHeight * 0.2}}>
                    <Text style ={{fontSize: 20, color: 'white'}}>moonlaytechnologies</Text>
                </View>
                    <Form>
                        <View style = {styles.centerView}>
                            <Item floatingLabel>
                            <Label style = {{ color: 'white' }}>Email</Label>
                            <Input 
                            style = {{ color: 'white' }}
                            onChangeText = {(text) => this.setState({username: text})}
                            />
                            </Item>
                            {/* <View style = {{borderBottomColor: 'white', borderBottomWidth: 2, marginTop: 10}}></View> */}
                            <Item floatingLabel>
                            <Label style = {{ color: 'white' }}>Password</Label>
                            <Input 
                            style = {{ color: 'white' }}
                            onChangeText = {(text) => this.setState({password: text})}
                            />
                            </Item>
                            {/* <View style = {{borderBottomColor: 'white', borderBottomWidth: 2, marginTop: 10}}></View> */}
                            <Text style = {{textAlign: 'right', marginTop: 20, color: '#ffffff' }}>Forgot Password?</Text>
                        </View> 
                        <Button 
                        style = {{width: Metrix.screenWidth, backgroundColor: '#1d5fa7', position: 'absolute', top: Metrix.screenHeight * 0.63 }}
                        onPress={this.loginEventHandler}>
                        <Text style ={{ color: 'white', marginLeft: '45%', fontSize: 18 }}>LOG IN</Text>
                        </Button>
                    </Form>
                </ImageBackground>
        )
    }
}   

const styles = StyleSheet.create({
    backgroundContainer: {
        width: Metrix.screenWidth,
        minHeight: Metrix.screenHeight*1.25,
    },

    centerView: {
        padding: '5%',
    },
})

export default Login;