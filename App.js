import React from 'react';
import { ScrollView } from 'react-native';
import Expo from 'expo';
import Login from './src/container/Login/Login';
import Checkin from './src/container/Checkin/Checkin';
import Dashboard from './src/container/Dashboard/Dashboard';

export default class App extends React.Component {
  state={
    isReady: false
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
     
        <Login />
      
    );
  }
}
