import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Todo List",
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => {
            navigation.navigate("AddTask");
          }}
        >
          <Text style={{ fontSize: 20 }}>Add</Text>
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
    console.log("TodoList", this.props.tasks);
    let data = this.props.tasks;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.listContainer}>
          {data.length === 0 ? (
            <Text style={styles.textEmpty}>Empty!</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TodoItem
                    item={item}
                    index={index}
                    handleData={this.dataFromItem}
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

const styles = StyleSheet.create({
  textEmpty: {},
  buttonAddContainer: {
    height: 25
  },
  listContainer: {
    flex: 8,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10
  },
  inputContainer: {}
});
