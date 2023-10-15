import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './todoItem'
import AddTodo from './addTodo'

export default function List() {
    let [items, setItems] = useState([
        { text: 'First item', key: '1' },
        { text: 'Second item', key: '2' },
        { text: 'Third item', key: '3' },
        { text: 'Fourth item', key: '4' },
        { text: 'Fifth item', key: '5' },
        { text: 'Sixth item', key: '6' },
        { text: 'Seventh item', key: '7' },
        { text: 'Eighth item', key: '8' },
        { text: 'Ninth item', key: '9' },
        { text: 'Tenth item', key: '10' },
    ]);

    let pressHandler = (key) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.key != key);
        });
    }

    const submitHandler = (text) => {
        setItems((prevItems) => {
            const lastKey = Number(prevItems[prevItems.length - 1].key);
            const newKey = (lastKey + 1).toString();

            return [
                ...prevItems,
                { text: text, key: newKey },
            ];
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <AddTodo submitHandler={submitHandler}  />
            </View>
            <View style={styles.list}>
                <FlatList data={items.slice().reverse()} renderItem={({ item }) => ( 
                    console.log(item),
                    <TodoItem item={item} pressHandler={pressHandler} />
                    )}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});