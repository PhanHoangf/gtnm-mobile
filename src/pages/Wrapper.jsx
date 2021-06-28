import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/header/Header';
import HomePage from './HomePage';

export default function Wrapper() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header></Header>
                <HomePage></HomePage>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
});
