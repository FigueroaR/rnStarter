import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'



const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>What is your name?</Text>
            <TextInput // we always have to give it styling or else it looks invisible
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue) }
                />
            <Text>My name is: {name}</Text>

            <Text>Enter Password</Text>
            <TextInput 
                style={styles.input}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
            {password.length < 4  ? <Text>Must be longer than 4 char</Text> : null }

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