import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import  { BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
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

                <Icon name="exclamationcircle" size={30} style={{paddingTop: 6}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid',paddingLeft:10 }}> Welcome to YoPA Early Birds Version</Text>
                
            </View>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Interest')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth:0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Icon name="exclamationcircle" size={30} style={{paddingTop: 6}}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid', paddingLeft:10 }}> You can now add and save your interests</Text>
                
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabIndexx')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Icon name="exclamationcircle" size={30}  style={{paddingTop: 6}}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid', paddingLeft:10 }}> You can scroll and view your main feed to see current listings</Text>
                
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TabIndexx')}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Icon name="exclamationcircle" size={30} style={{paddingTop: 6}}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid', paddingLeft: 10 }}> You can visit Sellers' social pages and websites</Text>
                
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{alert("Community features not yet ready.")}}>
            <View style={{flexDirection:'row',  borderWidth:2, borderLeftWidth: 0, borderRightWidth: 0,
                 borderColor: '#DCDEDD', height: 90, width:360}}>

                <Icon name="exclamationcircle" size={30} style={{paddingTop: 6}}  />
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