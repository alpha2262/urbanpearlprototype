
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

export default class About extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor={'red'}
          >
          <Text>
          About us page
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
