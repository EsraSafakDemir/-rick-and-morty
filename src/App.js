import React from 'react'
import Search from './components/Search'
import CharacterCard from './components/CharacterCard/CharacterCard'

function App() {
  const apiurl ="http://www.omdbapi.com/?i=tt3896198&apikey=873b707";
 
  return (
    <div className="App">
      <header >
        <h1>Rick and Morty</h1>
      </header>

      <main>
        <Search/>
      </main>
    </div>
  );
}

export default App
