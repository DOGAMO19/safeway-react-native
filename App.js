import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// import { HomeScreen } from './screens/HomeScreen';
// import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen,LoginScreen, NavScreen, RegisterScreen, MapScreen } from './screens';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='LoginScreen'
            component={LoginScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='RegisterScreen'
            component={RegisterScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='NavScreen'
            component={NavScreen}
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen 
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown: false
            }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F1948A',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });


          {/* <HomeScreen /> */}
          {/* <LoginScreen /> */}
          {/* <RegisterScreen /> */}
          {/* <NavScreen /> */}