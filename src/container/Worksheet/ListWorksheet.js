import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderApp from '../../components/Header/HeaderApp';
import { Item, Input, Card, CardItem } from 'native-base';

class ListWorksheet extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white'}}>
                <HeaderApp />
                <View style = {{padding: '5%', backgroundColor: 'white'}}>
                    <Item>
                        <Input placeholder="APPROVAL BY" />
                    </Item>
                    <Text style ={{textAlign: 'right', color: 'red', fontWeight: 'bold'}}>Deny Request?</Text>
                    <Card>
                        <CardItem header style={{height: '30%'}}>
                        <View>
                            <Text>Signature Here</Text>
                        </View>
                        </CardItem>
                    </Card>
                    <View style = {{ height: 50, borderRadius: 100, marginTop: '70%', alignItems: 'center', backgroundColor: 'blue'}}>
                        <Text style = {{color: 'white', fontSize: 24, fontWeight: 'bold', paddingTop: 8}}>
                            Submit
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default ListWorksheet;