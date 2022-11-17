import * as React from 'react';
import {Button,Text,View, TouchableOpacity, Dimensions,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {DrawerActions} from "@react-navigation/native";
import LogIn from './app/auth/login';
import SignUp from './app/auth/signup';
import TabIndex from './app/components/screens';
import FinishSignUp from './app/auth/finishisignup';
import Category from './app/components/screenComponents/Category';
import TermsAndConditions from './app/components/screenComponents/Terms';
import Interest from './app/components/screenComponents/Interest';
import Home from './app/components/screens/Home';
import LandingScreen from './app/components/screens/LandingScreen';
import Notifications from './app/components/screens/Notifications';
import Settings from './app/components/screens/Settings';
import Icon from 'react-native-vector-icons/Ionicons'
import ComingSoon from './app/components/screenComponents/ComingSoon';
import Update from './app/components/screenComponents/Update';
import DeleteAcc from './app/auth/Delete';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LandingScreen}>


        <Stack.Screen name="landingpage"
                          component={LandingScreen}
                          options={{
                            headerShown: false,
                            headerLeft: null,
                            }}
                    />
                          
            <Stack.Screen
                          name="LogIn"
                          component={LogIn}
                          options={{
                              headerShown: false,
                              headerLeft: null,
                              }}
                      />
            <Stack.Screen
                      name="SignUp"
                      component={SignUp}
                      options={{
                          headerShown: false,
                          headerLeft: null,
                      }}
                  />
            <Stack.Screen
              name="Tabs"
              component={TabIndexx}
              options={{ headerShown: false }} 
            />

           
            <Stack.Screen name="Interest" component={Interest} options={{
                      headerShown: false,
                      headerLeft: null,
                  }}/>
            <Stack.Screen name="Coming" component={ComingSoon} options={{
                      headerShown: false,
                      headerLeft: null,
                  }}/>
            <Stack.Screen name="location" component={Location} options={{
                      headerShown: false,
                      headerLeft: null,
                  }}/>
            <Stack.Screen name="update" component={Update} options={{
                      headerShown: false,
                      headerLeft: null,
                  }}/>
            
            <Stack.Screen name="Delete" component={DeleteAcc} options={{
                      headerShown: false,
                      headerLeft: null,
                  }}/>
             
                   <Stack.Screen
                      name="Finish"
                      component={FinishSignUp}
                      options={{
                          headerShown: false,
                          headerLeft: null,
                      }}
                  />
                  <Stack.Screen
                      name="Web"
                      component={Category}
                      options={{
                          headerShown: false,
                          headerLeft: null,
                      }}
                  />
                  <Stack.Screen
                        name='terms'
                        component={TermsAndConditions}
                        options={{
                          headerShown: false,
                          headerLeft: null,
                      }}
                  />
                  
            
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function TabIndexx() {
  return (
    
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
            tabBarLabel: 'Settings',
            title: 'Settings',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="settings" color={tintColor} size={24} />
            )
           }} 

          name="Settings" component={Settings} />
      </Tab.Navigator>
      
    
  );
}

