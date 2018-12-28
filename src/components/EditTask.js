import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../themes/Style";
import { language, param } from "../utils/Constant";

export default class EditTask extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam(param.data, {});
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
  };

  render() {
    const { item} = this.state
    return (
      <View>
        <View style={styles.editContainer} />
        <Text> {language.text_title_label} </Text>
        <TextInput
          value={item.title}
          onChangeText={text => {
            this.setState({
              item: {
                ...item,
                title: text
              }
            });
          }}
        />
        <Text> {language.text_desc_label} </Text>
        <TextInput
          value={item.description}
          onChangeText={text => {
            this.setState({
              item: {
                ...item,
                description: text
              }
            });
          }}
        />
        <Text>
          {this.state.item.isDone
            ? language.text_completed
            : language.text_active}
        </Text>
        <Button
          title={language.text_save_button_title}
          onPress={() => {
            this._onSavePress();
          }}
        />
      </View>
    );
  }
}
