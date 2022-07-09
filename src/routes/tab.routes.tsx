import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { theme } from '../assets/theme/theme';
import SAText, { TextSAType } from '../components/text.cmp';
import { useAppDispatch } from '../redux_store/actions';
import { setPlayer } from '../redux_store/reducers';
import GameRoutes from './tabs/game.routes';
import ResultRoutes from './tabs/result.routes';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const listFromAsyncStorage = await AsyncStorage.getItem('LIST')
        .then((item: any) => JSON.parse(item))
        .catch(err => err);
      if (listFromAsyncStorage) {
        dispatch(setPlayer(listFromAsyncStorage));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [
            { ...styles.tabBarStyle },
            Platform.OS === 'android' && { height: 65 },
          ],
        }}>
        <Tab.Screen
          name="Game"
          component={GameRoutes}
          options={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: () => <></>,
            tabBarLabel: ({ focused }) => (
              <SAText
                style={[
                  styles.label,
                  { color: focused ? theme.primary : 'black' },
                  Platform.OS === 'android' && { marginBottom: 20 },
                ]}
                type={TextSAType.medium}>
                Game
              </SAText>
            ),
          }}
        />
        <Tab.Screen
          name="Results"
          component={ResultRoutes}
          options={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: () => <></>,
            tabBarLabel: ({ focused }) => (
              <SAText
                style={[
                  styles.label,
                  { color: focused ? theme.primary : 'black' },
                  Platform.OS === 'android' && { marginBottom: 20 },
                ]}
                type={TextSAType.medium}>
                Results
              </SAText>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabRoutes;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
  tabBarStyle: {
    justifyContent: 'center',
    borderTopColor: 'transparent',
  },
});
