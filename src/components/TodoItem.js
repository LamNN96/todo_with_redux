import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, CheckBox } from "react-native";
import styles from "../themes/Style";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  _onItemClick() {
    this.props.navigation.navigate("EditTask", {
      data: this.props.item
    });
  }

  _onCompleteTask() {
    console.log(this.props);
    this.props.onClickDone(this.props.item.id);
  }

  render() {
    console.log("TodoItem");
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this._onItemClick();
        }}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{this.props.item.title}</Text>
          <CheckBox
            value={this.props.item.isDone}
            onValueChange={() => {
              this._onCompleteTask();
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
