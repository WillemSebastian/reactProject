import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import { Item, Input, Card, CardItem, Content } from 'native-base'
import BottomSubmitButton from '../../components/UI/Button/BottomSubmitButton'
import Metrix from '../../components/Utility/Metrix'

class ApprovalLeave extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white', height: Metrix.screenHeight}}>
                <HeaderApp />
                <Content>
                    <View style = {{padding: '5%', backgroundColor: 'white'}}>
                        <Item>
                            <Input placeholder="APPROVAL BY" />
                        </Item>
                        <Text style ={{textAlign: 'right', color: 'red', fontWeight: 'bold'}}>Deny Request?</Text>
                        <Card style={{marginTop: 50}}>
                            <CardItem header style={{height: Metrix.screenHeight * 0.3}}>
                            <View>
                                <Text>Signature Here</Text>
                            </View>
                            </CardItem>
                        </Card>
                    </View>
                </Content>
                <BottomSubmitButton />
                <FooterApp />
            </View>
        )
    }
}

export default ApprovalLeave;