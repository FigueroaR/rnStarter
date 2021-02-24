import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 10

const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount}
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default: 
            return state;
    }
}

const SquareScreen = () => {
    // how to useReducer, state is = to object {}
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    //console.log(state)



    return(<View>
        <ColorCounter 
            onIncrease={() => {}} 
            onDecrease={() => {}}
            color='Red'/>        
        <ColorCounter 
            onIncrease={ () => {} } 
            onDecrease={ () => {}}
            color='Blue'/>
        <ColorCounter 
            onIncrease={() => {}} 
            onDecrease={() => {}}
            color="Green"/>
        <View 
            style={{ 
                height:150, 
                width: 250, 
                backgroundColor: `rgb(${red},${green},${blue})` }}> 
        </View>
    </View>)
}

const styles = StyleSheet.create({

})

export default SquareScreen;