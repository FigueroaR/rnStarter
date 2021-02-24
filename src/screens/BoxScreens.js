import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box 1</Text>
        <Text style={styles.textStyle}>Box 2</Text>
        <Text style={styles.textStyle}>Box 3</Text>
    </View>)
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: stretch is default
        flexDirection: 'row',// column is the default
        height: 200,
        justifyContent: 'space-around'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //marginVertical: 20
        
    }
})


export default BoxScreen;

