
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectOrigen } from '../slices/navSlice';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';


export const Map = () => {

    const origin = useSelector(selectOrigen);

  // const { latitude, longitude } = location.coords;


  return (
    <MapView
    style={tw`flex-1`}
    mapType="standard"
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
       latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  />
  )
}



const styles = StyleSheet.create({})



      // latitude: origin.location.lat,
      // longitude: origin.location.lng,