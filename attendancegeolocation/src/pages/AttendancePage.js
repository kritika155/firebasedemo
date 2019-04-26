import React,{Component} from 'react';
import {View} from 'react-native';
import AttendanceComponent from '../components/AttendanceComponent';
export default class LoginPage extends Component{
    render(){
        return(
            <View>
                <AttendanceComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}