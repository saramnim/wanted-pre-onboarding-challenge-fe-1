import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import TodoList from './components/TodoList/TodoList';
import { ROUTE } from './Route';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      {/* <Routes>
        {ROUTE.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          )
        })}
        <Route path='/' element='TodoList' />
        
      </Routes> */}
      {/* <TodoList /> */}
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
