import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

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
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => { this._onItemClick() }}>
        <View style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginBottom: 2,
          flexDirection: 'row'
        }}>
          <Text style={{ fontSize: 20, flex: 9 }}> {this.props.item.title}</Text>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)