import React from 'react';
 import {Text, StyleSheet, View} from 'react-native';

 // <Text> is jsx saying we want to retuen some text
 const ComponentsScreen = () => {
     const name = "MR Named"
    return (
    <View>
        <Text style={styles.textStyle}>Getting Started with React Native</Text>
        <Text style={styles.nameStyle}>my name is {name}</Text>
    </View>)
 }

 // here we are going to style the component
 const styles = StyleSheet.create({
     textStyle: {
        fontSize: 45
     },
     nameStyle: {
         fontSize: 20
     }
 })



 export default ComponentsScreen;