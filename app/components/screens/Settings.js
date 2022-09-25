import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import  { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'



class Settings extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <View styles={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Interest')}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD',height: 75}}>

                <Icon name="hearto" size={20} style={{  paddingLeft: 30 }}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine:'underline', textDecorationStyle:'solid' }}>My Interests</Text>
                <Icon name="right" size={20} style={{  paddingLeft: 30 }}  />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('location')}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD',height: 75}}>

                <Icon name="pushpin" size={20} style={{  paddingLeft: 30 }}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine:'underline', textDecorationStyle:'solid' }}>Location</Text>
                <Icon name="right" size={20} style={{  paddingLeft: 30 }}  />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('update')}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD', height: 75}}>

                <Icon name="user" size={20} style={{  paddingLeft: 30 }}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine:'underline', textDecorationStyle:'solid' }}>Edit Profile</Text>
                <Icon name="right" size={20} style={{  paddingLeft: 30 }}  />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{BackHandler.exitApp()}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD',height: 75}}>

                <Icon name="user" size={20} style={{  paddingLeft: 30 }}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine:'underline', textDecorationStyle:'solid' }}>Log Out</Text>
                <Icon name="right" size={20} style={{  paddingLeft: 30 }}  />
            </View>
            </TouchableOpacity>
            </View>
        )
    }
}   

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    
});
