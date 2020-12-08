import React from 'react';

const EmployeesNavbar = (props) => {
    return (
        <div className="employees__navbar">
            <div className="employees_count">
                <p>{props.users.length} employees displayed</p>
            </div>
            <div className="employees_toggle">
                <img id="grid"
                     src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857179.svg"
                     alt="grid"
                onClick={props.handleViewUpdate}/>
                <img id="list"
                     src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857188.svg"
                     alt="table"
                onClick={props.handleViewUpdate}/>
            </div>
        </div>
    )
}

export default EmployeesNavbar;
