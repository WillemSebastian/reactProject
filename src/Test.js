import React, {Component} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'

class Test extends Component {
    render(){
        return(
            <Text>{this.props.textCount}</Text>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        textCount: state.counterReducer.count
    }
}

export default connect(mapStateToProps)(Test)