import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Expo from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationButton from '../../components/Navigation/NavigationItems/NavigationButton';
import { Container,Content, Badge, Card, CardItem, Item, Input, Body, Title, Right, Header, Footer, FooterTab, Button, Left } from 'native-base';

export default class Dashboard extends React.Component {

  render() { 
    return (
      
        <Container>
        <Image
        style={styles.BackgroundImage}
        source={{uri: 'https://i.ytimg.com/vi/29Y8F6eMM9g/maxresdefault.jpg'}}
        />
        
          <Input style={styles.SearchBar} placeholder='Search'/>
          <Button transparent>
            <Icon 
            style={{color: 'white', position: 'relative'}}
            name='th-list' />
          </Button>
        <Content style={styles.container}>
        <View style={styles.center}>
          <Image
            style={styles.ProfileImage}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
     
        <CardItem style={styles.Box}>
            <Body style={styles.CardProfileContent}>
            <Text>
                Willem Sebastian
            </Text>
            <Text>
                Mobile Developer
            </Text>
            <Text>
            <Icon active name="podcast" /> Work From Home 
            </Text>
            </Body>
        </CardItem>

        <View style={styles.Dashboard}>
          <Text>Your Dashboard</Text>
          <Text>This is private to you</Text>
            <NavigationButton />
            <NavigationButton />
            <NavigationButton />
          </View>
          
          <View>
          <Text>About</Text>
          <Text><Icon active name="envelope" /> Willem.Sebastian@Moonlay.com</Text>
          <Text><Icon active name="whatsapp" /> +62 818-800-845</Text>
          <Text><Icon active name="gift" /> 12 September 1991</Text>
          </View>
        </Content>
       
        <Footer>
          <FooterTab>
            <Button>
              <Icon 
              style = {{color: 'white'}}
              active name="user-o" />
            </Button>
            <Button>
              <Icon active name="bell-o" />
            </Button>
          </FooterTab>
        </Footer>
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
    marginTop: '5%',
    marginLeft: '5%',
  },

  ProfileImage: {
    width: 100, 
    height: 100,  
    borderRadius: 100,
    position: 'relative',
  },

  Dashboard: {
    backgroundColor: 'whitesmoke',
    height: 150,
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
  }

});
