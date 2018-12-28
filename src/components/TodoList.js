import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

class TodoList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Todo List',
            headerRight: (
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => { navigation.navigate('AddTask') }} >
                    <Text>
                        Add
                </Text>
                </TouchableOpacity>
            )
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 0,
                title: '',
                description: '',
            }
        };
    }

    render() {
        let data = this.props.tasks;
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.listContainer}>
                    {data.length === 0 ?
                        <Text style={styles.textEmpty}>Empty!</Text> : <FlatList
                            data={data}
                            renderItem={
                                ({ item, index }) => {
                                    console.log('item', item)
                                    return (
                                        <TodoItem
                                            item={item}
                                            index={index}
                                            handleData={this.dataFromItem}
                                            navigation={this.props.navigation} />
                                    )
                                }
                            }
                            keyExtractor={item => item.id.toString()}
                        />}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textEmpty: {
    },
    buttonAddContainer: {
        height: 25,
    },
    listContainer: {
        flex: 8,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10
    },
    inputContainer: {

    }

})

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)