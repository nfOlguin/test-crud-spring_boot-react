import React from 'react';
import './App.scss';
import store from './redux/createStore'
import { Provider } from 'react-redux';
import InputSection from './components/InputSection';
import TaskSection from './components/TasksSection';

function App() {
  return (
    <Provider store={store}>
    <div className="container">

    <h1> Mis tareas </h1>
    <InputSection />
    <div className="line"></div>
    <TaskSection />
    </div>
    </Provider>
  );
}
export default App;
