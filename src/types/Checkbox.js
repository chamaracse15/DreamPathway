import React from "react"

function Checkbox(){

    const suggestion1 = "Buy Now";
    const suggestion21 = "Cash ";
    const suggestion22 = "on Delivery";
    const suggestion3 = "Card Payment";
    return(
       <div>
            <input type = "checkbox"/>
            <p1>{suggestion1}</p1>

            <input type = "checkbox"/>
            <p1>{suggestion21} {suggestion22}</p1>

            <input type = "checkbox"/>
            <p1>{suggestion3}</p1>


       </div>


    )


}

export default Checkbox