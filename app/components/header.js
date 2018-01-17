'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { isShowForm } from './../redux/actionCreators';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View />
        <Text style={{ color: 'white' }}>LIST PERSONNEL</Text>
        <TouchableOpacity
          onPress={() => this.props.isShowForm()}
        >
          <Text style={styles.buttonStyle}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'white',
    fontSize: 30,
    paddingHorizontal: 15
  }
});


export default connect(null, { isShowForm })(Header);
