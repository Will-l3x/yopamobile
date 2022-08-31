import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,KeyboardAvoidingView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



class ComingSoon extends Component{
    constructor(props){
        super(props);

        
    }


    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center', paddingStart: 100, backgroundColor: '#35CAAC'}}>
                <Text style={{fontSize:30, fontWeight: 'bold', marginTop: 10, color:'black', textAlign: 'center', color:'white' }}>Coming Soon</Text>
            </View>
        )
    }
}

export default ComingSoon