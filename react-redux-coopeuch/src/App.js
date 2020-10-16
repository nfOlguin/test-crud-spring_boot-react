import React from 'react';
import './App.css';
import store from './redux/createStore'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      test naaman
    </div>
    </Provider>
  );
}
export default App;
