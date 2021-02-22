import React from 'react';
 import {Text, StyleSheet} from 'react-native';

 // <Text> is jsx saying we want to retuen some text
 const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>Component Screen!</Text>
 }

 // here we are going to style the component
 const styles = StyleSheet.create({
     textStyle: {
        fontSize: 30
     }
 })



 export default ComponentsScreen;