import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
//import CheckBox from '@react-native-community/checkbox';
import logs from '../../assets/logo.png';


export default class FinishSignUp extends React.Component {
    state={
        emailAddress:"",
        password:"",
        username:"",
        city:"",
        phoneNumber:"",
        gender:"",
        userInterestsArray:['A54F9E74-3AE0-4E65-2506-08DA6283048D', "A54F9E74-3AE0-4E65-2506-08DA6283047D"],
        roleNames:[],
        dummy: '',
        ToggleCheckBox: false
    }

    Register (){
        var axios = require('axios');
        var data = JSON.stringify({"emailAddress":this.state.emailAddress,"password":this.state.password,"username":this.state.username,"city":this.state.city,"phoneNumber":this.state.phoneNumber,"gender":this.state.gender,"userInterestsArray":[this.state.userInterestsArray],"roleNames":[this.state.roleNames]});

        var config = {
        method: 'post',
        url: 'https://yopashopapi.azurewebsites.net/api/services/app/User/Register',
        headers: { 
            'Content-Type': 'application/json', 
            
           
        },
        data : data
        };

        axios(config)
        .then((response) =>{
        console.log(JSON.stringify(response.data));
        if(response.data.success === true){
            alert("Log In Succesfull")
            this.props.navigation.navigate('TabIndex');
        }else{
            alert("Log In Failure")
            this.props.navigation.navigate('SignUp');
        }
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source = {logs} style ={styles.logos} resizeMode="contain"/>
                </View>

                <View style={styles.logoContainer}>
                    <Text style={styles.logo}></Text>
                </View>
                <View style={styles.formView}>
                    <Text style={styles.formHeading}>Almost Done </Text>
                   
                      <View style={styles.inputView}>
                          <TextInput
                              secureTextEntry
                              style={styles.inputText}
                              placeholder="Password..."
                              placeholderTextColor="#9EABB9"
                              onChangeText={text => this.setState({password:text})}/>
                      </View>
                      <View style={styles.inputView}>
                          <TextInput
                              secureTextEntry
                              style={styles.inputText}
                              placeholder="Confirm Password..."
                              placeholderTextColor="#9EABB9"
                              onChangeText={text => this.setState({password:text})}/>
                      </View>

                      {/*<View style={styles.inputView}>
                      <CheckBox
                            disabled={false}
                            value={this.state.ToggleCheckBox}
                            onValueChange={(newValue) => this.setState({ToggleCheckBox: newValue})}
                        />
                    </View>*/}

                    <TouchableOpacity style={styles.loginBtn}
                    onPressIn = {() => alert("By Clicking sign up you agree to the terms and conditions") }
                    onPress = {() => this.props.navigation.navigate('TabIndex')}
                    >
                        <Text style={styles.loginText}>Sign Up</Text>
                    </TouchableOpacity>
                    
                        <Text style={styles.loginText}>Have an account?</Text>
                        <Text style={styles.loginText2} onPress = {() => this.props.navigation.navigate('LogIn') }> Log In here</Text>
                    
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
        borderWidth:2,
        borderColor: '#DCDEDD',
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