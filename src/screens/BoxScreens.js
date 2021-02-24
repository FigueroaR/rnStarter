import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const BoxScreen = () => {
    return (<View style={styles.viewStyle}>
        {/* <Text style={styles.textOneStyle}>Box 1</Text>
        <Text style={styles.textTwoStyle}>Box 2</Text>
        <Text style={styles.textThreeStyle}>Box 3</Text> */}
        <View style={styles.viewBoxOne}>One</View>
        <View style={styles.viewBoxTwo}>Two</View>
        <View style={styles.viewBoxThree}>Three</View>
    </View>)
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch', //is default
        flexDirection: 'row',// column is the default
        height: 200,
        justifyContent: 'space-between',
        //alignItems: 'center'// Item is for parent
    },
    
    viewBoxOne: {
        width: 50,
        height: 50,
        backgroundColor: 'yellow',
        borderColor: 'green',
        borderWidth: 3,
        //alignSelf: 'stretch'
        //flex: 1
    },

    viewBoxTwo: {
        width: 50,
        height: 50,
        borderColor: 'blue',
        borderWidth: 3,
        //flex: 1,
        //alignSelf: 'flex-end'
        top: 50
    },

    viewBoxThree: {
        width: 50,
        height: 50,
        borderColor: 'red',
        borderWidth: 3,
        //flex: 1
    },

    // textOneStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     //marginVertical: 20
    //     //alignSelf: 'flex-end'
    // },
    // textTwoStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     //alignSelf: 'center'/// this is specific to child item
    //     //position: 'absolute' //does what it want with out siblings
    //     // top: 10, <- this property does not work
    //     //marginBottom: 10 // this instead of "bottom" property
    //     //...StyleSheet.absoluteFillObject // this chuld will fill parent 

    // },
    // textThreeStyle: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     //flex: 2,
    //     //alignSelf: 'stretch'
    // }
})


export default BoxScreen;

