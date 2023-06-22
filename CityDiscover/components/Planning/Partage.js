import React from 'react';
import {ScrollView, View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PTileComponent from './PTile';

const PartageComponent = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <PTileComponent 
            image="https://cdn.sortiraparis.com/images/80/66131/350528-le-musee-du-louvre-coeur-artistique-et-touristique-de-la-capitale.jpg"
            title="100% Culture"
            description="Le planning parfait pour découvrir les musées"
          />
          <PTileComponent 
            image="https://monparisjoli.com/wp-content/uploads/2016/06/cropped-Passerelle-tolbiac-ouverture-pano.jpg"
            title="Promenades à Paris"
            description="Venez visiter Paris en découvrant les ponts"
          />
          <PTileComponent 
            image="https://www.lejdd.fr/lmnr/var/jdd/public/media/image/2022/10/01/15/exclusif.-voici-le-projet-final-pour-les-abords-de-la-tour-eiffel.jpg?VersionId=Aa3SBiVw7KXGqh43DQPk.NYW0ERGbrx_"
            title="Spécial Monuments"
            description="Découvre les monument les plus iconniques de Paris"
          />
        </View>
      </ScrollView>
    );
  };

export default PartageComponent;