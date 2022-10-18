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
    Button,
    FlatList,
    ActivityIndicator, 
    VirtualizedList

} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from "../screenComponents/Category";
import Card from "../screenComponents/card";
import {WebView} from 'react-native-webview';
import call from 'react-native-phone-call';

const { height, width } = Dimensions.get('window')

class Homes extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
          };
    }
   
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    initiateCall(number){
        var args = {
            number: number,
            prompt: false
        }

        call(args).catch(console.error)
    }

   

    

    render() {
        const { modalVisible } = this.state;
                            return (
                                <SafeAreaView style={{ flex: 1 }}>
                                    <View style={{ flex: 1 }}>
                                   
                    
                                <TouchableOpacity  onPress={() => this.setModalVisible(true)}>


                                <View style={{ width: width , height: 500, marginTop: 10 }}>
                                
                                
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd', justifyContent: 'center' }}
                                        source={{uri: this.props.item.image,cache: 'only-if-cached'}}
                                    />
                                        
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black', textAlign:'center', paddingTop: 50, paddingBottom:25 }}>
                                                    <TouchableOpacity onPress={() => { if(this.props.item.facebook == null){
                                                        alert('No facebook link available')
                                                    }else{
                                                        this.props.navigation.navigate('Web', {Weburi: this.props.item.facebook })}
                                                        }}>
                                                        <Icon name="logo-facebook" size={20} style={{  paddingLeft: 30 }}  />
                                                        </TouchableOpacity> 


                                                        <TouchableOpacity onPress={() => {if(this.props.item.twitter == null){
                                                            alert("No Twitter Link available")
                                                        }else{
                                                            this.props.navigation.navigate('Web', {Weburi: this.props.item.twitter })}}}>
                                                        <Icon name="logo-twitter" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity>


                                                        <TouchableOpacity onPress={() => {if(this.props.item.instagram == null){
                                                            alert("No Instagram Link Available")
                                                        }else{
                                                            this.props.navigation.navigate('Web', {Weburi: this.props.item.instagram })}}}>
                                                        <Icon name="logo-instagram" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 



                                                        <TouchableOpacity >
                                                        <Icon name="cart-outline" size={20} style={{ paddingLeft: 15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity >
                                                        <Icon name="location" size={20} style={{ paddingLeft:15 }}  />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {if(this.props.item.website == null){
                                                            alert("No website link available")
                                                        }else{
                                                            this.props.navigation.navigate('Web', {Weburi: this.props.item.website })}}}>
                                                        <Icon name="globe" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 



                                                        <TouchableOpacity >
                                                        <Icon name="heart-outline" size={20} style={{ paddingLeft: 15 }} />
                                                        </TouchableOpacity> 
                                                        <TouchableOpacity onPress={() => {if(this.props.item.phoneNumber == null){
                                                            alert("No Phone number available")
                                                        }else{
                                                            this.initiateCall(this.props.item.phoneNumber)}}}>
                                                        <Icon name="call" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                    <TouchableOpacity onPress={() => {if(this.props.item.whatsapp == null){
                                                        alert('No whatsapp number available')
                                                    }else{
                                                        this.initiateCall(this.props.item.whatsapp)}}}>
                                                        <Icon name="logo-whatsapp" size={20} style={{ paddingLeft: 15 }} />
                                                    </TouchableOpacity> 
                                                        
                                                    </Text>
                                                    </View>
                                                    
                                   
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>R{this.props.item.salePrice}</Text> 
                                    <Text  style={{ fontWeight: 'normal', marginTop: 10, color:'black' }}>{this.props.item.name}</Text>
                                    
                                    <Text style={{ fontWeight: 'normal', marginTop: 10, color:'red', textDecorationLine: 'line-through', textDecorationStyle:'solid' }}>R{this.props.item.price}</Text>
                                    </View>

                                </View>
                                    
                                    
                                </TouchableOpacity>

                                
                                            
                                            
                
                                            <Text style={{ fontWeight: 'bold', marginTop: 10, color:'black' }}>About/Description</Text>
                                            <Text style={{ fontWeight: 'normal', marginTop: 5, color:'black' }}>{this.props.item.description}</Text>

                                           
                                           
                                    </View>
                                    

                                           
                            
                    
            </SafeAreaView>
        );
    }
}

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount(){
        this.getProducts()
    }


    getProducts(){
        var axios = require('axios');
        this.setState({
            isLoading: true
        })
        var config = {
            method: 'get',
            url: 'https://yopamobileapi.azurewebsites.net/HostProduct',
            headers: { 
              'Cookie': 'ARRAffinity=e8938f7d502c1378c77a107ed1adf6ce92f6932fe97b4f52e618c406bd6f3ed0; ARRAffinitySameSite=e8938f7d502c1378c77a107ed1adf6ce92f6932fe97b4f52e618c406bd6f3ed0'
            }
          };

        axios(config)
        .then((response)=> {
        console.log(JSON.stringify(response.data));

        this.setState({
            dataSource: response.data.$values,
            isLoading: false
        })
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }
        return(
        <SafeAreaView>
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
                  
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, color:'black' }}>
                                What can we help you shop for?
                            </Text>

                           
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', color:'black' }}>
                                    Your Feed
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10, color:'black' }}>
                                    A new selection of verified discounted offers

                                </Text>
                                </View>
                            </View>
                            
            <View style={{justifyContent: 'center'}}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item, index})=>{
                        return(
                            <Homes item={item} index={index} parentFlatList={this} navigation={this.props.navigation}/>
                        )
                    }}
                    keyExtractor={({$id}, index)=>$id.toString()}
                />
                 </ScrollView>
            </View>
           
        </SafeAreaView>
        )
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