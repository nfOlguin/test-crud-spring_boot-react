import React from 'react';
import './App.css';
import store from './redux/createStore'
import { Provider } from 'react-redux';
import InputSection from './components/InputSection';

function App() {
  return (
    <Provider store={store}>
    <div className="container">

    <h1> Mis tareas </h1>
      <InputSection/>
    </div>
    </Provider>
  );
}
export default App;
