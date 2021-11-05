// import logo from './logo.svg';
import * as ROUTES from "./constants/routes";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import SignUpForm from './components/SignUpForm';
import LoginForm from "./components/LoginForm/LoginForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WebApp from "./pages/WebApp";
import { useAuth } from "./context/AuthContext";
import './App.css';

const App = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <Router>
      <NavigationBar/>

      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm}/>
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <PrivateRoute path={ROUTES.WEB_APP}>
          <WebApp />
        </PrivateRoute>
        <Route path={ROUTES.HOME} component={Hero}/>
      </Switch>
    </Router>
  );
}

export default App;
