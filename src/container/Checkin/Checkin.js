import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Content, Container } from 'native-base'
import FooterApp from '../../components/Footer/FooterApp'
import HeaderApp from '../../components/Header/HeaderApp'
import CheckinDetail from './CheckinDetail'
import moonlay_hq from '../../../assets/moonlay_hq.png'
import remote from '../../../assets/remote.png'
import work_from_home from '../../../assets/work_from_home.png'
import onsite from '../../../assets/onsite.png'

import CheckinButton from '../../components/Navigation/NavigationItems/CheckinButton';

class Checkin extends Component {

    state = {
        title : null,
    }

    render(){
        const { goBack } = this.props.navigation;
        return(
            <Container>
                <HeaderApp />
                <Content>
                    <View style={{ padding: '5%'}}>
                        <View style={{alignItems: 'center', marginTop: 20}}>
                            <Text>Let people know where you are</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: '5%'}}>
                            <CheckinButton
                            title = {'MoonlayHQ'}
                            imgName = {moonlay_hq}
                            navigation = {this.state.navigation}
                            Text = "Checkin"
                            Location = "Moonlay HQ"
                            SubmitText = " CHECK IN"
                            />
                            <CheckinButton
                            title = { 'Remote' }
                            imgName = {remote}
                            navigation = {this.state.navigation}
                            Text = "Checkin"
                            Location = "Remote"
                            SubmitText = " CHECK IN"
                            />
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', marginTop: '5%', justifyContent: 'center'}}>
                            <CheckinButton
                            title = { 'Work From Home'}
                            imgName = {work_from_home}
                            navigation = {this.state.navigation}
                            Text = "Checkin"
                            Location = "Home"
                            SubmitText = " CHECK IN"
                            />
                            <CheckinButton
                            title = { 'Onsite' }
                            imgName = {onsite}
                            navigation = {this.state.navigation}
                            Text = "Checkin"
                            Location = "Onsite"
                            SubmitText = " CHECK IN"
                            />
                        </View>
                    </View>
                </Content>
                <FooterApp />
            </Container>
        )
    }
}

export default Checkin;