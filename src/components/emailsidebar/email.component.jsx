// email.component.jsx

import React from "react";

import './email.styles.css';

export const Email = ({ email, handleClick, activeEmail}) => {
    const {id, from, address, time, subject, tag, read} = email;
        let className = '';
        if (activeEmail && id === activeEmail){
            className = 'activeEmail';
        }
        else if (read === 'true'){
            className = 'readEmail';
        }
        else if(read === 'false'){
            className = 'unReadEmail';
        }
        
        const handleEmailClick = () => {
            handleClick(id);
        };

        return (
                <div id={id} className={className} onClick={handleEmailClick} activeEmail={activeEmail}>
                    <h2>{from}</h2>
                    <h1>{subject}</h1>
                    <h3>{address}</h3>
                    <h3>{time}</h3>
                </div>
        )
};