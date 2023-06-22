import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import PlanningScreen from './components/Planning/Planning';
import MapScreen from './components/Map/Map';
import MessageScreen from './components/Message/message';
import ProfilScreen from './components/User/Profil';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './components/Map/DetailComponent';
import PDetailScreen from './components/Planning/PDetail';
import 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MapStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Description' }}  />
  </Stack.Navigator>
);

const PlanningStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Planning" component={PlanningScreen} />
    <Stack.Screen name="PDetailScreen" component={PDetailScreen} options={{ title: 'Description' }}/>
    <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Description' }}  />
  </Stack.Navigator>
)

const UserStack = () => (
<Stack.Navigator>
    <Stack.Screen name="Profil" component={ProfilScreen} />
    <Stack.Screen name="PDetailScreen" component={PDetailScreen} options={{ title: 'Description' }}/>
    <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Description' }}  />
  </Stack.Navigator>

)

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Planning') {
              iconName = 'date-range';
            } else if (route.name === 'MapStack') {
              iconName = 'map';
            } else if (route.name === 'Message') {
              iconName = 'message';
            } else if (route.name === 'Profil') {
              iconName = 'person';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5AA1D8',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Planning" component={PlanningStack} options={{   headerShown: false }}/>
        <Tab.Screen name="MapStack" component={MapStack} options={{   headerShown: false }} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="Profil" component={UserStack} options={{   headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
