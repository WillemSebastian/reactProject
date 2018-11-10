import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Metrix from '../../Utility/Metrix'
import { connect } from 'react-redux'

class CheckinButton extends Component {
    
    _navigatePage = () => {
        this.props.navigation.navigate('CheckinDetail')
        this.props.dispatch({
            type: 'CHANGE_BOTTOM_SUBMIT_BUTTON_TEXT',
            bottomSubmitButtonText: 'Check In',
            navigationToPage: 'Checkin'
        })
        this.props.dispatch({
            type: 'GET_CHECKIN_LOCATION',
            checkinLocation: this.props.title
        })
    }

    render(){
        return(
            <View style={{
                backgroundColor: 'white',
                borderRadius: 50,
                width: (Metrix.screenWidth /2) - 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 160,
                marginLeft: 10,
                marginRight: 10,
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
                }}
                >
                <TouchableOpacity style={{
                    alignItems: 'center',
                    borderRadius: ((Metrix.screenWidth /2) - 30) /2,  
                    }}
                onPress = {this._navigatePage}
                >
                    <Image
                        style={{height: 60, width: 60}}
                        source={this.props.imgName}
                    />
                </TouchableOpacity>
            <Text style={{color: 'blue', marginTop: 20, fontWeight: 'bold', fontSize: 14}}>{this.props.title}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bottomSubmitButtonText: state.bottomSubmitButtonTextReducer
    }
}

export default withNavigation(connect(mapStateToProps)(CheckinButton));