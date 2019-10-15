import React from 'react';
import ContactCards from './ContactCards';

function ContactCardImplement(){

    return(
        <div>
            <ContactCards

                contact={{
                    name :"Mr Prasanna",
                    imgUrl : "{require('../images/submarine1.jpg')}",
                    contact : "0777726811",
                    email : "aaa@BroadcastChannel.com"
                }}
                
            />
            <br/>

<ContactCards
                contact={{
                    name: "Mr Sanath",
                    imgUrl : "{require('../images/submarine2.jpg')}",
                    contact : "0718220289",
                    email : "aaa@Broadc.com"
                }}
            />
        </div>

    )
}

export default ContactCardImplement;