import {BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import './App.css';
import WeatherContextProvider from './Context/WeatherContext';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Views/Main'
function App() {
  return (
    <Router className="App">
      <WeatherContextProvider>
        <Header/>
        <Switch>
          <Route component={Main} path='/' exact ></Route>
          <Route></Route>
        </Switch>
        <Footer/>
      </WeatherContextProvider>
    </Router>
  );
}

export default App;
