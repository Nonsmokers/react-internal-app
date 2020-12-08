import React from 'react';

const SettingsHeader = () => {
    return (
        <div className="settings-wrapper">
            <div className="settings__header">
                <h1>ROLES & PERMISSIONS</h1>
            </div>
            <div className="settings__navbar">
                <div className="settings__navbar-input">
                    <form className="settings__search_form-input">
                        <input type="text" id="search_input" placeholder='Type to search'/>
                    </form>
                </div>
                <div><p>Address book role</p></div>
                <div><p>Admin</p></div>
            </div>
        </div>
    )
}
export default SettingsHeader