import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import Actions from '../../../actions/Actions'

class navigationButton extends Component{

    _navigatePage = (navigateText) => {
        this.props.navigation.navigate(this.props.Text)
        this.props.dispatch({
            type: 'CHANGE_HEADER_TEXT',
            headerText: this.props.Text
        })
    }

    render(){
        return(
            <View style={styles.CardBox} >
                <TouchableOpacity style = {styles.NavigationBox} onPress = {() => this._navigatePage()}>
                <Image
                style = {{height: 50, width: 50}}
                source = {this.props.Img}
                name = {this.props.IconName}
                />
                </TouchableOpacity>
                <Text style={{color: 'blue', fontSize: 16}}>{this.props.Text}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        headerText: state.headerTextReducer
    }
}

const styles = StyleSheet.create({
    DisplayFlex : {
        display: 'flex',
        width: 100,
        alignItems: 'center',
    },
    
    DisplayFlexButton: {
        borderRadius: 50,
    },

    CardBox: {
        marginTop: '3%',
        borderRadius: 30, 
        width: '30%', 
        marginLeft: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
      },
      
      NavigationBox: {
        alignItems: 'center',
        borderRadius: 50,
      },
});

export default withNavigation(connect(mapStateToProps)(navigationButton));