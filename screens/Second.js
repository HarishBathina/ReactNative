
import React, { Component } from 'react';
import { StyleSheet, ScrollView, ImageBackground, Image, Text, Button, WebView, TextInput, FlatList, View } from 'react-native';

export default class Second extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowing: true, text: 'Before onChange' };
        // setInterval(() => {
        //     this.setState(previousState => (
        //         {
        //             isShowing: !previousState.isShowing
        //         }
        //     ))
        // }, 1000);
    }
    textChange(text) {
        this.setState({
            text: text
        });
    }
    render() {
        let value = [];
        if (this.state.isShowing) {
            return (
                <View style={styles.container}>
                    <Image source={require('../images/ESR.jpg')} style={styles.images} />
                    <Text style={styles.item}>
                        Arsenal's Emile Swith Rowe celebrates scoring the winner against Liverpool U23's.
                    </Text>
                    <View style={styles.button}>
                        <Button title="Go to Screen3" onPress={() => this.props.navigation.navigate('screen3')} />
                        <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
                    </View>
                </View>
            );
        }
        else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
    },
    item: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'blue',
    },
    images: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})