import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router";
import InfoModalContainer from "../../../../components/modals/InfoModal/InfoModalContainer";
import ChangeModal from "../../../../components/modals/EditModal/EditModal";
import RequestListItem from "./RequestListItem";

const RequestListItemContainer = (props) => {
    const {url} = useRouteMatch();
    return (
        <>
            <Link to={`${url}info/${props.item.id}`}>
                <RequestListItem item={props.item}/>
            </Link>

            <InfoModalContainer url={url}
                                modalType={'info'}
                                item={props.item}/>
            <ChangeModal url={url} modalType={'edit'}
                         requestType={props.item.type}
                         id={props.item.id}/>
        </>
    )
}

export default RequestListItemContainer