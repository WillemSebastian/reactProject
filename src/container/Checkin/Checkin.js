import React, { Component } from 'react';
import { View, rrrrScrollView, Text } from 'react-native';
import { Header, Left, Body, Right, Content, Container, Button } from 'native-base';
import FooterApp from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';

class Checkin extends Component {
    render(){
        return(
            <Container>
                
                <Header>
                    <Left>
                    <Button transparent>
                        <Icon 
                        
                        style={{color: 'white'}}
                        active name='arrow-left' />
                    </Button>
                    </Left>
                    <Body style={{alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Check In</Text>
                    </Body>
                    <Right>
                    <Button transparent>
                        <Icon 
                        style={{color: 'white'}}
                        active name='th-list' />
                    </Button>
                    </Right>
                </Header>
                
                <Content style={{backgroundColor: 'whitesmoke'}}>
                    <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text>Let people know where you are</Text></View>
                </Content>
                <FooterApp />
            </Container>
        )
    }
}



export default Checkin;