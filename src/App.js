import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetails/CharacterDetail';


const App = () => {

  const [hasError, setErrors] = useState(false);
  const [characters, setCharacters] = useState({});

 
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://rickandmortyapi.com/api");
      res
        .json()
        .then(res => setCharacters(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });




  return (
    
    
    <Router>
      <div>
        <hr />

        <Switch>
        <Route path="/characters/:id" component={CharacterDetail} />
        <Route path="/characters" component={CharacterList} />
        </Switch>
        <CharacterList/>
      </div>
    </Router>
    
  );
}

export default App;


