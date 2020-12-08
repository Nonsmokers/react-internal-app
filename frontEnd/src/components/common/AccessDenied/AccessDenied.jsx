import React from 'react';
import './AccessDenied.scss';

const AccessDenied = () => {
    return (
        <div className="access__denied-wrapper">
            <img src="https://lukaszadam.com/assets/downloads/guy_on_desk.svg" alt="access denied"/>
            <h1>You are not authorized in the system, please login to use the application</h1>
        </div>
    )
}

export default AccessDenied