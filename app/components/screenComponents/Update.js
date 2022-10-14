import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Update extends React.Component {
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
    }


    componentDidMount(){
        this.readdata();
    }

    readdata = async ()=>{
        try {
            const val = await AsyncStorage.getItem('token')
            const value = JSON.parse(val)
            console.log(value)
            const Attach = "Bearer "+ value
            console.log(Attach)
            if(value !== null) {
                var axios = require('axios');

                var config = {
                  method: 'get',
                  url: 'https://itsyopaapi.herokuapp.com/api/me',
                  headers: { 
                    'Authorization': Attach
                  }
                };
                
                axios(config)
                .then((response)=> {
                  console.log(JSON.stringify(response.data));
                  this.setState({
                    emailAddress: response.data.email,
                    fullname: response.data.fullname,
                    username: response.data.username,
                    
                  })
                })
                .catch(function (error) {
                  console.log(error);
                });
                
            }else{
              console.log("No previous choice stored please select")
            }
          } catch(e) {
            // error reading value
            console.log(e)
          }
    }
    Login (){
        var axios = require('axios');
        var data = JSON.stringify({"email":this.state.email,"password":this.state.password});

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
        if (response.data.success == true){
            alert('Log In Successful');
            this.props.navigation.navigate('TabIndex');
        }else{
            alert(response.data.message);
        }
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    render(){
        return (
            <View style={styles.container}>
               

                <View style={styles.logoContainer}>
                    <Text style={styles.logo}> Update</Text>
                </View>
                <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Full Name..."
                            placeholderTextColor="#9EABB9"
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
                            placeholder={this.state.emailAddress}
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
                              />
                      </View>
                     

                    <TouchableOpacity style={styles.loginBtn}
                    onPress = {()=>{alert("Details Updated")} }
                    >
                        <Text style={styles.loginText}>Update Details</Text>
                    </TouchableOpacity>
                    
                     
                        
                    
                    
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