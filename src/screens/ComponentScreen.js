import React from 'react';
 import {Text, StyleSheet, View} from 'react-native';

 // <Text> is jsx saying we want to retuen some text
 const ComponentsScreen = () => {
     const hi = "hiii"
    return (
    <View>
        <Text style={styles.textStyle}>Component Screen!</Text>
        <Text>{hi}</Text>
    </View>)
 }

 // here we are going to style the component
 const styles = StyleSheet.create({
     textStyle: {
        fontSize: 30
     }
 })



 export default ComponentsScreen;