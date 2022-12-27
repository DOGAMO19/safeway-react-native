import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export const LoginButton = ({textButton}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('LoginScreen')} 
    style = {{
        ...styles.button,
        backgroundColor: '#273746'
    }}
    >
        <Text
        style={{
            ...styles.textAlignButton,
            color: '#F8F9F9'
        }}
        >
            {textButton}
        </Text>
    </TouchableOpacity>
  )
}
export const RegisterButton = ({textButton}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('RegisterScreen')} 
    style = {{
        ...styles.button,
        backgroundColor: '#F4F6F7',
        borderWidth: 1,
        borderColor: '#273746'
    }}
    >
        <Text
        style={{
            ...styles.textAlignButton,
            color: '#1C2833',
        }}
        >
            {textButton}
        </Text>
    </TouchableOpacity>
  )
}

export const LogearButton = ({textButton}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('NavScreen')} 
        style = {{
            ...styles.button,
            backgroundColor: '#1C2833',
            borderWidth: 1,
            borderColor: '#273746',
            marginTop: 20
        }}
        >
            <Text
            style={{
                ...styles.textAlignButton,
                color: '#FBFCFC',
            }}
            >
                {textButton}
            </Text>
        </TouchableOpacity>
        )
}



const styles = StyleSheet.create({

    button: {
        alignSelf: 'center',
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 15,
        width: '60%'
    },
    textAlignButton: {
        textAlign: 'center'
    }

})