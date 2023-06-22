import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import TileComponent from '../Map/TileComponent';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const mapRef = useRef();

  useEffect(() => {
    axios.get('https://citydiscover.fr/paris').then(response => {
        const test = response.data;
        setData(test.map(item => item));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 1000, // Update every 1 second
        distanceInterval: 1, // Update every 1 meter
      }, (location) => {
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      });
    })();
  }, []);

  const navigateToDetailScreen = (image, title, description) => {
    navigation.navigate('DetailScreen', { image, title, description });
  };

  const centerMap = () => {
    mapRef.current.animateToRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    }, 1000);
    setSelectedMarker(null);
  }

  if (latitude === null || longitude === null) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        onPress={() => setSelectedMarker(null)}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title='Mon Téléphone'
        />
        {data.slice(0, 1500).map((data, index) => {
          if (data.lat_lon !== null) {
            return (
              <Marker
                key={index}
                pinColor='#F59D3D'
                coordinate={{ latitude: data.lat_lon.lat, longitude: data.lat_lon.lon }}
                onPress={() => setSelectedMarker(data)}
              />
            );
          }
        })}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Centrer" onPress={centerMap} />
      </View>
      {selectedMarker && (
        <TileComponent
          image={selectedMarker.cover_url}
          description={selectedMarker.description}
          title={selectedMarker.title}
          onPress={navigateToDetailScreen}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 20, // moved the button to the bottom
    right: 10,
    zIndex: 2,
  },
});

export default MapScreen;
