import { StyleSheet, Text, View } from 'react-native';
import { Map } from '../components';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { REACT_APP_GOOGLE_MAPS_APIKEY } from "@env";
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestino, setOrigen } from '../slices/navSlice';
 

export const MapScreen = () => {


  const dispatch = useDispatch();

  return (
      <SafeAreaView style={tw `bg-gray-100 h-full`}>
      
      <GooglePlacesAutocomplete 
          placeholder='A donde vamos ahora...?'
          query={{ 
            key: REACT_APP_GOOGLE_MAPS_APIKEY,
            language: "es", 
          }}
          onPress={( data , details = null ) => {
            //console.log(data);
            //console.log(details); //Details tiene la informacion de las coordenadas con el objeto geometry->location y sus propiedades lat y lng
            dispatch(
              setOrigen({
                location: details.geometry.location,
                desciption: data.description,
              })
            );

            dispatch(
              setDestino(null)
            );

          }}
          fetchDetails = {true} //Inicializa en true para poder obtener los details
          nearbyPlacesAPI='GooglePlacesSearch' //API a utilizar para obtener la ubicacion
          debounce={300} //Tiempo de respuesta una vez terminado de escribir
          minLength={3}
          enablePoweredByContainer={false} //Elimina el banner de google
          returnKeyType = {"search"} //Determina el tipo de llave que usara la caja

          styles={{
            container:{
              flex:0,
              padding: 10,
              borderRadius: 10
            },
            textInput:{
              fontSize: 20,
              fontWeight: '20'
            }
          }}
        />

        <View style={tw`h-1/2`}>
          <Map />
        </View>
      </SafeAreaView>

  )
}

