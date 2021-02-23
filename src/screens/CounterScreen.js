import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';


const CounterScreen = () => {
    //useState hook on rn
    const [counter, setCounter] = useState(0)

    return (
    <View>
        <Text>Current counter {counter}</Text>
        <Button 
            title='increase'
            onPress={() => {
                setCounter(counter + 1)
            }}    
        />
        <Button 
            title='decrease'
            onPress={() => {
                setCounter(counter - 1)
            }}
        />
    </View>)
}

const styles = StyleSheet.create({})


export default CounterScreen;