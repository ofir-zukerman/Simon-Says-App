import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './src/routes/tab.routes';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/redux_store/store';
import { SafeAreaView } from 'react-native';

// import {Provider} from 'react-redux';
// import {store} from './src/Redux/store';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
