import React from 'react';
import Joke from './Joke';


function ConditionalRendering(){
    const nums = [1,2,3,4,5,6,7,8,9,10]
    const doubled = nums.map(function(num){
        return num * 2
    })
    return (
        <div>
            <Joke 
                answer = "Human"
            />
            <Joke
                question = "with what pineapple is made"
                answer = "it is a roseapple gooseberry mixture"
            />
            <Joke
                question = "how to make a peanutbutter cube"
                answer = "take butter and mix with the peanuts"
            />
            <Joke
                question = "how to get taller if you are already tall"
                answer = "if i am i wont have to"
            />
            <Joke
                question = "think you are in a sinking boat, how to survive"
                answer = "stop thinking"
/>




        </div>



    )



}

export default ConditionalRendering;