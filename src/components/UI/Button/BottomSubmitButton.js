import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Metrix from '../../Utility/Metrix'
import { withNavigation }  from 'react-navigation'
import { connect } from 'react-redux'

class BottomSubmitButton extends Component {

    _navigationToPage(){
        // this.props.navigation.navigate('dashboard')
    
    }
    render(){
        return(
            <TouchableOpacity
                style = {{ 
                    marginLeft: Metrix.screenWidth * 0.1,
                    marginRight: Metrix.screenWidth * 0.1,
                    height: 50, 
                    borderRadius: 100, 
                    width: Metrix.screenWidth* 0.8, 
                    position: 'absolute', 
                    top: 0.8 * Metrix.screenHeight, 
                    alignItems: 'center', 
                    backgroundColor: '#1d5fa7',
                    }}
                
                >
                <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold', paddingTop: 12}}>
                    {this.props.bottomSubmitButtonText}
                </Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    alert(state)
    return{
        bottomSubmitButtonText: state.navigationToPage
    }
}

export default withNavigation(connect(mapStateToProps)(BottomSubmitButton))