if (__DEV__) {
  require('react-devtools');
}
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from './src/components/Navigation/NavigationItems/AppNavigator'
import headerTextReducer from './src/redux/reducers/headerTextReducer'
import bottomSubmitButtonTextReducer from './src/redux/reducers/bottomSubmitButtonTextReducer'
import getCheckinLocationReducer from './src/redux/reducers/getCheckinLocationReducer'

const navReducer = createNavigationReducer(AppNavigator)
const appReducer = combineReducers({
  nav: navReducer, headerTextReducer, bottomSubmitButtonTextReducer, getCheckinLocationReducer
})

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const App = reduxifyNavigator(AppNavigator, "root")
const mapStateToProps = (state) => ({
  state: state.nav,
})

const AppWithNavigationState = connect(mapStateToProps)(App)

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
)

export default class Root extends Component {
  render(){
    return(
      <Provider store = {store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}