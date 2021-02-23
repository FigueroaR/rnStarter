import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_JUMP = 10


const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    console.log(red, blue, green)

    return(<View>
        <ColorCounter 
            onIncrease={() => {setRed( red + COLOR_JUMP)}} 
            onDecrease={() => {setRed( red - COLOR_JUMP)} }
            color='Red'/>
        <ColorCounter 
            onIncrease={() => {setBlue( blue + COLOR_JUMP)}} 
            onDecrease={() => {setBlue( blue - COLOR_JUMP)}}
            color='Blue'/>
        <ColorCounter 
            onIncrease={() => {setGreen( green + COLOR_JUMP)}} 
            onDecrease={() => {setGreen( green - COLOR_JUMP)}}
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