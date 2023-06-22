import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from './Perso';
import PartageComponent from './Partage';

const Tab3 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cette page est en construction</Text>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function Planning() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Personnalisé" component={Tab1} />
      <Tab.Screen name="Partagés" component={PartageComponent} />
      <Tab.Screen name="Création" component={Tab3} />
    </Tab.Navigator>
  );
}


