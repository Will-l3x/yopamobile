import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions, 
    TouchableOpacity,
    Pressable,
    Modal,
    Alert,

} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from "../screenComponents/Category";
import Card from "../screenComponents/card";

const { height, width } = Dimensions.get('window')

class Home extends Component {

    state = {
        modalVisible: false
      };
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        const { modalVisible } = this.state;
                            return (
                                <SafeAreaView style={{ flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                    <View style={styles.centeredView}>
                            <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                this.setModalVisible(!modalVisible);
                            }}
                            >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                <Text style={styles.modalText}>Suppliers::::</Text>
                                <Text style={styles.modalText}>Supplier 1</Text>
                                <Text style={styles.modalText}>Supplier 2</Text>
                                <Text style={styles.modalText}>Suppliers 3</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Contact Seller</Text>
                                </Pressable>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Go Back</Text>
                                </Pressable>
                                </View>
                            </View>
                            </Modal>
                            
                        </View>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Experience new shopping format"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, color:'#35CAAC' }}>
                                What can we help you shop for?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../../../assets/home.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../../assets/experiences.jpg')}
                                        name="Furniture"
                                    />
                                    <Category imageUri={require('../../../assets/restaurant.jpg')}
                                        name="Groceries"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', color:'#35CAAC' }}>
                                    Yopa's Trending
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10, color:'#35CAAC' }}>
                                    A new selection of verified discounted offers

                                </Text>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-24/20220724T122122273.jpg",cache: 'only-if-cached'}}
                                    />
                                   

                                    <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Nail Salon Promo</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R250.00</Text>

                                </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T133647138.jpg", cache: 'only-if-cached'}}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>GLUTA PRIME PLUS</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R400.00</Text>

                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri:"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T133233452.jpg", cache:'only-if-cached'}}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>FROZEN COLLAGEN</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R300.006</Text>

                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri:"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T132153040.jpg", cache:'only-if-cached'}}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Miracle Pure White</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R900.00</Text>

                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri:"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-20/20220720T095829969.jpg", cache:'only-if-cached'}}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Lipstick</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R10.00</Text>

                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri:"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-21/20220721T112526595.png", cache:'only-if-cached'}}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Cream</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>R90.00</Text>

                                </View>
                                </TouchableOpacity>
                                
                            
                                
                            </View>
                        </View>
                        
                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }
}
export default Home;

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
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});