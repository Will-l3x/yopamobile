import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import logs from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LogIn extends React.Component {
    state={
        email:"",
        password:""
    }

    Login (){
        var axios = require('axios');
        var data = JSON.stringify({"email":this.state.email,"password":this.state.password});

        if(!this.state.email || !this.state.password){
            alert("Please enter all fields")
        }else{

       

        var config = {
        method: 'post',
        url: 'https://itsyopaapi.herokuapp.com/api/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then((response)=> {
        console.log(JSON.stringify(response.data));
        if (response.data.success === true){
            alert(response.data.message);
            AsyncStorage.setItem('token', JSON.stringify(response.data.token))
            this.props.navigation.navigate('TabIndex');
        }else{
            alert(response.data.message);
        }
        })
        .catch(function (error) {
            alert("Invalid Credidentials")
        console.log(error);
        });
    }

    }
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source = {logs} style ={styles.logos} resizeMode="contain"/>
                </View>

                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>WELCOME!</Text>
                </View>
                <View style={styles.formView}>
                    <Text style={styles.formHeading}>Log Into Your Account </Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#9EABB9"
                            onChangeText={text => this.setState({email:text})}/>
                    </View>
                      <View style={styles.inputView}>
                          <TextInput
                              secureTextEntry
                              style={styles.inputText}
                              placeholder="Password..."
                              placeholderTextColor="#9EABB9"
                              onChangeText={text => this.setState({password:text})}/>
                      </View>

                    <TouchableOpacity style={styles.loginBtn}
                    onPress = {()=>{this.Login()} }
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    
                        <Text style={styles.loginText}>Don't Have an account?</Text>
                        <Text style={styles.loginText2} onPress = {() => this.props.navigation.navigate('terms') }> Sign Up here</Text>
                    
                    <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logoContainer: {
      backgroundColor: "#fff",
        borderRadius: wp('50%'),
        padding: wp('5%'),
        height: hp('11%'),
        marginBottom: hp('3%')
    },
    formView:{
        margin: wp('2%'),
        padding: wp('5%'),
        backgroundColor: 'white',
        borderRadius:wp('5%'),
        borderColor: '#4a4a4a',
    },
    formHeading:{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#35CAAC',
      justifyContent: 'center',
        alignSelf:'center',
        marginBottom: hp('2.5%'),
        marginTop: hp('2.5%')
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#4a4a4a",
        marginBottom:hp('5%')
    },
    logos:{
        width: 200,
        maxWidth: 300,
        height: 150,
       },
    inputView:{
        width: wp('80%'),
        backgroundColor:"#fff",
        height:hp('5%'),
        marginBottom: hp('2%'),
        justifyContent:"center",
        padding:wp('2%'),
        borderBottomColor: '#DCDEDD',
        borderBottomWidth: 2,
        marginBottom: 30,
       // borderWidth:2,
        //borderColor: '',
        
    },
    inputText:{
        height:hp('5%'),
        color:"#9EABB9"
    },
    forgot:{
        color:"white",
        fontSize:12,
        marginTop: hp('5%')
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
    loginText2:{
        color:"#35CAAC",
        alignSelf:"center",
        justifyContent:"center",
    }
});