import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './SigninScreen';
import UselessTextInput from './input';
import TextInput1 from './OpeningScreen';
import MyCalendar from './calendar';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SigninScreen/>
        <UselessTextInput/>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Main')}
        />
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Sign In')}
        />
      </View>
    );
  }

const Stack = createNativeStackNavigator();


function MainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is main screen of the app Screen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}
         />
         
         <TouchableOpacity style={styles.button} onPress={() => navigation.push('Main')}>
          <Image 
          style={{
            resizeMode: "contain",
            height: 90,
            width: 90
          }}
          source={require("./assets/images/Home.jpeg")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Log')}>
          <Image 
          style={{
            resizeMode: "contain",
            height: 90,
            width: 90
          }}
          source={require("./assets/images/calendar.webp")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('Profile')}>
          <Image 
          style={{
            resizeMode: "contain",
            height: 90,
            width: 90
          }}
          source={require("./assets/images/Profile.jpeg")}
          />
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#FFFFF',
      padding: 1,
      position: 'absolute',
      bottom:'1%',
      left:'5%',
    },
    button2: {
      padding: 1,
      position: 'absolute',
      bottom:'1%',
      left:'40%'
    },
    button3: {
      padding: 1,
      position: 'absolute',
      bottom:'1%',
      left:'75%'
    }
  });

  function SignInScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Email</Text>
        <TextInput1/>
        <Text>Password</Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.push('Main')}/>
      </View>
    );
  }
  function SignUpScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
      </View>
    );
  }
  function LogScreen({ navigation }) {
    return (
      <View >
        <MyCalendar/>
      </View>
    );
  }
  const yay = StyleSheet.create({
    yea: {
      resizeMode: "contain",
      height: 800,
      width: 800,
    }
  })
  function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={size.move}>Jinyoung Oh</Text>
        <Text style={size.move2}>
          PR:{'\n'}
          Bench:180lb {'\n'}
          Squat:225lb{'\n'}
          Deadlift:I don't
        </Text>
        <Text>Edit profile</Text>
        <Image source={require("./assets/images/Me.jpeg")}
        style={size.style}
        />
      </View>
    );
  }
  const size = StyleSheet.create({
    style: {
      resizeMode: "contain",
      height: 200,
      width: 200,
      padding: 1,
      position: 'absolute',
      bottom:500,
      left:10
    },
    move: {
      position:'absolute',
      right:100,
      top:50
  },
    move2: {
      position:'absolute',
      right:85,
      top:100
  }
  });
  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Log" component={LogScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default App; 
