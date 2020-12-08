import React from "react";
import {NavLink} from "react-router-dom";
import "./EmployeeList.scss";

const EmployeeList = (props) => {
    return (
        <NavLink to={`/profile/${props.card.id}`} className="list__item">
            <li className="list__item">
                <div className="list__item-photo">
                    <img src={props.card.photo} alt="photo"/>
                </div>
                <div className="list__item-names">
                    <span className="list__item_english-name">
                        {props.card.nameInEnglish}
                    </span>
                    <span className="list__item_russian-name">
                        {props.card.nameInRussian}
                    </span>
                </div>
                <div className="list__item-department">
                    <p>{props.card.position}</p>
                </div>
                <div className="list__item-room">
                    <p>{props.card.room}</p>
                </div>
            </li>
        </NavLink>
    )
}

export default EmployeeList;