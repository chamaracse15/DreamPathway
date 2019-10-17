import React, {useEffect, useState} from "react";
import '../styling/style.css';
import { async } from "q";


function Details(){

    useEffect(() => {
            fetchItems();
    }, []);

    const fetchItems = async () => {

        const data = await fetch('https://fortnite-api.theapinetwork.com/items/list', {mode: 'no-cors'} );
        const dataSet = await data.json();
        console.log(dataSet);
    };
    return(
        <header>
            <h1 className = "header">This is the Header element</h1>
        </header>


    )


}

export default Details