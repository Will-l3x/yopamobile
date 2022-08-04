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
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from "../screenComponents/Category";
import Card from "../screenComponents/card";

const { height, width } = Dimensions.get('window')

class Home extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
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
                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-24/20220724T122122273.jpg"}
                                    />

                                    <Text  style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Product Name</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>$99.99</Text>

                                </View>

                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T133647138.jpg"}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Product Name</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>$99.99</Text>

                                </View>

                                <View style={{ width: width - 40, height: 300, marginTop: 10 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={"https://yopastorage.blob.core.windows.net/shop-store/ProductImage-2022-07-23/20220723T133233452.jpg"}
                                    />

                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>Product Name</Text>
                                    <Text style={{ fontWeight: 'bold', marginTop: 10, color:'#35CAAC' }}>$99.99</Text>

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
    }
});