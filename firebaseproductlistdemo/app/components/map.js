import React from 'react';
import { AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    NativeModules,
    NativeEventEmitter } from 'react-native';

import MapView from 'react-native-maps';

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});
