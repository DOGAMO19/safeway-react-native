import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { REACT_APP_GOOGLE_MAPS_APIKEY } from "@env";
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
 

export const MapScreen = () => {
  return (
      <SafeAreaView style={tw `bg-gray-100 h-full`}>
      
        <GooglePlacesAutocomplete 
          placeholder='A donde vamos ahora...?'
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
          query={{
            key: REACT_APP_GOOGLE_MAPS_APIKEY,
            language: "es", 
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={300}
        />
      </SafeAreaView>

  )
}

