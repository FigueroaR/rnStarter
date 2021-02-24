import React, {useState, useReducer} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const COUNTER = 0

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {...state, counter: state.counter + action.payload} 
        case 'DECREASE':
            return {...state, counter: state.counter - action.payload} 
        default: 
        return state;
    }
}

const CounterScreen = () => {
    //useState hook on rn
    const [state, dispatch] = useReducer(reducer, {counter: 0})

    return (
    <View>
        <Text>Current counter {state.counter}</Text>
        <Button 
            title='increase'
            onPress={() => dispatch({type: 'INCREASE', payload: 1 }) } 
        />
        <Button 
            title='decrease'
            onPress={() => dispatch({type: 'DECREASE', payload: 1 })} 
        />
    </View>)
}

const styles = StyleSheet.create({})


export default CounterScreen;