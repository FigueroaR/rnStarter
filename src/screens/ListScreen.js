import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Friends #1', key: '1'},
        {name: 'Friends #2', key: '2'},
        {name: 'Friends #3', key: '3'},
        {name: 'Friends #4', key: '4'},
        {name: 'Friends #5', key: '5'},
    ]

    return (
        <FlatList 
        //this is how we use a key
        keyExtractor={ (friend => { friend.name})}
            data={friends} 
            renderItem={ ({item}) => {
                return <Text>{item.name}</Text>
            } }/>)
}

const Styles = StyleSheet.create({})


export default ListScreen;