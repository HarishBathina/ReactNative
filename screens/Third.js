import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button } from 'react-native';
import First from './First';
import Second from './Second';
import { createBottomTabNavigator } from 'react-navigation';

export class Third extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Upcoming Matches in the Premier League
                </Text>
            </View>
        )
    }
}

export default createBottomTabNavigator({
    screen1: First,
    screen2: Second,
    screen3: Third,
}, {
        tabBarOptions: {
            labelStyle: {
                fontSize: 25,
                fontWeight: "bold",
            }
        }
    },
)


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fffd4',
        padding: 10,
    },
    header: {
        fontSize: 35,
        fontWeight: "bold"
    }
})