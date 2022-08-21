import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoggingScreen = () => {
    return (
        <Text>
        Custom{'\n'}{'\n'}{'\n'}
        Preset: Push   Pull   Legs
        {'\n'}{'\n'}{'\n'}
        Rest Day!
        </Text>
    );
};

export default LoggingScreen;