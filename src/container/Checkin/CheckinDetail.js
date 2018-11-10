import React, { Component } from 'react'
import { View, Text, Span } from 'react-native'
import { Container, Content, Button } from 'native-base'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import Metrix from '../../components/Utility/Metrix'
import { connect } from 'react-redux'
import BottomSubmitButton from '../../components/UI/Button/BottomSubmitButton'

class CheckinDetail extends Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            count: 0 };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    
    componentWillMount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    _WaktuSekarang = () => {
        let time = new Date().toLocaleTimeString();
        return time;
    }

    _TanggalSekarang = () => {
        let date = new Date().toLocaleDateString();
        return date;
    }

    render() {
        return(
            <Container>
                <HeaderApp />
                    <View style = {{padding: '5%', alignItems: 'center', backgroundColor: 'white', minHeight: Metrix.screenHeight}}>
                        <Text style={{textAlign: 'center', marginTop: '10%', fontWeight: 'bold', fontSize: 20}}>{this.props.checkinLocation}</Text>
                        <View style ={{
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: 'grey',
                            paddingLeft: 50,
                            paddingRight: 50,
                            alignItems: 'center',
                            marginTop: '10%',
                            width: (Metrix.screenWidth * 0.9),
                        }}>
                            <Text style= {{marginTop: '5%', fontWeight: 'bold'}}> {this._TanggalSekarang()}</Text>
                            <Text style = {{marginTop: '7%'}}>Current Time</Text>
                            <Text style = {{color: 'blue', fontSize: 36, fontWeight: 'bold', marginBottom: '10%'}}> {this.state.date.toLocaleTimeString()} </Text>
                        </View>
                        <BottomSubmitButton />
                    </View>
                <FooterApp />
            </Container>             
        );
    }
}

const mapStateToProps = (state) => {
    return{
        checkinLocation: state.getCheckinLocationReducer
    }
}

export default connect(mapStateToProps)(CheckinDetail);