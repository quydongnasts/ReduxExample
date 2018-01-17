'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { connect } from 'react-redux';

import SubItem from './components/subItem';
import Header from './components/header';
import Form from './components/form';

class Main extends Component {
  render() {
    const { personnel, isShowForm } = this.props;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          { isShowForm ? <Form /> : null }
          <View style={{ flex: 8 }}>
            <FlatList
              data={personnel}
              renderItem={({ item }) => <SubItem items={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      alignSelf: 'stretch'
    },
    content: {
      flex: 9
    }
});

function mapStateToProps(state) {
  return { personnel: state.addNewPersonnel, isShowForm: state.showForm };
}

export default connect(mapStateToProps)(Main);
