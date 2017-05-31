import React from 'react'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import TalksCalendarPresenter from '../screens/TalksCalendarPresenter'
import LoginPresenter from '../screens/LoginPresenter'

export const Tabs = TabNavigator({
  Talks: {
    screen: TalksCalendarPresenter,
    navigationOptions: {
      tabBarLabel: 'Calendar',
      // tabBarIcon: ({ _ }) => <Icon name='calendar'/>
    }
  },
  WishList: {
    screen: LoginPresenter,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      // tabBarIcon: ({ tintColor }) => <Icon name='star' size={35} color={tintColor} />
    }
  },
  Create: {
    screen: LoginPresenter,
    navigationOptions: {
      tabBarLabel: 'Create',
      // tabBarIcon: ({ tintColor }) => <Icon name='plus' size={35} color={tintColor} />
    }
  },
    Settings: {
    screen: LoginPresenter,
    navigationOptions: {
      tabBarLabel: 'Settings',
      // tabBarIcon: ({ tintColor }) => <Icon name='cog' size={35} color={tintColor} />
    }
  }
})