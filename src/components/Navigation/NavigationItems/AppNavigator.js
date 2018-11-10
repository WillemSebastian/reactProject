import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import DrawerContent from '../../../container/Drawer/DrawerContent';
import {
  createStackNavigator,
} from 'react-navigation';
import Routes from '../../../config/routes'

const AppNavigator = createDrawerNavigator({
    Home: {
      screen: createStackNavigator(
        Routes,
      {   
      navigationOptions: {
          header: null
      }
      })
    }
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 200,
    drawerPosition: 'right',
  })

  export default AppNavigator