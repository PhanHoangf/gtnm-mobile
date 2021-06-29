import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Wrapper(props) {
    return (
        <View style={styles.container}>
            <ScrollView>{props.children}</ScrollView>
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
