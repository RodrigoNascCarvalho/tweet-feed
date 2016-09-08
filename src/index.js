import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>	
  	<App />
  </Provider>,
  document.getElementById('root')
);
