import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Character Details</Link>
          </li>
           <li>
            <Link to="/characterlist">Character List</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <CharacterDetail />
          </Route>
          <Route path="/characterlist">
            <CharacterList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function CharacterDetail() {
  return (
    <div>
      <h2>Characters Detail</h2>
    </div>
  );
}

function CharacterList() {
  
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>List of characters</h2>
      <ul>
        <li>
          <Link to={`${url}/Rick`}>Rick</Link>
        </li>
        <li>
          <Link to={`${url}/Morty`}>Morty</Link>
        </li>
        <li>
          <Link to={`${url}/Rick and Morty`}>Rick and Morty</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
 
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
