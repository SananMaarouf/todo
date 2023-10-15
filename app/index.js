import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import List from './components/list';

export default function Index() {
    return (
        <View>
            {/* header */}
            <Header />
            <View>
                <List />
            </View>
        </View>

    );
}
