import React from 'react';

import './App.css';

import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <main role="main" className="has-background-link">
        <div className="container ">
          <Todo />
        </div>
      </main>
    </div>
  );
}

export default App;
