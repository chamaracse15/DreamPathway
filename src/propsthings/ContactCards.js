import React from 'react';
import '../styling/style.css';


const ContactCards = (props) => {
    console.log(props)
   return( 
       
       <div className = "contactcards">
        <img src ={props.contact.imgUrl}/>
        <h3>{props.contact.name}</h3>
        <p>Contact : {props.contact.contact}</p>
        <p>e-mail : {props.contact.email}</p>

    </div>)

}




export default ContactCards;