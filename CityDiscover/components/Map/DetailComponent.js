import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { image, title, description } = route.params; // get parameters passed in navigation

  const cleanDescription = description.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: image }} 
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{cleanDescription}</Text> 
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  image: {
    width: '100%',
    height: 280,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default DetailScreen;
