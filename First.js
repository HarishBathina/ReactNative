
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Button, WebView, TextInput, FlatList, View } from 'react-native';

export default class First extends Component {
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
                <ScrollView style={styles.container}>
                    <Text>First {this.props.name} component</Text>
                    <TextInput placeholder="Type here" onChangeText={(text) => this.setState({ text })}></TextInput>
                    <Text>{this.state.text}</Text>
                    <Button color='#841584' onPress={() => {
                        fetch('https://facebook.github.io/react-native/movies.json')
                            .then((response) => response.json())
                            .then((responseJson) => {
                                value = responseJson.movies;
                                alert(JSON.stringify(value));
                            })
                            .catch((error) => {
                                alert(error);
                            });
                    }} title="Tap Me"></Button>

                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </ScrollView>
                // <WebView source={{ uri: 'https://www.youtube.com/embed/ChGrinBQbE0' }} />
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
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
})