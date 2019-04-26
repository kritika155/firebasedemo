import React,{Component} from 'react';
import {View} from 'react-native';
import GeolocationExample from '../components/Geolocation';
export default class LoginPage extends Component{
    render(){
        return(
            <View>
                <GeolocationExample navigation={this.props.navigation}/>
            </View>
        )
    }
}