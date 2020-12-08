import React from 'react';
import "./EmployeeListHeader.scss";

const EmployeeListHeader = (props) => {
    return (
        <div className="list__header">
            <div className="list__header-photo">
                <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857196.svg"
                     alt="photo"/>
                <p>Photo</p>
            </div>
            <div id="name" className="list__header-name" onClick={(e) => props.sortBy(e)}>
                <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857189.svg"
                     alt="user"/>
                <p>Name</p>
            </div>
            <div id="department" className="list__header-department" onClick={(e) => props.sortBy(e)}>
                <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857193.svg"
                     alt="position"/>
                <p>Department</p>
            </div>
            <div id="room" className="list__header-room" onClick={(e) => props.sortBy(e)}>
                <img src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857184.svg"
                     alt="room"/>
                <p>Room</p>
            </div>
        </div>
    )
}
export default EmployeeListHeader
