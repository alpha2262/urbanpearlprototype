
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  MapView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class MapMyRide extends Component {
  render() {
    return (
      <View>
        <MapView
        style={{
          height: 200,
          margin: 40
        }}
        showsUserLocation={true}
        followUserLocation={true}
        mapType={'hybrid'}
        pitchEnabled={true}
        region={{
          latitude: 48.628611,
          longitude: -121.831389,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
      />
      
      </View>
    )
  }
}
