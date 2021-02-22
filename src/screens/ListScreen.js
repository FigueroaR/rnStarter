import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Friends #1'},
        {name: 'Friends #2'},
        {name: 'Friends #3'},
        {name: 'Friends #4'},
        {name: 'Friends #5'},
    ]

    return (
        <FlatList 
            data={friends} 
            renderItem={ ({item}) => {
                return <Text>{item.name}</Text>
            } }/>)
}

const Styles = StyleSheet.create({})


export default ListScreen;