import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// import { HomeScreen } from './screens/HomeScreen';
// import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen,LoginScreen, NavScreen, RegisterScreen } from './screens';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      {/* <HomeScreen /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <NavScreen />
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
