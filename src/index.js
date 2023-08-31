import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './context/Store';
import { UserProvider } from './context/UserContext';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <UserProvider>
          <App />
        </UserProvider>
      {/* </PersistGate>
    </Provider>   */}
  </React.StrictMode>
);

