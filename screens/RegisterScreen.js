import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { LogearButton } from '../components'
// import Svg, { G, LinearGradient, Path, Stop } from 'react-native-svg';



export const RegisterScreen = () => {



  return (
    <SafeAreaView style={tw`bg-gray-100 h-full `}>
        <Image
          style={{
            width: '100%',
            height: 300,
            // resizeMode: "center",
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            margin: 0
          }}
          source={
           //uri: "https://static.vecteezy.com/system/resources/previews/005/484/215/original/super-car-logo-free-vector.jpg" 
           require("../assets/waveRegister.png")
          }
        />
    <View style={styles.container}>
    {/* <BackgroundImage /> */}
      <Text style = {styles.textMain}>Comencemos!</Text>
      <Text style = {styles.textSub}>Ingresa tu informacion</Text>
      <TextInput 
      style={{
        ...styles.inputText,
        marginTop: 20
        }}
        placeholder='Ingresa tu numero de boleta'
        keyboardType='decimal-pad'
      /> 

      <TextInput 
        style={{
            ...styles.inputText,
        }}
        placeholder='Ingresa tu correo'
        keyboardType='email-address'
      /> 

      <TextInput 
        style={{
            ...styles.inputText,
        }}
        placeholder='Ingresa tu contrasenia'
        secureTextEntry={true}
      /> 

      <LogearButton textButton= "Registrarme"/>
    </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textMain: {
    fontSize: 50,
    color: '#546E7A',
    fontWeight: '700'
  },
  textSub: {
    fontSize: 20,
    color: '#B0BEC5'
  },
  inputText: {
    backgroundColor: '#D5DBDB',
    borderRadius: 10,
    padding: 10,
    width: '75%',
    height: 45,
    marginBottom: 10, 
    textAlign: 'center',
    
  }
});