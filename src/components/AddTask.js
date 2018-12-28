import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "react-native-button";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        title: "",
        description: ""
      }
    };
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text
          style={{
            marginTop: 30,
            fontSize: 25,
            textAlign: "center"
          }}
        >
          Add Task
        </Text>
        <TextInput
          ref={"inputTitle"}
          autoFocus={true}
          onSubmitEditing={() => this.refs.inputDescription.focus()}
          style={{
            marginStart: 10,
            marginEnd: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 1
          }}
          placeholder="Enter title..."
          value={this.state.newTitle}
          onChangeText={text => {
            this.setState(previousState => {
              return {
                item: {
                  title: text,
                  description: previousState.item.description
                }
              };
            });
          }}
        />

        <TextInput
          ref={"inputDescription"}
          style={{
            marginStart: 10,
            marginEnd: 10,
            borderBottomColor: "gray",
            borderBottomWidth: 1
          }}
          placeholder="Enter description..."
          value={this.state.newDescription}
          onChangeText={text => {
            this.setState(previousState => {
              return {
                item: {
                  title: previousState.item.title,
                  description: text
                }
              };
            });
          }}
        />

        <Button
          style={{ fontSize: 16, color: "white" }}
          containerStyle={{
            padding: 8,
            marginTop: 30,
            marginStart: 70,
            marginBottom: 20,
            marginEnd: 70,
            borderRadius: 5,
            backgroundColor: "mediumseagreen"
          }}
          onPress={() => {
            this.props.onClickAdd(this.state.item);
            this.props.navigation.goBack();
          }}
        >
          Save
        </Button>
      </View>
    );
  }
}
