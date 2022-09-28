import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
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
        
       
            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD', height: 75}}>

                <Icon name="exclamation" size={20}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid' }}>- Welcome to YoPA Early Birds Version</Text>
                
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD', height: 75}}>

                <Icon name="exclamation" size={20}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black',  textDecorationStyle:'solid' }}>- You can now add and save your interests</Text>
                
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD', height: 75}}>

                <Icon name="exclamation" size={20}  />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid' }}>- You can scroll and view your main feed to see current listings</Text>
                
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-between',  borderWidth:2,
                 borderColor: '#DCDEDD', height: 75, width:350}}>

                <Icon name="exclamation" size={20}   />
                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationStyle:'solid' }}>- Community features coming soon</Text>
                
            </View>
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
    justifyContent: 'center',
    padding: 20
},
});

export default Notifications;