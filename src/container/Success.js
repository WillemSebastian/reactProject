import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Metrix from '../components/Utility/Metrix'
import BottomSubmitButton from '../components/UI/Button/BottomSubmitButton'

class Success extends Component {
    render() {
        return(
            <View style={{backgroundColor: 'white', height: Metrix.screenHeight}}>
                <View style = {{padding: '5%', backgroundColor: 'white',}}>
                    <View style = {{alignItems: 'center'}}>
                    <Icon 
                    size={Icon.size || 90}
                    style={{color: 'darkblue', marginTop: Metrix.screenHeight* 0.4}}
                    active name='thumbs-o-up'
                    onPress = {() => this.props.navigation.navigate('Menu')}
                    />
                    <Text style = {{textAlign: 'center', fontSize: 24, color: 'blue'}}>Download Success</Text>
                    </View>
                </View>
                <BottomSubmitButton />
            </View>
        )
    }
}

export default Success;