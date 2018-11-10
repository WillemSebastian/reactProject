import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
    
class Actions extends Component {

    static changeHeaderText (){
        // return {
        //     type: 'CHANGE_HEADER_TEXT'
        // }
        this.props.dispatch({
            type: 'CHANGE_HEADER_TEXT'
        })
    }
    
    render(){
        return null
    }
}

function mapStateToProps( state ) {
    return{
        headerText: state.headerTextReducer.headerText
    }
}
export default withNavigation(connect(mapStateToProps)(Actions))