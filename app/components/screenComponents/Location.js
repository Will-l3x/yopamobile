import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class Location extends React.Component {
    state={
        email:"",
        password:""
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
                    <Text style={styles.logo}> City</Text>
                </View>
                <View style={styles.formView}>
                   
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="City..."
                            placeholderTextColor="#9EABB9"
                            onChangeText={text => this.setState({email:text})}/>
                    </View>
                      

                    <TouchableOpacity style={styles.loginBtn}
                    onPress = {()=>{alert("City Saved")} }
                    >
                        <Text style={styles.loginText}>Save City</Text>
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