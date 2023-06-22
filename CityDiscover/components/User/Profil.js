import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PTileComponent from '../Planning/PTile';

const Tab = createMaterialTopTabNavigator();

function Tous() {
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
}

function Plannings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PTileComponent 
            image="https://cdn.sortiraparis.com/images/80/66131/350528-le-musee-du-louvre-coeur-artistique-et-touristique-de-la-capitale.jpg"
            title="100% Culture"
            description="Le planning parfait pour découvrir les musées"
      />
    </View>
  );
}

function Favoris() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
  );
}

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://avatars.akamai.steamstatic.com/7b8f6ba9b027abd6464852614c785ed3131037ba_full.jpg' }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textBold}>Texte en gras</Text>
          <Text>Autre texte</Text>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Tous" component={Tous} />
        <Tab.Screen name="Plannings" component={Plannings} />
        <Tab.Screen name="Favoris" component={Favoris} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#5AA1D8',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
