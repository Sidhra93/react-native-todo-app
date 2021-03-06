import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Sandbox from './components/Sandbox'

export default function App() {
    const [ todos, setTodos ] = useState([
        { text: 'buy coffee', key: 1 },
        { text: 'clean the house', key: 2 },
        { text: 'do laundry', key: 3 }
    ])

    const submitHandler = (text) => {
        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    { text: text, key: prevTodos.length + 1 },
                    ...prevTodos
                ]
            })
        } else {
            Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
                { text: 'Understood', onPress: () => console.log('alert closed') }
            ])
        }
    }

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key)
        })
    }

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()
            console.log('dismissed keyboard')
         } }>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo submitHandler={ submitHandler } />
                    <View style={styles.list}>
                        <FlatList
                            data={ todos }
                            renderItem={ ({item}) => (
                                <TodoItem item={ item } pressHandler={ pressHandler } />
                            ) }
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        // <Sandbox />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 40
    },
    list: {
        marginTop: 20,
        flex: 1
    }
});
