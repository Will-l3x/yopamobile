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
        this.state = {
            modalVisible: true
          };
    }
    
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                            <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                
                                this.setModalVisible(!modalVisible);
                            }}
                            >
                                <View style={{flex: 1}}>
                                    <WebView source={{uri: this.props.Weburi}} />
                                </View>
                            </Modal>
                            
                        </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});