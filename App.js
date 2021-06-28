import { StatusBar } from 'expo-status-bar';
import { AppRegistry } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from './src/components/header/Header';
import HomePage from './src/pages/HomePage';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import Navigation from './src/components/bottom-navigation/Navigation';

export default function App() {
    return (
        <PaperProvider>
            {/* <View style={styles.container}>
                <Header></Header>
                <HomePage></HomePage>
            </View> */}
            <Navigation/>
        </PaperProvider>
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

AppRegistry.registerComponent(appName, () => App);
