import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

// destructuring out props
const HomeScreen = ({navigation}) => {
  
  
  return (
  <View>
    <Text style={styles.text}>New APP</Text>
    
    <Button //btn has no styles - pre styles
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"/>

    <Button 
      onPress={() => navigation.navigate('List')}
      title="List of people" />

    <Button 
      onPress={ ()=> navigation.navigate('Image')}
      title="Images"
    />

<Button 
      onPress={ ()=> navigation.navigate('Counter')}
      title="Counter Demo"
    />

  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
