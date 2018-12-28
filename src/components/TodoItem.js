import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { toggleTask } from '../actions/task';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  _onItemClick() {
    this.props.navigation.navigate('EditTask', {
      data: this.props.item
    })
  }

  _onCompleteTask() {
    this.props.onClickDone(this.props.item.id)
  }
  render() {
    console.log('TodoItem')
    return (
      <TouchableWithoutFeedback onPress={() => { this._onItemClick() }}>
        <View style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginBottom: 2,
          flexDirection: 'row'
        }}>
          <Text style={{ fontSize: 20, flex: 9 }}> {this.props.item.title}</Text>
          <CheckBox
            value={this.props.item.isDone}
            onValueChange={() => { this._onCompleteTask() }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDone: (taskID) => {
      console.log(taskID)
      dispatch(toggleTask(taskID));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)