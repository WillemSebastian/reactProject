import React, { Component } from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

class FooterApp extends Component {
    render(){
        return(
            <Footer>
                <FooterTab>
                <Button style={{backgroundColor: '#2f75c2'}} onPress = {() => this.props.navigation.navigate('Dashboard')}>
                    <Icon 
                    style = {{color: 'white'}}
                    size={Icon.size || 25}
                    active name="user-o"
                    />
                </Button>
                <Button style={{backgroundColor: '#1d5fa7'}} onPress = {() => this.props.navigation.navigate('Notifications', {page: "Notification"})}>
                    <Icon 
                    style = {{color: 'white'}}
                    size={Icon.size || 25}
                    active name="bell-o" 
                    />
                </Button>
                </FooterTab>
            </Footer>
        )
    }
}
    
export default withNavigation(FooterApp)