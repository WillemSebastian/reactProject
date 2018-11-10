import React, { Component } from 'react'
import { BackHandler, SafeAreaView, Text, View, Image } from 'react-native'
import { Container, Content, Grid, List, ListItem } from 'native-base'
import Metrix from '../../components/Utility/Metrix'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation'

class DrawerContent extends Component { 
    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return false
        })
    }
    
    render() {
        return(
            <SafeAreaView style = {{ flex: 1 }}>
                <Container>
                    <Grid style = {{backgroundColor: 'whitesmoke'}}>
                        <View style={{marginTop: Metrix.screenHeight * 0.1}}>
                            <Image
                            
                             />
                            <List>
                                <ListItem onPress = {() => this.props.navigation.navigate('Dashboard')}>
                                    <Icon name = 'home' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> Dashboard</Text>
                                </ListItem>
                                <ListItem onPress = {() => this.props.navigation.navigate('Checkin', {page: 'Checkin'})}>
                                    <Icon name = 'sign-in' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> Check In</Text>
                                </ListItem>
                                <ListItem onPress = {() => this.props.navigation.navigate('Worksheet', {page: 'Worksheet'})}>
                                    <Icon name = 'wpforms' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> WorkSheet</Text>
                                </ListItem>
                                <ListItem onPress = {() => this.props.navigation.navigate('Leave', { page: 'Leave',route: 'SubmitLeave', textSubmit: 'Submit Leave' })}>
                                    <Icon name = 'plane' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> Leave</Text>
                                </ListItem>
                                <ListItem>
                                    <Icon name = 'sticky-note-o' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> Assign Project</Text>
                                </ListItem>
                                <ListItem>
                                    <Icon name = 'gears' size={Icon.size || 20}/>
                                    <Text style={{color: 'blue'}}> Setting</Text>
                                </ListItem>
                                <ListItem onPress = {() => this.props.navigation.navigate('Login')}>
                                    <Icon name = 'sign-out' size={Icon.size || 20}/>    
                                    <Text style={{color: 'blue'}}> Log Out</Text>
                                </ListItem>
                            </List>
                        </View>
                    </Grid> 
                </Container>
            </SafeAreaView>
        )
    }
}

export default withNavigation(DrawerContent)