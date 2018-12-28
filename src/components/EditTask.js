import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class EditTask extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam('data', {})
    this.state = {
      item: {
        id: data.id,
        title: data.title,
        description: data.description,
        isDone: data.isDone
      }
    };
  }

  _onSavePress = () => {
    this.props.onClickEdit(this.state.item);
    this.props.navigation.goBack();
  }
  render() {
    console.log('EditTask')
    return (
      <View>
        <View style={styles.container}>

        </View>
        <Text> Title </Text>
        <TextInput
          value={this.state.item.title}
          onChangeText={(text) => {
            this.setState((preState) => {
              return {
                item: {
                  ...item,
                  title: text
                }
              }
            })
          }}
        ></TextInput>
        <Text> Description </Text>
        <TextInput
          value={this.state.item.description}
          onChangeText={(text) => {
            this.setState((preState) => {
              return {
                item: {
                  ...item,
                  title: preState.item.title,
                }
              }
            })
          }}
        ></TextInput>
        <Text>{this.state.item.isDone ? 'Completed' : 'Active'}</Text>
        <Button
          title='Save'
          onPress={() => { this._onSavePress() }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
})
