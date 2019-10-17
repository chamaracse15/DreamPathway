import React from 'react';
import Checkbox from './types/Checkbox';
import Constfunction from './types/Constfunction';
import App from './App';
import Datethings1 from './datethings/Datethings1';
import ContactCards from './propsthings/ContactCards';
import ContactCardImplement from './propsthings/ContactCardImplement';
import {Link} from 'react-router-dom';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Apptesting123(){

  return(
    <div className = "Apptesting123" >
      <Checkbox/>
      <Constfunction />
      <Datethings1 /> 
      <ContactCardImplement/>
      <hr/>
      <App/>
    </div>


  )
}

export default Apptesting123;
