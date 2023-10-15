import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    let [text, setText] = useState('');

    let changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <View style={styles.button}>
                <Button onPress={() => submitHandler(text)} title='Add todo' color='white' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        backgroundColor: 'coral',
        borderRadius: 5,
    }
});