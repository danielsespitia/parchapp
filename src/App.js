import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './pages/Home'
import Profile from './pages/Profile'
import MyPlans from './pages/MyPlans'

function App() {
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
