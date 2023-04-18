import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import store from './components/store';
import GitSearch from './components/gitSearch';

function App() {
  
  return (
    <Provider store={store}>
    <div className='App'>
      <GitSearch/>
    </div>
    </Provider>
  );
}

export default App;
