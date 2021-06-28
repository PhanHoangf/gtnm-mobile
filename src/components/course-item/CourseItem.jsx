import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CourseItem = (props) => {
    const { courseName, price } = props;
    return (
        <View style={styles.courseItemContainer}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png',
                    }}
                />
            </View>
            <View style={styles.courseTitle}>
                <Text style={[styles.textCenter, styles.textNormal]}>{courseName}</Text>
                <Text style={[styles.textBold, styles.textCenter]}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    courseItemContainer: {
        // padding: 10,
    },
    courseImage: {},
    image: {
        width: 110,
        height: 110,
        borderRadius: 8,
    },
    courseTitle: {
        paddingTop: 5,
    },
    textBold: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    textNormal: {
        fontSize: 20,
        fontWeight: "400",
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default CourseItem;
