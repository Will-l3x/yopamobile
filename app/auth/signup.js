import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import logs from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class SignUp extends React.Component {
    state={
        emailAddress:"",
        password:"",
        username:"",
        city:"sfsf",
        phoneNumber:"sfsfs",
        gender:"sfsf",
        dob:"sfsf",
        userInterestsArray:['A54F9E74-3AE0-4E65-2506-08DA6283048D', "A54F9E74-3AE0-4E65-2506-08DA6283047D"],
        fullname:'sdsd',
        interest: 'Clothing',
        dummy:'fsf',
        confirm: "",
        terms: false
    }

    Register = async ()=>{

       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
       if (reg.test(this.state.emailAddress) === false) {
        alert("Email is Not Correct");

      }else{
       if(this.state.password !== this.state.confirm){
        alert("Passwords do not match please re-enter")
       }else{

        if(!this.state.emailAddress || !this.state.password || !this.state.fullname || !this.state.username){
            alert("Please enter all fields")
        }else{
        var axios = require('axios');
        var data = JSON.stringify({"username":this.state.username,"fullname":this.state.fullname,"email":this.state.emailAddress,"password":this.state.password,"dateofbirth":this.state.dob,"interest":this.state.interest,"city":this.state.city,"phonenumber":this.state.phoneNumber});

        

        var config = {
        method: 'post',
        url: 'https://itsyopaapi.herokuapp.com/api/',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then((response) =>{
        console.log(JSON.stringify(response.data));
        if (response.data.success == true){
            alert(response.data.message);
            AsyncStorage.setItem('token', JSON.stringify(response.data.token))
            console.log("data logged successfuly")
            this.props.navigation.navigate('Interest');
        }else{
           alert(response.data.message);
        }
        })
        .catch(function (error) {
            alert("Try a different email")
            this.props.navigation.navigate('SignUp')
        console.log(error);
        });
    }
}
      }

    }
    render(){
        return (
            <KeyboardAvoidingView style={{flex:1}}>
            <View style={styles.container}>
                
                <View style={styles.formView}>
                    <Text style={styles.formHeading}>Create Your Account </Text>
                   
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Full Name..."
                            placeholderTextColor="#9EABB9"
                            onChangeText={text => this.setState({fullname: text})}
                            />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username..."
                            placeholderTextColor="#9EABB9"
                            onChangeText={text => this.setState({username:text})}/>
                    </View>
                   
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#9EABB9"
                            onChangeText={text => this.setState({emailAddress:text})}/>
                    </View>

                   
                   
                    
                    
                  
                    

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
                              onChangeText={text =>this.setState({confirm: text})}
                              />
                      </View>
                     

                    <TouchableOpacity style={styles.loginBtn}
                    onPress = {() => this.Register()}
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
            </KeyboardAvoidingView>
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
        marginBottom: hp('3%'),
        alignItems: 'center',
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
        borderBottomColor: '#DCDEDD',
        borderBottomWidth: 2,
        marginBottom: 30,
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