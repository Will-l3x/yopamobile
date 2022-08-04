import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList
} from "react-native";

class ProductList extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount(){
        this.__getProducts();
        //this.__GetAll();
    }
    
    __getProducts = async ()=> {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://yopaapi.azurewebsites.net/api/services/app/HostProduct/GetAll',
        headers: { 
            'Cookie': 'ARRAffinity=50e11c565d62e6771930066988118ef1682882ce90c53df274b81366d9d9b4c6; ARRAffinitySameSite=50e11c565d62e6771930066988118ef1682882ce90c53df274b81366d9d9b4c6'
        }
        };

        axios(config)
        .then((response)=> {
        console.log(JSON.stringify(response.data.result.items));

        this.setState({
            dataSource: response.data,
            isLoading: false
        })
        })
        .catch(function (error) {
        
        console.log(error);
        });

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) => <ProductList imageUri={item.image} name={item.name} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});








