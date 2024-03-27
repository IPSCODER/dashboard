import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';


axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <Provider store={store} >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>

 </>
);

