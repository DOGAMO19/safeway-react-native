import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "2",
        title: "Comienza a Viajar",
        image: "http://links.papareact.com/3pn",
        screen: "RoutesScreen",
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
    return (
      <SafeAreaView style={tw `bg-gray-100 h-full`}>
          <View style = {styles.container} >
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
              <FlatList 
                  data={data}
                  pagingEnabled
                  horizontal
                  keyExtractor={ (item) => item.id }
                  renderItem = { ({item}) =>( 
                      <TouchableOpacity
                      style={{...styles.boxSize, paddingTop: 10  }}
                      >
                          <View  > 
                              <Image 
                                  style={{ width: 120, height: 120, resizeMode: 'contain', marginLeft: 30 }}
                                  source={{ uri: item.image }}
                              />
                          </View>
                          <View>
                            <Text style={styles.textBox}> {item.title} </Text>
                            <Text style={{...styles.textBox, fontWeight: '300' }}> Conoce las rutas cercanas a ti  </Text>
                          </View>
                          <View>
                            {/* Aqui va el icono de la flechita */}
                          </View>
                      </TouchableOpacity>
                  )}
              />
  
                  <Text style={{fontWeight: 'bold', fontSize: 20  }} > Tus Ultimos Viajes </Text>
  
                  <FlatList 
                  data={dataTravels}
                  keyExtractor={ (item) => item.id }
                  renderItem = { ({item}) => (
                      <TouchableOpacity 
                      style={{...styles.boxSize, marginTop:10, height: width/3.5,}}
                      >
                          <View style={styles.boxDirection} >
                              <Image 
                                   style={{ width: 50, height: 50, resizeMode: 'contain', marginLeft: 15, alignItems: 'center', alignSelf: 'center' }}
                                   source={{ uri: item.imageTravel}}
                              />
                          </View>
                          <View>
                              <Text style={{...styles.textBox, marginLeft:25 }} > {item.mainDestiny} </Text>
                              <Text style={{...styles.textBox, marginLeft:25, fontWeight: '300' }} > {item.address} </Text>
                          </View>
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