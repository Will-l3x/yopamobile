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
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
                                        
                                        <TouchableOpacity style={styles.loginBtn}
                                                onPress = {()=>{this.props.navigation.navigate('LogIn')} }
                                                     >
                                                <Text style={styles.loginText}>Get Details</Text>
                                        </TouchableOpacity>
                                                    
                                   
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

class LandingScreen extends Component{
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
           
                       
                            
            <View style={{justifyContent: 'center', height: '90%'}}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                <FlatList
                    contentContainerStyle={{paddingBottom:20}}
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
export default LandingScreen;

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
      loginText:{
        color:"#4a4a4a",
        alignSelf:"center",
        justifyContent:"center",
    },
      ContactSeller:{
       
        backgroundColor:"#fff",
        
        
        justifyContent:"center",
        
        borderWidth:2,
        borderColor: '#DCDEDD',
      }
});