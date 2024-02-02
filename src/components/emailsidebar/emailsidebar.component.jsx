import React from "react";

import { Email } from './email.component';

import "./emailsidebar.styles.css";

export const EmailSidebar = ({emails, handleClick, activeEmail}) => {
    const sidebarEmails = emails.map(({id, from, subject, address, time, read}) =>
    ({
        id,
        from,
        subject,
        address,
        time,
        read
    }));
    return (
        <div className="emailsidebar">
            {sidebarEmails.map((email) => (
                <Email key={email.id} 
                email={email} 
                handleClick={handleClick} 
                activeEmail={activeEmail}
                />
            ))}
        </div>
    );
};