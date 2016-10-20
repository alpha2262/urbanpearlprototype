'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class CoverImage extends Component {
  redner () {
    return (
      <View>
        <Image
          style={{opacity:.5}}
          source={{uri: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKlAAAAJDcyYTY1YTRmLTBhNDQtNGFhYS1hMWNkLWI3MWMwZDAxNWNiMQ.jpg'}}
          resizeMode={'cover'}
        />

      </View>
    )
  }
}
