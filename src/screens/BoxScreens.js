import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Box 1</Text>
        <Text style={styles.textTwoStyle}>Box 2</Text>
        <Text style={styles.textThreeStyle}>Box 3</Text>
    </View>)
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: stretch is default
        //flexDirection: 'row',// column is the default
        height: 200,
        justifyContent: 'space-around'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //marginVertical: 20
        flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //marginVertical: 20
        flex: 4
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2
    }
})


export default BoxScreen;

