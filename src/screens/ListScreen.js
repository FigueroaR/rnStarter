import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '99'},
        {name: 'Friends #2', age: '98'},
        {name: 'Friends #3', age: '97'},
        {name: 'Friends #4', age: '96'},
        {name: 'Friends #5', age: '95'},
    ]

    return (
        <FlatList 
            //horizontal // horizontal list
            //showsHorizontalScrollIndicator={false}// hides scroll bar horizontal

            //this is how we use a key
            keyExtractor={ (friend => { friend.name})}
            data={friends} 
            renderItem={ ({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
            } }/>)
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
})


export default ListScreen;