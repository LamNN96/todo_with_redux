import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { addTask } from '../actions/task';

let screen = Dimensions.get('window');

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        title: '',
        description: ''
      }
    };
  }

  render() {
    return (
      <View
      >
        <Text style={{
          marginTop: 30,
          fontSize: 25,
          textAlign: 'center',
        }}>Add Task</Text>
        <TextInput
          ref={'inputTitle'}
          autoFocus={true}
          onSubmitEditing={() => this.refs.inputDescription.focus()}
          style={{
            marginStart: 10,
            marginEnd: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 1
          }}
          placeholder="Enter title..."
          value={this.state.newTitle}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                item: {
                  title: text,
                  description: previousState.item.description,
                }
              }
            })
          }}
        >
        </TextInput>

        <TextInput
          ref={'inputDescription'}
          style={{
            marginStart: 10,
            marginEnd: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 1
          }}

          placeholder="Enter description..."
          value={this.state.newDescription}
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                item: {
                  title: previousState.item.title,
                  description: text,
                }
              }
            })
          }}
        >
        </TextInput>

        <Button
          style={{ fontSize: 16, color: 'white' }}
          containerStyle={{
            padding: 8,
            marginTop: 30,
            marginStart: 70,
            marginBottom: 20,
            marginEnd: 70,
            borderRadius: 5,
            backgroundColor: 'mediumseagreen',
          }}

          onPress={() => {
            this.props.onClickAdd(this.state.item)
            this.props.navigation.goBack();
          }}
        >
          Save
                </Button>

      </View>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (data) => {
      dispatch(addTask(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)