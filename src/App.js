import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Details from './components/Details';
import MyInfo from './components/MyInfo';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigate from './components/Navigate';


function App() {
  return (
    <div className="App">
    
    <Router>
      <Navigate />
      <Switch>
        <Route path ="/"  exact component = {HomePage} />
        <Route path = "/details" component = {Details} />
        <Route path = "/footer" component = {Footer} />
        <Route path = "/myInfo" component = {MyInfo} />
  
      </Switch>  
    </Router>
    </div>
  );
}


function HomePage(){
  return (
    <div>
      <h2>This is the home page</h2>
    </div>

  )

}
export default App;
