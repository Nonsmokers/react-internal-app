import React from 'react';
import "react-datepicker/dist/react-datepicker.css";

const RequestListItem = (props) => {
    console.log(props)
    return (
        <li className="list__item">
            <div className="list__item-photo">
                <img src={props.item.photo} alt="photo"/>
            </div>
            <div className="list__item-names">
                <p className="list__item-date">{props.item.type} :
                    {props.item.start_date} - {props.item.end_date}({props.item.total_days} days)
                </p>
                <p className="list__item-created">Created : {props.item.created}</p>
                <p className="list__item-approved">
                    {props.item.confirmation === true ? 'Approved' : 'Pending approval'}
                </p>
            </div>
        </li>
    )
}

export default RequestListItem