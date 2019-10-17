import React from 'react';

function Joke(props){
    return(
       <div>
            <h1 style ={{display: !props.question && "none"}}>Question : {props.question}</h1>
            <h1 style ={{color: !props.question && "blue"}}>Answer : {props.answer}</h1>
            <hr/>

       </div>


    )

}

export default Joke;