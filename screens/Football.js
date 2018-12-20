import React, { Component } from 'react';
import { View, ScrollView, Image, Button, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Football extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Best club in the World is" };
    }

    render() {
        let preText = "Best club in the World is";
        if (this.props.plClubs) {
            return (
                <View style={styles.container}>
                    <Button title="Alert Best Club" onPress={this.props.getClubs.bind(this)} />
                    <Text style={styles.item}>
                        {this.state.text}
                    </Text>
                    <FlatList
                        data={this.props.plClubs}
                        renderItem={({ item }) => <Button style={styles.item} title={item.name}></Button>}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Button title="Alert Best Club" onPress={this.props.getClubs.bind(this)} />
                    <Text style={styles.item}>
                        {this.state.text}
                    </Text>
                </View>
            )
        }
    }
}

const mapStoreToProps = (store) => {
    return {
        plClubs: store.plClubs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getClubs: () => dispatch({ type: 'GET_CLUB_DETAILS' })
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Football);

var styles = StyleSheet.create({
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
        marginTop: 10,
        color: 'blue',
    },

})