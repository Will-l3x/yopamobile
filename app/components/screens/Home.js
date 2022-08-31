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
    Button

} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from "../screenComponents/Category";
import Card from "../screenComponents/card";
import {WebView} from 'react-native-webview';

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
                                
                                this.setModalVisible(!modalVisible);
                            }}
                            >
                                <View style={{flex: 1}}>
                                    <WebView source={{uri: this.props.Weburi}} />
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
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, color:'black' }}>
                                What can we help you shop for?
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', color:'black' }}>
                                    Your Feed
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10, color:'black' }}>
                                    A new selection of verified discounted offers

                                </Text>
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>


                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-21/20220721T112526595.png",cache: 'only-if-cached'}}
                                    />
                                   
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R 90.00</Text> 
                                    <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>Cream</Text>
                                    
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 190.00</Text>
                                    </View>

                                </View>
                                    <View style={styles.ContactSeller} >
                                           
                                            
                                            
                
                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                            <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>cream lightening</Text>

                                            <View>
 
                                                   
                                                   <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>

                                                   
                                                        
                                                    
                                                    <View >

                                                    </View>
                                               
                                            </View>
                                           
                                    </View>
                                    
                                </TouchableOpacity>

                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T131605844.jpg",cache: 'only-if-cached'}}
                                    />
                                   
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R 400.00</Text> 
                                    <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>SO Q ( L-glutathione)</Text>
                                    
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 500.00</Text>
                                    </View>

                                </View>
                                    <View style={styles.ContactSeller} >
                                           
                                            
                                            
                
                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                            <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>Increase natural whitening & brightening of your skin collagen tripeptide : reduce wrinkles, anti aging. grape seed extract : protect damaged collagen, increase skin to white, pine bark ,reduce freckles, dark spots, vitamin e 50% ,recovery skin to more smoothener,decrease dry and damaged skin</Text>

                                            <View>
 
                                                   
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>

                                                   
                                                        
                                                    
                                                    <View >

                                                    </View>
                                               
                                            </View>
                                           
                                    </View>
                                    

                                            <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T131908581.jpg",cache: 'only-if-cached'}}
                                />
                               
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R 300.00</Text> 
                                <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>GLUTA WHITE</Text>
                                
                                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 400.00</Text>
                                </View>

                            </View>
                                <View style={styles.ContactSeller} >
                                       
                                        
                                        
            
                                        <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                        <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>Gluta white 1500000mg is an effective skin soft gel which works from the inside out to give you a glowing, whiter and even skin tone. gluta white stands our because of its high strength(1500000mg) and fortification with numerous other skin active ingredients and vitamins. it lightens and whitens the skin 5x faster than many other glutathione formulae. improves the health of the total body cells which is particularly apparent in the skin, hair and nails helps to moisturize the skin deep stimulates blood circulation for healthy skin reduces wrinkles, freckles and dark spots. reduces acne, scars, moles, age spot, knuckles and other skin blemishes. helps to maintain healthy hair and nails, as well. improves the elasticity of the skin. powerful anti-aging 30 softgels per each bottle.</Text>

                                        <View>

                                               
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>
                                               
                                                    
                                                
                                                <View >

                                                </View>
                                           
                                        </View>
                                       
                                </View>
                                
                            

                                        <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T132153040.jpg",cache: 'only-if-cached'}}
                                />
                               
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R 900.00</Text> 
                                <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>Miracle Pure White</Text>
                                
                                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 1050.00</Text>
                                </View>

                            </View>
                                <View style={styles.ContactSeller} >
                                       
                                        
                                        
            
                                        <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                        <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>Transform your skin with skandal beauty. try and you will see the result ... hey! miracle pure white has just been released!It lightens your skin. soften and smooth skin. revitalizes sun-damaged skin. evens out tone and minimize redness. hydrates thirsty skin. improves elasticity. helps reduce inflammation and acne. eases hyperpigmentation. calms down sunburn. may increase strength and reduce muscle soreness. promotes cell turnover. contains antioxidant and anti-inflammatory.</Text>

                                        <View>

                                               
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>

                                               
                                                    
                                                
                                                <View >

                                                </View>
                                           
                                        </View>
                                       
                                </View>
                               

                                        <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T133233452.jpg",cache: 'only-if-cached'}}
                                />
                               
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R 300.00</Text> 
                                <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>FROZEN COLLAGEN</Text>
                                
                                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 400.00</Text>
                                </View>

                            </View>
                                <View style={styles.ContactSeller} >
                                       
                                        
                                        
            
                                        <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                        <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>Transform your skin with skandal beauty. try and you will see the result ... hey! miracle pure white has just been released!It lightens your skin. soften and smooth skin. revitalizes sun-damaged skin. evens out tone and minimize redness. hydrates thirsty skin. improves elasticity. helps reduce inflammation and acne. eases hyperpigmentation. calms down sunburn. may increase strength and reduce muscle soreness. promotes cell turnover. contains antioxidant and anti-inflammatory</Text>

                                        <View>

                                               
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>

                                               
                                                    
                                                
                                                <View >

                                                </View>
                                           
                                        </View>
                                       
                                </View>
                               
                            

                                        <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                
                                
                                <Image
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                    source={{uri: "https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T125801276.jpg",cache: 'only-if-cached'}}
                                />
                               
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{fontSize:22, fontWeight: 'bold', marginTop: 10, color:'black' }}>R  300.00</Text> 
                                <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>GLUTTA BERRY</Text>
                                
                                <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R 400.00</Text>
                                </View>

                            </View>
                                <View style={styles.ContactSeller} >
                                       
                                        
                                        
            
                                        <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                        <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>200000 mg. Special intensive formula whitening rinse white skin, white aura! White fade freckles, dark spots, boost a white aura around the body. (see results faster than 10x capsules).</Text>

                                        <View>

                                               
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://facebook.com/itsyopaonline" })}}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://twitter.com/itsyopa" })}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://instagram.com/itsyopa" })}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Web', {Weburi: "http://itsyopa.com/" })}}>
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>

                                               
                                                    
                                                
                                                <View >

                                                </View>
                                           
                                        </View>
                                       
                                </View>
                                <View style={styles.ContactSeller}>
                                            
                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'left', paddingTop: 1}}>Bossladyskinpage2</Text>
                                            
                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'left', paddingTop: 10}}>We provide beauty perfection across the world. We work closely with dermatologist and specialist laboratories to formulate our safe and functional skincare range. Our main principal at Boss Lady Beauty is to fulfil the skins & hairs needs, in return all we ask is for you to give your confidence the care it deserves.</Text>

                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'left', paddingTop: 15}}></Text>
                                        </View>
                            

                                
                                
                               
                               
                            
                                
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
      },
      ContactSeller:{
       
        backgroundColor:"#fff",
        
        
        justifyContent:"center",
        
        borderWidth:2,
        borderColor: '#DCDEDD',
      }
});