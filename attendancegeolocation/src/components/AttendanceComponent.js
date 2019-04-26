import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,Button,ToastAndroid,Dimensions } from 'react-native';
export default class AttendanceComponent extends Component{
    static navigationOptions=({navigation})=>{
        navigation.title='Profile'
    };
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Register your attendance</Text>
<Button title="Geolocation" onPress={() => this.props.navigation.navigate('GeolocationExample')} />
</View>
);
}
}
const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: 'powderblue',
      margin: 10,
      padding: 8,
      color: 'black',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    }, welcome: {
        fontSize: 20,
        fontWeight:'bold',
        margin: 10,
        color:'red'
    },welcome1: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight:'bold',
    },
    container: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'steelblue'
    }
  })