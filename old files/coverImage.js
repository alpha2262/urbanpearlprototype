'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class CoverImage extends Component {
  render () {
    return (
      <View>
        <Image
          source={{uri: 'https://github.com/alpha2262/alpha2262.github.io/blob/master/images/BuildingsMap1.png'}}

        />

      </View>
    )
  }
}
