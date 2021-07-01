import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.children}</Text>
            </View>
            <View style={styles.imageContainer}>
                <TouchableOpacity>
                    <Image style={styles.image} source={require('../../../assets/Play.png')} />
                </TouchableOpacity>
                {/* <Button style={styles.iconButton} icon='camera'></Button> */}
                {/* <Text style={styles.textCenter}>Lorem ipsum</Text> */}
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
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        width: 74,
        height: 74,
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default Header;
