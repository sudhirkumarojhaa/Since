import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, persistor} from './app/store';
import {StatusBar} from 'react-native';
import {colorCode} from './app/design/colorCode';
import Logic from './app/screens/Logic';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  RNBootSplash.hide();
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colorCode.brand} barStyle="light-content" />
        <Logic />
      </PersistGate>
    </Provider>
  );
};
export default App;
