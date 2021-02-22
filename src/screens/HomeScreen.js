import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  
  
  return (<View>
    <Text style={styles.text}>New APP</Text>
    
    <Button //btn has no styles - pre styles
      onPress={() => props.navigation.navigate('Components')}
      title="Go to Components Demo"/>
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}> 
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default HomeScreen;
