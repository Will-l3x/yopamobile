import React,{Component} from 'react';
import {View, SafeAreaView, StyleSheet, BackHandler} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';





class Settings extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
      
              <View style={styles.menuWrapper}>
              <TouchableRipple onPress={()=>{this.props.navigation.navigate('Interest')}}>
                <View style={styles.menuItem}>
                  <Icon name="heart-outline" color="#35CAAC" size={25}/>
                  <Text style={styles.menuItemText}>My Interests</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{this.props.navigation.navigate('location')}}>
                <View style={styles.menuItem}>
                  <Icon name="map-marker" color="#35CAAC" size={25}/>
                  <Text style={styles.menuItemText}>Location</Text>
                </View>
              </TouchableRipple>
              
              <TouchableRipple onPress={()=>{this.props.navigation.navigate('update')}}>
                <View style={styles.menuItem}>
                  <Icon name="face-man-profile" color="#35CAAC" size={25}/>
                  <Text style={styles.menuItemText}>Edit Profile</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{BackHandler.exitApp()}}>
                <View style={styles.menuItem}>
                  <Icon name="location-exit" color="#35CAAC" size={25}/>
                  <Text style={styles.menuItemText}>Log Out</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={()=>{this.props.navigation.navigate('Delete')}}>
                <View style={styles.menuItem}>
                  <Icon name="delete-alert" color="#35CAAC" size={25}/>
                  <Text style={styles.menuItemText}>Delete Account</Text>
                </View>
              </TouchableRipple>
            </View>
          </SafeAreaView>
        )
    }
}   

export default Settings

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });
