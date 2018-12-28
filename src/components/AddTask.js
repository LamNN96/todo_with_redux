import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Button from "react-native-button";
import styles from "../themes/Style";
import { language } from "../utils/Constant";

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
        <Text style={styles.addLabel}>Add Task</Text>
        <TextInput
          ref={"inputTitle"}
          autoFocus={true}
          onSubmitEditing={() => this.refs.inputDescription.focus()}
          style={styles.inputText}
          placeholder={language.place_holder_title}
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
          style={styles.inputText}
          placeholder={language.place_holder_desc}
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
          style={styles.addButton}
          containerStyle={styles.addButtonContainer}
          onPress={() => {
            this.props.onClickAdd(this.state.item);
            this.props.navigation.goBack();
          }}
        >
          {language.text_save_label}
        </Button>
      </View>
    );
  }
}
