import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import FormContainer from "../../components/form/FormContainer";
import RequestList from "./LeaveRequestsList/RequestList";
import LeaveRequestsDays from "./LeaveRequestsNavbar/LeaveRequestsDays/LeaveRequestsDays";

const LeaveRequestsPage = (props) => {
    return (
        <section className="requests-wrapper">
            <div className="requests">
                <div className="requests__navbar">
                    <LeaveRequestsDays/>
                    <FormContainer/>
                </div>
                <RequestList vacations={props.vacations}/>
            </div>

        </section>
    )
}

export default LeaveRequestsPage;
