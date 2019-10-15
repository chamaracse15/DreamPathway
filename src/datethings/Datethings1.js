import React from 'react';

const Datethings1 = () =>{
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const month = date.getMonth()
    const day = date.getDate()

    let timeOfDay
    let textColor

    if (hour<12){
        timeOfDay = "morning"
        textColor = "blue"
    } else if (hour<15){
        timeOfDay = "afternoon"
        textColor = "green"
    }else if (hour<19){
        timeOfDay = "evening"
        textColor = "orange"
    }else {
        timeOfDay = "night"
        textColor = "red"
    }

    const styles = {
        color:textColor,
        backgroundColor:"brown"
        
    }

    return(
        <div>
            <h4>Today is {day}th of {month}</h4>
            <h1>It is {hour} : {minute} : {second} now</h1>
            <h2 style ={styles} >Good {timeOfDay} Chooty</h2>
            <h3>this shit does not even work properly</h3>

        </div>

          )

}

export default Datethings1;