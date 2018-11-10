import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HeaderApp from '../../components/Header/HeaderApp'
import FooterApp from '../../components/Footer/FooterApp'
import { Item, Picker, Form, Icon, DatePicker, Input, Content} from 'native-base'
import Metrix from '../../components/Utility/Metrix'
import BottomSubmitButton from '../../components/UI/Button/BottomSubmitButton'

class SubmitLeave extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
    }
    onValueChange2() {
        this.setState({
          selected2: value
        });
    }
    render() {
        return(
            <View style={{backgroundColor: 'white', height: Metrix.screenHeight }}>
                <HeaderApp />
                <Content>
                    <View style = {{padding: '5%'}}>
                        <Text style = {{fontWeight: 'bold'}}>Leave Type</Text>
                        <Form>
                            <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Paid Leave" value="key0" />
                                <Picker.Item label="Compliment Leave" value="key1" />
                                <Picker.Item label="Sick Leave" value="key2" />
                                <Picker.Item label="Unpaid Leave" value="key3" />
                            </Picker>
                            </Item>
                            <Text style ={{marginTop: 20, fontWeight: 'bold'}}>Start Date</Text>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                />
                            <Text style ={{marginTop: 20, fontWeight: 'bold'}}>End Date</Text>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                />
                            <Text style ={{marginTop: 20, fontWeight: 'bold'}}>Detail/Purpose</Text>
                            <Item last>
                                <Input placeholder="Add your detail/purpose" />
                            </Item>
                            <Text style ={{marginTop: 20, fontWeight: 'bold'}}>Delegasi</Text>
                            <Item last>
                                <Input placeholder="Add your delegasi" />
                            </Item>
                        </Form>
                    </View>
                </Content>
                <BottomSubmitButton />
                <FooterApp />
            </View>
        )
    }
}

export default SubmitLeave;