import * as React from 'react';
import {Button,Text,View, TouchableOpacity, Dimensions,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LogIn}>
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
                      name="TabIndex"
                      component={TabIndex}
                      options={{
                          headerShown: false,
                          headerLeft: null,
                      }}
                  />
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
            
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

