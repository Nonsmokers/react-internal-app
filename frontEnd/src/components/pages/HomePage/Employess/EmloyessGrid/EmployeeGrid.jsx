import React from "react";
import {NavLink} from "react-router-dom";
import "./EmployeeGrid.scss";

const EmployeeGrid = (props) => {
    return (
        <NavLink to={`/profile/${props.card.id}`}>
            <li className="card__item-wrapper">
                <div className="card__item">
                    <div className="card__item_photo">
                        <img alt="photo" src={props.card.photo}/>
                    </div>
                    <span className="card__item_english-name">{props.card.nameInEnglish}</span>
                    <span className="card__item_russian-name">{props.card.nameInRussian}</span>
                    <span className="card__item_line"/>
                    <div className="card__item_information">
                        <div className="card__item_information-position">
                            <img
                                src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857193.svg"
                                alt="position"/>
                            <p>{props.card.position}</p>
                        </div>
                        <div className="card__item_information-room">
                            <img
                                src="https://cdn-contributor.flaticon.com/packs/29/29264/29264138/1857/1857176/1857184.svg"
                                alt="room"/>
                            <p>{props.card.room}</p>
                        </div>
                    </div>
                </div>
            </li>
        </NavLink>
    )
}

export default EmployeeGrid;