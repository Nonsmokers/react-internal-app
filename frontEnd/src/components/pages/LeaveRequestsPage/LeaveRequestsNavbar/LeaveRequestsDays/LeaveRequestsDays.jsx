import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import groupImg from '../../../../assets/img/group.svg'


const LeaveRequestsDays = () => {
    return (
        <div className="requests__navbar_header">
            <div className="requests__navbar_header-description">
                <div className="requests__navbar_header-tittle">
                    <h1>Vacation Days</h1>
                </div>
                <div className="requests__navbar_header-days">
                    <p>Available</p>
                    <p>147</p>
                </div>
            </div>
            <div className="requests__navbar_header-footer">
                <img src={groupImg} alt="group"/>
            </div>
        </div>
    )
}
export default LeaveRequestsDays