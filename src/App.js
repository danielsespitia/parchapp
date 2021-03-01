import './App.css';

import { useEffect } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import auth from './auth';

import Home from './pages/Home';
import Profile from './pages/Profile';
import MyPlans from './pages/MyPlans';

function App() {
  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/todos/1',
        });
        auth.user.userId = data.userId;
        auth.user.id = data.id;
        auth.user.title = data.title;
        auth.user.completed = data.completed;
        console.log('hola k tala')
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app/profile" component={Profile} />
          <Route exact path="/app/my-plans" component={MyPlans} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
