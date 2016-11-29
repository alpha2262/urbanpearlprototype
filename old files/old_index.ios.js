import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  MapView,
} from 'react-native';

import About from './about.js'
import MapMyRide from './map.js'
import NavList from './navigation.js'
import CoverImage from './coverImage.js'

export default class UrbanPearlPrototype extends Component {
  render() {
      return (
        <View>
          <Text style={styles.welcome}>
            Welcome to Urban Pearl!
          </Text>

          <ContactInfoInput/>
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
          <CoverImage/>
            <Greeting/>

          <MapMyRide />
          <About />

        </View>
    );
  }
}

class ContactInfoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render () {
    return (
    <View>
      <TextInput
        style={styles.center}
        placeholder="first name"
        placeholderTextColor='red'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        autoCapitalize={'words'}
        clearButtonMode={'while-editing'}
      />
      <Text style={styles.center}>
        {this.state.text}
      </Text>
      <TextInput
        style={styles.center}
        placeholder="phone number"
        placeholderTextColor='red'
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

      <Text style={styles.center}>
        {this.state.text}
      </Text>
    </View>
    )
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
    height: 40,
  },
});
