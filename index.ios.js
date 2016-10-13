/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

class MapMyRide extends Component {
  render() {
    return (
      <View>
        <MapView
        style={{height: 200, margin: 40}}
        showsUserLocation={true}
        followUserLocation={true}
      />
      </View>
    )
  }
}


export default class UrbanPearlPrototype extends Component {
  render() {
      return (
        <View>
        <MapMyRide />
          <Text style={styles.welcome}>
            Welcome to Urban Pearl!
          </Text>
          <Text style={styles.instructions}>
            To get started, click here!
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text>
            For more information, click here.
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UrbanPearlPrototype', () => UrbanPearlPrototype);
