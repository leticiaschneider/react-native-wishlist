import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from "react-native";
import Feed from './src/components/Feed/Feed'
import Wishlist from './src/components/Wishlist/Wishlist'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === 'Home' ? 'home' : 'heart';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ca8d76',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="Wishlist" component={Wishlist} />
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
