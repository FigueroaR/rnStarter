import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 10

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? 
                state : {...state, red: state.red + action.payload}
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? 
                state : {...state, green: state.green + action.payload}
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? 
                state : {...state, blue: state.blue + action.payload}
        default: 
            return state;
    }
}

const SquareScreen = () => {
    // how to useReducer, state is = to object {}
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state
    //console.log(state)



    return(<View>
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_red', payload: COLOR_CHANGE}) }
            onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_CHANGE}) }
            color='Red'/>        
        <ColorCounter 
            onIncrease={ () => dispatch({type: 'change_blue', payload: COLOR_CHANGE}) } 
            onDecrease={ () =>  dispatch({type: 'change_blue', payload: -1 * COLOR_CHANGE}) }
            color='Blue'/>
        <ColorCounter 
            onIncrease={() => dispatch({type: 'change_green', payload: COLOR_CHANGE})  } 
            onDecrease={() =>  dispatch({type: 'change_green', payload: -1 * COLOR_CHANGE}) }
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