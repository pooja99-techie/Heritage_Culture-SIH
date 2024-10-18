import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/es/integration/react';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
)
