
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Button, WebView, TextInput, FlatList, View } from 'react-native';

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
                    <Text style={styles.item}>Second {this.props.navigation.state.params.name} component</Text>
                    <TextInput placeholder="Type here" onChangeText={(text) => this.setState({ text })} style={styles.item}></TextInput>
                    <Text style={styles.item}>{this.state.text}</Text>
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

                    {/* <FlatList
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
                    /> */}
                </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7fffd4',
        padding: 10,
    },
    item: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        // height: 44,
    }
})