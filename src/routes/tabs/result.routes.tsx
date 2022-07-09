import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResultScreen from '../../screens/result.screen';

const Stack = createStackNavigator();

const ResultRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ResultList" component={ResultScreen} />
      </Stack.Navigator>
    </>
  );
};

export default ResultRoutes;
