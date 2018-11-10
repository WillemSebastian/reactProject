<script src="http://192.168.56.1:8097"></script>
import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FooterApp from '../../components/Footer/FooterApp'
import Cover from '../../../assets/cover2.png'
import location from '../../../assets/location.png'
import Checkin from '../../../assets/Checkin.png'
import Worksheet from '../../../assets/Worksheet.png'
import Leave from '../../../assets/Leave.png'

import NavigationButton from '../../components/Navigation/NavigationItems/NavigationButton';
import { Container, Content, CardItem,  Input, Body} from 'native-base';
import Metrix from '../../components/Utility/Metrix';

export default class Dashboard extends React.Component {

  state = {
    UserName : "Willem",
    UserPosition : "Android Developer",
    UserImage : Cover,
    UserEmail : 'Willem.Sebastian@Moonlay.com',
    UserPhone : '0818800845',
    UserBirthday : '12 September 1991',
    title : null,
  }

  render() { 
    return (
        <Container>
          <Content>
            <View>
              <Image
                style={styles.BackgroundImage}
                source={Cover}
              />
              <View style = {{flexDirection: 'row'}}>
                <View style = {styles.searchSection}>
                  <Icon style = {{padding: 13}} name = "search" size = {18} color = "#000"/>
                  <Input style={styles.SearchBar} placeholder= 'Search'/>
                </View>
                <Icon 
                    size={Icon.size || 30}
                    style={{color: 'white', padding: 20, marginTop: 20}}
                    active name='th-list'
                    onPress = {() => this.props.navigation.toggleDrawer()}
                    />
              </View>
              <View style={styles.container}>
                <View style={styles.center}>
                  <Image
                    style={styles.ProfileImage}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                  />
                </View>
                  <CardItem style={styles.Box}>
                    <Body style={styles.CardProfileContent}>
                      <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 20}}>
                          {this.state.UserName}
                      </Text>
                      <Text>
                          {this.state.UserPosition}
                      </Text>
                      <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
                      <Image
                      style = {{height: 40, width: 40}}
                      source = {location} /> Work From Home 
                      </Text>
                    </Body>
                </CardItem>
              </View>
            </View>
            <View style={styles.Dashboard}>
              <Text style ={{fontWeight:'bold'}}>Your Dashboard</Text>
              <Text style ={{fontStyle:'italic', color: 'grey'}}>This is Private to you</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <NavigationButton
                Img = {Checkin}
                Text = "Checkin"
                />
                <NavigationButton
                Img = {Worksheet}
                Text = "Worksheet"
                />
                <NavigationButton
                Img = {Leave}
                Text = "Leave"
                />
              </View>
            </View>
            <View style={styles.containerAbout}>
              <Text style = {{fontWeight: 'bold'}}>
                About
              </Text>
              <Text style = {{marginTop: 20}}>
                <Icon 
                size={Icon.size || 20}
                active name="envelope" />   {this.state.UserEmail}
              </Text>
              <Text style = {{marginTop: 10}}> 
                <Icon 
                size={Icon.size || 20}
                active name="whatsapp" />   {this.state.UserPhone}
              </Text>
              <Text style = {{marginTop: 10}}>
                <Icon
                size={Icon.size || 20}
                active name="gift" />   {this.state.UserBirthday}
              </Text>
            </View>
          </Content>
          <FooterApp />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    elevation: 10
  },

  BackgroundImage: {  
    height: Metrix.screenHeight* 0.35,
    width: Metrix.screenWidth,
    alignItems: 'center',
    position: 'absolute',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: -10,
  },

  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  searchSection: {
    flex: 1,
    height: 40,
    marginTop: 35,
    marginLeft: '5%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  SearchBar: { 
    flex: 1,
  },

  ProfileImage: {
    width: 100, 
    height: 100,  
    borderRadius: 100,
    position: 'relative',
    marginTop: '4%',
    zIndex: 5,
  },

  Dashboard: {
    backgroundColor: 'whitesmoke',
    height: 200,
    padding: '5%',
  },

  Box:{
    borderRadius: 20,
    top: '-17%',
    borderColor: 'black',
    zIndex: -1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  
  CardProfileContent: {
    alignItems: 'center',
    marginTop: 50,
  },

  containerAbout: {
    padding: '5%',
  }

});
