
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 
import { REACT_APP_GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestino, setOrigen } from '../slices/navSlice';

const data = [
    {
        id: "2",
        title: "Comienza a Viajar",
        image: "http://links.papareact.com/3pn",
        screen: "MapScreen",
    },
];

const dataTravels = [
    {
        id: "11",
        mainDestiny: "UPIICSA",
        address: "Col. Iztacalco",
        imageTravel: "https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png"
    },
    {
        id: "12",
        mainDestiny: "Miraflores",
        address: "Col. Mexico",
        imageTravel: "https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png"
    },
    {
        id: "13",
        mainDestiny: "UPIICSA",
        address: "Col. Iztacalco",
        imageTravel: "https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png"
    },
    {
        id: "14",
        mainDestiny: "Lareto",
        address: "Col. Las Aguilas",
        imageTravel: "https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png"
    },
];


const { width } = Dimensions.get('window'); //Obtiene todo el valor del tamanio de la pantalla del dispositivo



export const NavScreen = () => {

    const navigation = useNavigation();
    
    return (
      <SafeAreaView style={tw `bg-gray-100 h-full`}>
        {/* Contenedor global */}
          <View style = {styles.container} > 
             {/*Ingreso logotipo  */}
              <Image 
                  style={{
                      width: 200 ,
                      height: 100,
                      resizeMode: "contain",
                      alignSelf: 'center'
                  }} 
                  source={
                      //uri: "https://static.vecteezy.com/system/resources/previews/005/484/215/original/super-car-logo-free-vector.jpg" 
                      require("../assets/SafewayLogo.png")
                     }
              /> 
              {/*Fin logotipo  */}

              {/* Primer lista para ir a opciones*/}
              <FlatList 
                  data={data}
                  pagingEnabled
                  horizontal
                  keyExtractor={ (item) => item.id }
                  renderItem = { ({item}) =>( 
                      <TouchableOpacity 
                      onPress={() => navigation.navigate(item.screen)} 
                      style={{...styles.boxSize, paddingTop: 10  }}
                      >
                        {/* Vista de la imagen del carro en el elemento de lista */}
                          <View>  
                              <Image 
                                  style={{ width: 120, height: 120, resizeMode: 'contain', marginLeft: 30 }}
                                  source={{ uri: item.image }}
                              />
                          </View> 
                          {/* Fin de la Vista de la imagen del carro en el elemento de lista */}
                          
                          {/* Inicio vista de textos e icono en el elemento lista */}
                          <View> 
                            <Text style={styles.textBox}> {item.title} </Text>
                            <Text style={{...styles.textBox, fontWeight: '300' }}> Conoce las rutas cercanas a ti  </Text>
                            <Icon 
                                style={{ alignSelf: 'flex-end', marginTop: 20, marginRight: 20  }}
                                name='right'
                                type='antdesign'
                                color='black'
                            />
                          </View> 
                          {/* Fin de vista de textos e icono en el elemento lista */}
                      </TouchableOpacity> //Fin de renderizacion de elemento de lista
                  )}
              />
  
                  <Text style={{fontWeight: 'bold', fontSize: 20  }} > Tus Ultimos Viajes </Text>

                    { /* Inicio de lista vertical para mostrar los ultimos viajes realizados*/ }
                  <FlatList 
                  data={dataTravels}
                  keyExtractor={ (item) => item.id }
                  renderItem = { ({item}) => (
                      <TouchableOpacity 
                      style={{...styles.boxSize, marginTop:10, height: width/3.5,}}
                      >
                        {/* Inicio vista de imagen de ubicacion */}
                          <View style={styles.boxDirection} > 
                              <Image 
                                   style={{ width: 50, height: 50, resizeMode: 'contain', marginLeft: 15, alignItems: 'center', alignSelf: 'center' }}
                                   source={{ uri: item.imageTravel}}
                              />
                          </View> 
                          {/* Fin de la vista de imagen de ubicacion */}
                          {/* Inicio vista de textos de ultima ubicacion */}
                          <View> 
                              <Text style={{...styles.textBox, marginLeft:25, alignSelf: 'center' }} > {item.mainDestiny} </Text>
                              <Text style={{...styles.textBox, marginLeft:25, alignSelf: 'center',  fontWeight: '300' }} > {item.address} </Text>
                          </View> 
                          {/* Fin de la vista de textos de ultima ubicacion */}

                          
                          {/* Inicio de vista para icono de flecha (FUTURA PANTALLA OPCIONAL) */ }
                          {/* <View style={{flex: 1, justifyContent: 'space-between', alignSelf: 'center', alignItems: 'flex-end', marginRight: 20 }}>
                                <Icon 
                                style={{justifyContent: 'space-between' }}
                                name='right'
                                type='antdesign'
                                color='black'
                            /> 
                          </View>  */}
                          {/* Fin de vista para icono de flecha (FUTURA PANTALLA OPCIONAL) */ }
                      </TouchableOpacity>
                  )}
                  
                  /> 
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
      boxSize: {
          flex: 1,
          flexDirection: 'row',
          width: width-20,
          borderRadius: 20,
          height: width/2.5,
          backgroundColor: '#EAEDED',
          align: 'center'
      },
      boxDirection: {
          flexDirection: 'row',
      },
      textBox: { 

          marginTop: 15,
          fontWeight: '700'
      }
  })





// backgroundColor: '#EAEDED',
// marginBottom: 20,
// borderRadius: 20,
// padding: 15,
// flexDirection: 'row'
//https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png