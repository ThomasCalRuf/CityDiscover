import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TileComponent = ({ image, title, description }) => {
  const navigation = useNavigation();

  const cleanDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <TouchableOpacity 
    style={[styles.container, {marginTop: 20 }]}
      onPress={() => navigation.push('DetailScreen', { image, title, description })}
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.description}>{cleanDescription}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 326,
    height: 279,
    backgroundColor: '#5AA1D8',
    borderRadius: 10,  // Ajoute des bords arrondis
  },
  image: {
    width: 326,
    height: 194,
    borderTopLeftRadius: 10, // Assure que les coins supérieurs de l'image sont également arrondis
    borderTopRightRadius: 10, // Assure que les coins supérieurs de l'image sont également arrondis
  },
  textContainer: {
    width: 326,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10, // Assure que les coins inférieurs du conteneur de texte sont également arrondis
    borderBottomRightRadius: 10, // Assure que les coins inférieurs du conteneur de texte sont également arrondis
  },
});

export default TileComponent;
