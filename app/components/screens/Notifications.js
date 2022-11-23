import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image } from "react-native";
import  { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import logo from '../../../assets/logo2.png'
class Notifications extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        
       
            <View style={{flexDirection:'row',   borderWidth:2, borderLeftWidth:0, borderRightWidth:0, borderTopWidth: 0,
                 borderColor: '#DCDEDD', height: 80, width: 360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid',paddingLeft:10 }}> Welcome to YoPA Early Birds Version</Text>
                
            </View>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Web', {Weburi: 'https://www.pnp.co.za/pnpstorefront/pnp/en/All-Products/Home%2C-Appliances-%26-Outdoor/Braai-%26-Camping/Camping/Hard-Cooler-Boxes/Big-Jim-Cooler-Box-25l/p/000000000000776299_EA' })}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth:0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Pick n Pay</Text>
                <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Cooler Box</Text>
                
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Web', {Weburi: 'https://www.checkers.co.za/All-Departments/Clothing-and-Footwear/Adult-Clothing/Sleepwear/Grey-and-Navy-Blue-S-XXL-Mens-Sleep-Set-2-Piece/p/10788355EA' })}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth:0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Checkers</Text>
                <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Clothig</Text>
                
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Web', {Weburi: 'https://www.shoprite.co.za/All-Departments/Health-and-Beauty/Personal-Grooming/Mens-Shaving/Nivea-Men-Extra-Moisturising-Shaving-Gel-200ml/p/10183472EA' })}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth:0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Shoprite</Text>
                <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> Men grooming</Text>
                
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Interest')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth:0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> You can now add and save your interests</Text>
                
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid', paddingLeft:10 }}> You can scroll and view your main feed to see current listings</Text>
                
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid', paddingLeft: 10 }}> You can visit Sellers' social pages and websites</Text>
                
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{alert("Community features not yet ready.")}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Image source={require('../../../assets/logo2.png')} style={{width: 40, maxWidth: 45, height:40, borderRadius: 200/2}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid', paddingLeft: 10 }}> Community features coming soon</Text>
                
            </View>
            </TouchableOpacity>


            
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    //justifyContent: 'center',
    padding: 20
},
});

export default Notifications;