import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Friend #1'},
        {name: 'Friends #2'},
        {name: 'Friends #3'},
        {name: 'Friends #4'},
        {name: 'Friends #5'},
    ]

    return (
        <FlatList 
            //horizontal // horizontal list
            showsHorizontalScrollIndicator={false}// hides scroll bar horizontal

            //this is how we use a key
            keyExtractor={ (friend => { friend.name})}
            data={friends} 
            renderItem={ ({item}) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            } }/>)
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
})


export default ListScreen;