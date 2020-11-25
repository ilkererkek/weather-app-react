import {BrowserRouter as Router ,Switch,Route, Redirect } from 'react-router-dom';
import './App.css';
import WeatherContextProvider from './Context/WeatherContext';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Views/Main'
import City from './Views/City'
import NotFound from './Views/NotFound';
function App() {
  return (
    <Router className="App">
      <WeatherContextProvider>
        <Header/>
        <Switch>
          <Route component={Main} path='/' exact ></Route>
          <Route component={City} path='/city/:id' exact ></Route>
          <Route component={NotFound} path='/404' exact ></Route>
          <Route  path='*'  ><Redirect to='/404' /></Route>
          <Route></Route>
        </Switch>
        <Footer/>
      </WeatherContextProvider>
    </Router>
  );
}

export default App;
