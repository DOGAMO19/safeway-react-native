//Usar snippet rfnes (react Native Functional Export Component Whit StyleSheet )

import { Button, Image, StyleSheet, Text,TextInput,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';  //Evitar el notch de las pantallas 
import  {LoginButton, RegisterButton}  from '../components';
import tw from 'tailwind-react-native-classnames';


export const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-gray-300 h-full`}>
      <View style={{ 
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
       }} >
        <Image
          style={{
            flexDirection: 'row',
            width: 450,
            height: 300,
            resizeMode: "center",
            margin: 10,
          }}
          source={
           //uri: "https://static.vecteezy.com/system/resources/previews/005/484/215/original/super-car-logo-free-vector.jpg" 
           require("../assets/SafewayLogo.png")
          }
        />
        <LoginButton textButton= "Iniciar Sesion" />
        <RegisterButton textButton= "Registrate" />
      </View> 
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  input: {

  }
})