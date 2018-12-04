
import React, { Component } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default class First extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowing: true, text: 'Before onChange' };
    }

    textChange(text) {
        this.setState({
            text: text
        });
    }

    render() {
        if (this.state.isShowing) {
            return (
                <View style={styles.container}>
                    <Text>First {this.props.name} component</Text>
                    <TextInput placeholder="Type here" onChangeText={(text) => this.setState({ text })}></TextInput>
                    <Text>{this.state.text}</Text>
                    <Button color='#841584' onPress={() => {
                        alert("You tapped the button")
                    }} title="Tap Me"></Button>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fffd4',
    }
})