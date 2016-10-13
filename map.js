
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
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
      />
      </View>
    )
  }
}
