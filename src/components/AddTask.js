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
    const { item } = this.state;
    return (
      <View>
        <Text style={styles.addLabel}>{language.text_add_task_label}</Text>
        <TextInput
          ref={ref => (this.inputText = ref)}
          autoFocus={true}
          onSubmitEditing={() => this.inputDescription.focus()}
          style={styles.inputText}
          placeholder={language.place_holder_title}
          value={item.title}
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
          ref={ref => (this.inputDescription = ref)}
          style={styles.inputText}
          placeholder={language.place_holder_desc}
          value={item.description}
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
