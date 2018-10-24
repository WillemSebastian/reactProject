import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FooterApp from '../../components/Footer/Footer';
import NavigationButton from '../../components/Navigation/NavigationItems/NavigationButton';
import { Container, Content, CardItem,  Input, Body, Button } from 'native-base';

export default class Dashboard extends React.Component {

  render() { 
    return (
      
        <Container>
        <Image
        style={styles.BackgroundImage}
        source={{uri: 'https://i.ytimg.com/vi/29Y8F6eMM9g/maxresdefault.jpg'}}
        />
        <View style = {{flexDirection: 'row'}}>
          <Input style={styles.SearchBar} placeholder='Search'/>
          <Button transparent>
            <Icon 
            size={Icon.size || 30}
            style={{color: 'white', padding: 30, marginTop: 50}}
            active name='th-list' />
          </Button>
        </View>
        <Content>
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
                Willem Sebastian
            </Text>
            <Text>
                Mobile Developer
            </Text>
            <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
            <Icon 
            active name="podcast" /> Work From Home 
            </Text>
            </Body>
        </CardItem>
        </View>
        <View style={styles.Dashboard}>
          <Text style ={{fontWeight:'bold'}}>Your Dashboard</Text>
          <Text style ={{fontStyle:'italic', color: 'grey'}}>This is Private to you</Text>
            <View>
              
            </View>
          </View>
          <View style={styles.containerAbout}>
          <Text style = {{fontWeight: 'bold'}}>
            About
          </Text>
          <Text style = {{marginTop: 20}}>
            <Icon 
            size={Icon.size || 20}
            active name="envelope" />   Willem.Sebastian@Moonlay.com
          </Text>
          <Text style = {{marginTop: 10}}>
            <Icon 
            size={Icon.size || 20}
            active name="whatsapp" />   +62 818-800-845
          </Text>
          <Text style = {{marginTop: 10}}>
            <Icon
            size={Icon.size || 20}
            active name="gift" />   12 September 1991
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
  },

  BackgroundImage: {
    position: 'absolute',
    height: '35%',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    zIndex: -1,
  },

  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  SearchBar: { 
    backgroundColor: 'white',
    borderRadius: 40,
    maxHeight: 40,
    maxWidth: '75%',
    position: 'relative',
    zIndex: 1,
    marginTop: '7%',
    marginLeft: '5%',
  },

  ProfileImage: {
    width: 100, 
    height: 100,  
    borderRadius: 100,
    position: 'relative',
    marginTop: '5%',
  },

  Dashboard: {
    backgroundColor: 'whitesmoke',
    height: 150,
    padding: '5%',
  },

  Box:{
    borderRadius: 40,
    top: '-14%',
    borderColor: 'black',
    zIndex: -1,
  },
  
  CardProfileContent: {
    alignItems: 'center',
    marginTop: 50,
  },

  containerAbout: {
    padding: '5%',
  }

});
