// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';

const App = () => {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <NavigationBar/>
        <Hero/>
    </div>
  );
}

export default App;
