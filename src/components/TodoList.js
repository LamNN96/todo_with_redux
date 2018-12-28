import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../themes/Style";
import { language } from "../utils/Constant";
import TodoItemContainer from "../containers/TodoItemContainer";

export default class TodoList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: language.title_todolist,
      headerRight: (
        <TouchableOpacity
          style={styles.addButtonOpacity}
          onPress={() => {
            navigation.navigate("AddTask");
          }}
        >
          <Text style={styles.textAddButton}>{language.text_add_label}</Text>
        </TouchableOpacity>
      )
    };
  };
  
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 0,
        title: "",
        description: ""
      }
    };
  }

  render() {
    let data = this.props.tasks;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.listContainer}>
          {data.length === 0 ? (
            <Text style={styles.textEmpty}>{language.text_empty}</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TodoItemContainer
                    item={item}
                    index={index}
                    navigation={this.props.navigation}
                  />
                );
              }}
              keyExtractor={item => item.id.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}
