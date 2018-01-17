/*global alert, confirm, console, Debug, opera, prompt, WSH */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { isShowForm, isAddPorsonnel } from './../redux/actionCreators';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  addNewPersonnel = () => {
    const { name, email } = this.state;
    if (name !== '' && email !== '') {
      this.props.isAddPorsonnel(name, email);
      this.props.isShowForm();
    } else {
      alert('name & email not empty');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          placeholder='Fullname'
          value={this.state.name}
          onChangeText={text => { this.setState({ name: text }); }}
        />
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          placeholder='Email'
          value={this.state.email}
          onChangeText={text => { this.setState({ email: text }); }}
        />
        <View style={styles.textButton}>
          <TouchableOpacity
            onPress={this.addNewPersonnel}
          >
            <Text style={{ backgroundColor: 'white', padding: 10 }}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'gray',
    alignSelf: 'stretch',
  },
  textInput: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginVertical: 10,
    height: 40,
    paddingHorizontal: 10
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  }
});


export default connect(null, { isShowForm, isAddPorsonnel })(Form);
