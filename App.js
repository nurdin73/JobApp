import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store';
import RootRouter from './src/RootRouter';

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
