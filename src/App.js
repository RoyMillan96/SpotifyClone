// import logo from './logo.svg';
import * as ROUTES from "./constants/routes";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import SignUpForm from './components/SignUpForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavigationBar/>

      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm}/>
        <Route path={ROUTES.HOME} component={Hero}/>
      </Switch>
    </Router>
  );
}

export default App;
