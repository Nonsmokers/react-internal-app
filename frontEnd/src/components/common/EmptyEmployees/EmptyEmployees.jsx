import React from 'react';
import './EmptyEmployees.scss';

const EmptyEmployees = () => {
    return (
        <div className="empty__users-wrapper">
            <img src="https://lukaszadam.com/assets/downloads/desk-illustration-2.svg" alt="access denied"/>
            <h1>Employees not found</h1>
        </div>
    )
}

export default EmptyEmployees