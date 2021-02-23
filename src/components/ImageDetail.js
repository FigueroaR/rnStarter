import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) => {
    return(
    <View>
        <Image style={styles.img} source={require('../../assets/beach.jpg')}/>
        <Text>{props.title}</Text>
    </View>)

    // const styles= StyleSheet.create({
    //     img: {
            
    //     }
    // })
}

const styles= StyleSheet.create({})

export default ImageDetail;