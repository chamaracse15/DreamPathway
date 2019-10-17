import React from 'react';
import '../styling/style.css';
import {Link} from 'react-router-dom';

function Navigate(){
    const navStyle1 = {
        color: 'white'
    }

    const navStyle2 = {
        color : 'green'
    }

    const navStyle3 ={
        color : 'blue'
    }
    return(

        <div className="navigate">

            <h3>Logo</h3>

            <ul className ="navigationLinks">

                <Link to ="/footer" style ={navStyle2}>
                    <li >Footer</li>
                </Link>

                <Link to ="/details" style ={navStyle1}>
                    <li >Details</li>
                </Link>

                <Link to ="/myinfo" style ={navStyle3}>
                    <li >My Information</li>
                </Link>
            </ul>

        </div>

    )
    
}

export default Navigate