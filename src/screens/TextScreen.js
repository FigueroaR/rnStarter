import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <Text>Type something</Text>
            <TextInput // we always have to give it styling or else it looks invisible
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                />
        </View>
    )
}

const styles= StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})


export default TextScreen;