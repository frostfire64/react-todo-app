import React from 'react';
import './scss/style.scss';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My todos</h1>
      </header>
      <main>
        <TodoList></TodoList>
      </main>
    </div>
  );
}

export default App;
