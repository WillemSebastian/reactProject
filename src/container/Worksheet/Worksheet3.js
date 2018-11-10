import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderApp from '../../components/Header/HeaderApp'
import { Item, Input, Card, CardItem } from 'native-base'
import Metrix from '../../components/Utility/Metrix'
import BottomSubmitButton from '../../components/UI/Button/BottomSubmitButton';

class Worksheet3 extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white', height: Metrix.screenHeight }} >
                <HeaderApp />
                <View style = {{padding: '5%', backgroundColor: 'white'}}>
                    <Item>
                        <Input placeholder="APPROVAL BY" />
                    </Item>
                    <Text style ={{textAlign: 'right', color: 'red', fontWeight: 'bold'}}>Deny Request?</Text>
                    <Card style = {{marginTop: 50}}>
                        <CardItem header style={{height: Metrix.screenHeight * 0.3}}>
                        <View>
                            <Text style = {{ color: 'lightgrey'}}>SIGNATURE HERE</Text>
                        </View>
                        </CardItem>
                    </Card>
                    
                </View>
                <BottomSubmitButton />
            </View>
        )
    }
}

export default Worksheet3;