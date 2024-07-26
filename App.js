import React from 'react';

import {NativeBaseProvider} from 'native-base';
import Navigation from './src/Navigation/AuthNavigators';
import {Provider, useSelector} from 'react-redux';
import { store } from './src/app/store';


// import {PersistGate} from 'redux-persist/integration/react';

// import {myStore, persistor} from './src/redux/myStore';

export default function App() {

  return (
    
    <Provider store={store}>
       {/* <PersistGate loading={null} persistor={persistor}> */}
        <NativeBaseProvider>
          <Navigation></Navigation>
        </NativeBaseProvider>
       {/* </PersistGate> */}
     </Provider>   
  );
}
