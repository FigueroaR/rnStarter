import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
    <View>
        <ImageDetail score='1' title='Forest' imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail score='2' title="Beach" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail score='3' title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    
    </View>)

}

const styles= StyleSheet.create({})

export default ImageScreen;