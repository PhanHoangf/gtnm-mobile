import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CourseItem from '../components/course-item/CourseItem';

const courses = [
    { courseName: 'Courses 1', price: '$19.99' },
    { courseName: 'Courses 2', price: '$19.99' },
    { courseName: 'Courses 3', price: '$19.99' },
];

const HomePage = () => {
    const viewCourses = courses.map((c, index) => {
        return (
            <View key={index} style={styles.coursesContainer}>
                <CourseItem courseName={c.courseName} price={c.price}></CourseItem>
            </View>
        );
    });
    return (
        <View style={styles.homeContainer}>
            <View style={styles.homeTitle}>
                <Text style={styles.textTitle}>Recommended Courses</Text>
            </View>
            <View style={styles.coursesContainer}>
                {/* <CourseItem></CourseItem> */}
                {viewCourses}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeContainer: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
    },
    textCenter: {
        textAlign: 'center',
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    homeTitle: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    coursesContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
    },
});

export default HomePage;
