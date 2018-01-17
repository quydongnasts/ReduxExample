'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class SubItem extends Component {
  render() {
    const { first_name, email } = this.props.items;
    return (
      <View>
        <View style={styles.subText}>
          <Text>{first_name}</Text>
          <Text>{email}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subText: {
    backgroundColor: 'lightblue',
    marginBottom: 5,
    padding: 10
  }
});

export default SubItem;
