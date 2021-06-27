import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomePage = () => {
     return(
         <View style={styles.homeContainer}>
             <Text style={styles.textCenter}>Home Page</Text>
         </View>
     )
}  


const styles = StyleSheet.create({
    homeContainer: {
        flex: 2 ,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center'
    }
});

export default HomePage