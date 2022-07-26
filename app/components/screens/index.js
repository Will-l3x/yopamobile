import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home';
import Notifications from './Notifications';
import Search from './Search';
import Settings from './Settings';



const Tab = createBottomTabNavigator();

export default function TabIndex() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName="Home"
          activeColor="#35CAAC"
          inactiveColor="#4a4a4a"
          barStyle={{ backgroundColor: '#35CAAC' }}>


          <Tab.Screen
           options={{
            tabBarLabel: 'Home',
            title: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home" color={tintColor} size={24} />
            )
           }} 


          name="Home" component={Home} />


          <Tab.Screen 
           options={{
            tabBarLabel: 'Notifications',
            title: 'Notification',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="notifications" color={tintColor} size={24} />
            )
           }} 
          name="Notifications" component={Notifications} />
          <Tab.Screen 
           options={{
            tabBarLabel: 'Search',
            title: 'Search',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" color={tintColor} size={24} />
            )
           }} 
          name="Search" component={Search} />
          <Tab.Screen
             options={{
              tabBarLabel: 'Settings',
              title: 'Settings',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="settings" color={tintColor} size={24} />
              )
             }} 

            name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }