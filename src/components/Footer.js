import React from "react";
import "../styling/style.css"
import FoodData from '../data/testingDataArray.json'

function Footer(){
    return(
        <footer>
        {FoodData.map((foodDetail, index) => {
            return (
                    <div>
                        <h1>{foodDetail.title}</h1>
                        <h5>Price = {foodDetail.Price}</h5>
                        <h2>Customer Comments : {foodDetail.Comments}</h2>
                        <hr/>
                    </div> )
        })}
        </footer>


    )


}

export default Footer