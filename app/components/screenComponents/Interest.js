import React, { useState, useEffect, Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  CheckBox,
  Button,
  Modal,
} from 'react-native';
import Constants from 'expo-constants';



// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

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
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
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
        <View style={{ flex: 1 }}>
          {this.renderFlatList(this.state.products)}
        </View>
        <Text style={styles.text}>Selected </Text>
        <View style={{ flex: 1 }}>{this.renderFlatList(selected)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
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
});