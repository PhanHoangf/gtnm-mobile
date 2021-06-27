import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Welcome ...</Text>
            </View>
            <View style={styles.imageContainer}>
                <Text style={styles.textCenter}>
                    Lorem ipsum
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: '#3EC6FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header: {
        padding: 20,
        marginTop: 30,
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
    },
    imageContainer: {
        borderRadius: 12,
        backgroundColor: '#fff',
        marginBottom: 'auto',
        width: '90%',
        height: 170,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center'
    }
});

export default Header;
