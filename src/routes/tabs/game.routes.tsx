import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../../screens/game.screen';

const Stack = createStackNavigator();

const GameRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </>
  );
};

export default GameRoutes;
