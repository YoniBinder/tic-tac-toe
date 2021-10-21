import React from 'react';
import './App.css';
import Board from '../board/Board'
import Score from '../score/Score';

function App(){

    return (
      <div className="App">
        <header className="App-header">
          <h2>Tic Tac Toe</h2>
          <Score />
          <Board/>
        </header>
      </div>
    );
  
}

export default App;


