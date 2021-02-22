import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  
  return (<View>
    <Text style={styles.text}>New APP</Text>
    <Button 
      onPress={() => console.log('btn presses')}
      title="Go to Components Demo"/>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
