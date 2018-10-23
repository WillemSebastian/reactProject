import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import image2 from '../../../assets/image2.jpg';
import universal from '../../../assets/universal.png';

const Login = (props) => (
 
    <ImageBackground source = {image2} style={styles.backgroundContainer} >
        <View style ={styles.LogoContainer}>
            <Text>Image 1</Text>
            
        </View>
    </ImageBackground>
)

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    LogoContainer: {
        alignItems: 'center',
    },

    Logo: { 
        width: 50,
        height: 100,
        zIndex: 1,
    }
})
export default Login;