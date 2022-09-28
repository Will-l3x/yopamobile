import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Modal,
} from "react-native";
import {WebView} from 'react-native-webview';

class Category extends Component { 
    constructor(props){
        super(props)
       
    }
    
    
     
    render() {
       const {Weburi} = this.props.route.params;
       console.log(Weburi)
        return (
            <WebView
            source={{
              uri: Weburi
            }}
            style={{ marginTop: 20 }}
          />
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
});