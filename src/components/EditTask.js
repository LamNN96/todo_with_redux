import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editTask } from '../actions/task';

class EditTask extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam('data', {})
    console.log('data', data)
    this.state = {
      item: {
        id: data.id,
        title: data.title,
        description: data.description
      }
    };
    console.log(this.state.item)
  }

  _onSavePress = () => {
    console.log('data on save', this.state.item)
    this.props.onClickEdit(this.state.item);
    this.props.navigation.goBack();
  }
  componentDidMount() {
    // const data = this.props.navigation.getParam('data', {})
    // console.log('data will mount', data)
    // this.setState({
    //   item: data
    // })
    // console.log('after set state will mount', this.state.item)
  }
  render() {
    return (
      <View>
        <Text> Title </Text>
        <TextInput
          value={this.state.item.title}
          onChangeText={(text) => {
            this.setState((preState) => {
              return {
                item: {
                  id: preState.item.id,
                  title: text,
                  description: preState.item.description
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
                  id: preState.item.id,
                  title: preState.item.title,
                  description: text
                }
              }
            })
          }}
        ></TextInput>
        <Button
          title='Save'
          onPress={() => { this._onSavePress() }}
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch')
  return {
    onClickEdit: (data) => {
      dispatch(editTask(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTask)