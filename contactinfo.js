

ADD REACT STUFF


export class ContactInfoInput extends Component {
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

      />
      <TextInput
        style={styles.center}
        placeholder="last name"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        autoCapitalize={'words'}
      />
      <TextInput
        style={styles.center}
        placeholder="email"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.center}
        placeholder="password"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.center}
        placeholder="reenter password"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        secureTextEntry={true}
      />
      <Text style={styles.center}>
        {this.state.text}
      </Text>
    </View>
    )
  }
}
