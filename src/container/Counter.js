import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'native-base'
import { connect } from 'react-redux'

class Counter extends Component {
    state= { count : 0 }

    increment = () => {
        this.props.dispatch({type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }

    render() {
        return(
            <View style = {{flex: 1, flexDirection: 'row', margin: '10%'}}>
                <Button style = {{width: 50, height: 50, backgroundColor: 'white', padding: 20}} onPress = { this.decrement }><Text>-</Text></Button>
                <Text>{this.props.count}</Text>
                <Button style = {{width: 50, height: 50, backgroundColor: 'white', padding: 20}} onPress  = { this.increment }><Text>+</Text></Button>
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.counterReducer.count
    }
}

export default connect(mapStateToProps)(Counter)

