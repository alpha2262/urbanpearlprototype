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

import About from './about.js'
import MapMyRide from './map.js'

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
          <Greeting>

          </Greeting>
          <About />
        </View>
    );
  }
}



class Greeting extends Component {
  render() {
    return (
      <Text style={styles.center}>
        Hello {this.props.name} and welcome to Urban Pearl!
      </Text>
    )
  }
}

class Name extends Component {
  render () {
    return (
    <View style={{alignItems: 'center'}}>
      <Greeting name = 'Mike' />
      <Greeting name = 'Bob' />
    </View>
    )
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
  center: {
    textAlign: 'center',
    color: 'orange',
  },
});

AppRegistry.registerComponent('UrbanPearlPrototype', () => UrbanPearlPrototype);
