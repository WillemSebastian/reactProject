import React, { Component } from 'react'
import { Header, Left, Button, Right, Body } from 'native-base'
import { Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Metrix from '../Utility/Metrix'
import { connect } from 'react-redux'

class HeaderApp extends Component {

    render(){
          return(
            <Header style ={{backgroundColor: '#1d5fa7', height: Metrix.screenHeight * 0.10 }}>
                <Left style={{flex: 1, marginTop: 15}}>
                <Button transparent>
                    <Icon 
                    size={Icon.size || 25}
                    style={{color: 'white'}}
                    active name='arrow-left'
                    onPress = {() => this.props.navigation.navigate('Dashboard')} />
                </Button>
                </Left>
                <Body style={{alignItems: 'center', flex: 1, marginTop: 15}}>
                <Text style={{color: 'white', fontSize: 18}}>{this.props.headerText}</Text>
                </Body>
                <Right style={{flex: 1, marginTop: 15}}>
                    <Button transparent>
                        <Icon 
                        size={Icon.size || 25}
                        style={{color: 'white'}}
                        active name='th-list'
                        onPress ={this.props.navigation.toggleDrawer}/>
                    </Button>
                </Right>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headerText: state.headerTextReducer
    }
}

export default withNavigation(connect(mapStateToProps)(HeaderApp))
    
                