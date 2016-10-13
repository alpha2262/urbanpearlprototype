
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

class Greeting extends Component {
  render() {
    return (
      <Text>
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

AppRegistry.registerComponent('AboutUs', () => AboutUs)
