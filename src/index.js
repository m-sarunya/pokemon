import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
const store = createStore(reducers, applyMiddleware(thunk));

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById('root')
);
