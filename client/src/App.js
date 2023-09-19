import './App.css';
import { Route , Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <>
    <Navbar/>
   <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>


      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
        
      {/* <Route path="/logout">
        <Logout />
      </Route> */}
      
      <Route>
        <Errorpage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
