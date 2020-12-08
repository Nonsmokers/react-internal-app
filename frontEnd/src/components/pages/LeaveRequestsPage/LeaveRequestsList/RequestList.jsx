import React from 'react';
import RequestListItemContainer from "./RequestListItem/RequestListItemContainer";

const RequestList = (props) => {
    return (
        <div className="requests__content">
            <div className="requests__content-header">
                <p>My Leave Requests</p>
            </div>
            <>
                {props.vacations.map((item) => (<RequestListItemContainer key={item.id} item={item}/>))}
            </>
        </div>
    )
}

export default RequestList;

