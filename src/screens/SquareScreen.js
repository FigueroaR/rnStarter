import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 10

const reducer = (state, action) => {
    switch(action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? 
                state : {...state, red: state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? 
                state : {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? 
                state : {...state, blue: state.blue + action.amount}
        default: 
            return state;
    }
}

const SquareScreen = () => {
    // how to useReducer, state is = to object {}
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state
    console.log(state)



    return(<View>
        <ColorCounter 
            onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_CHANGE}) }
            onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_CHANGE}) }
            color='Red'/>        
        <ColorCounter 
            onIncrease={ () => dispatch({colorToChange: 'blue', amount: COLOR_CHANGE}) } 
            onDecrease={ () =>  dispatch({colorToChange: 'blue', amount: -1 * COLOR_CHANGE}) }
            color='Blue'/>
        <ColorCounter 
            onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_CHANGE})  } 
            onDecrease={() =>  dispatch({colorToChange: 'green', amount: -1 * COLOR_CHANGE}) }
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