import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import poopy from './assets/images/Logo.jpg';

const SigninScreen = () => {
    return (
        <Image 
        source={poopy}
        style={styles.poopy}
        />
        
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }, 
    poopy: {
        height: 200,
        width: '70%',
        padding: 20,
    }
})


export default SigninScreen;