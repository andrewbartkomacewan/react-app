import React from "react";

import './emailbodyview.styles.css';

export const EmailBodyView = ({ email}) => {
    if (!email){
        return null;
    }
    const {id, from, address, time, subject, message, tag, read} = email;
    return (
        <div className="emailbody" >
            <h2>{from}</h2>
            <h1>{subject}</h1>
            <h3>{address}</h3>
            <h3>{time}</h3>
            <p>{message}</p>
        </div>
    )
};