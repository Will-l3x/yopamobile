import React, { useState, useEffect, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Modal,
} from 'react-native';
//import CheckBox from '@react-native-community/checkbox';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// or any pure javascript modules available in npm
import { Card, Checkbox } from 'react-native-paper';

const data = [
  { id: 1, txt: 'Clothes & Fashion', isChecked: false },
  { id: 2, txt: 'Beauty & Cosmetics', isChecked: false },
  { id: 3, txt: 'Electronics', isChecked: false },
  { id: 4, txt: 'Mobile Phones & Accessories', isChecked: false },
  { id: 5, txt: 'Services', isChecked: false },
  { id: 6, txt: 'Shoes & Footwear', isChecked: false },
  { id: 7, txt: 'Computers & Accessories', isChecked: false },
];

export default class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data,
    };
    this.storeData = this.storeData.bind(this);
    this.getData = this.getData.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  componentDidMount(){
    this.getData();
    //this.clearAll();
  }

   storeData = async () => {
    try {
      await AsyncStorage.setItem('Choices', JSON.stringify(this.state.products))
      this.props.navigation.navigate('TabIndex');
    } catch (e) {
      // saving error
    }
  }

  
getData = async () => {
  try {
    const value = await AsyncStorage.getItem('Choices')
    if(value !== null) {
      console.log("Loading your selections")
      console.log(JSON.parse(value))
      this.setState({
        products: JSON.parse(value)
      })
    }else{
      console.log("No previous choice stored please select")
    }
  } catch(e) {
    // error reading value
    console.log(e)
  }
}

clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }

  console.log('Done.')
}


  handleChange = (id) => {
    let temp = this.state.products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    this.setState({
      products: temp,
    });
    
  };

  renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <Checkbox.IOS
                  color= {`#35CAAC`} uncheckedColor={`#35CAAC`}
                  status={item.isChecked}
                  onPress={() => {
                    this.handleChange(item.id);
                  }}
                />
                <Text>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  };

  render() {
    let selected = this.state.products?.filter((product) => product.isChecked);
    return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.loginBtn}
            onPress = {()=>{this.storeData()} }
            >
            <Text style={styles.loginText}>Save</Text>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          {this.renderFlatList(this.state.products)}
        </View>
        <Text style={styles.text}>Selected </Text>
        
        <View style={styles.container}>{this.renderFlatList(selected)}</View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginBtn:{
    width:wp('60%'),
        backgroundColor:"#35CAAC",
        borderRadius:wp('1.5%'),
        height:hp('5%'),
        alignSelf:"center",
        justifyContent:"center",
        marginTop:hp('3%'),
        marginBottom:hp('2%'),
        borderColor: '#4a4a4a',
},
loginText:{
  color:"#4a4a4a",
  alignSelf:"center",
  justifyContent:"center",
},
});