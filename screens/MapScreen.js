import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

// https://youtu.be/bvn_HYpix6s?t=7407
