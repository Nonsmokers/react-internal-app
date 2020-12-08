import React from 'react';
import './SettingsPage.scss';

const SettingsPageItem = (props) => {
    return (
        <div className="settings__list">
            <li className="setting__list-item">
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
                <div className="settings__list-item">
                    <div className="settings__list_checkbox-wrapper"
                         onChange={() => props.getChangedRole(props.card.id)}>
                        <input type="checkbox" className="checkbox" defaultChecked={props.card.role === 'user'}/>
                        <label className="settings_label" htmlFor="checkbox"/>
                    </div>
                </div>
                <div className="settings__list-item">
                    {props.card.role === 'admin' ?
                        <button className="employee__button">ADMIN</button> :
                        <button className="employee__button-empty">ADMIN</button>
                    }
                </div>
            </li>
        </div>
    )
}

export default SettingsPageItem;