import React, {useEffect} from 'react';
import {connect} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {AJAXRequests, requestURL} from "../../api/api";
import {fetchVacations} from "../../redux/actions/vacations";
import LeaveRequestsPage from "./LeaveRequestsPage";
import Loader from "../../components/common/Loader/Loader";

const LeaveRequestsPageContainer = (props) => {

    useEffect(() => {
        AJAXRequests.getVacation('GET', requestURL)
            .then(data => {
                props.fetchVacations(JSON.parse(data))
            })
    }, []);

    return (
        <>
            {props.isReady
                ? <LeaveRequestsPage vacations={props.vacations}/>
                : <Loader/>}
        </>
    )
}

const selectVacations = state => state.vacationsReducer.items
const selectIsReady = state => state.vacationsReducer.isReady

const mapStateToProps = (state) => ({
    vacations: selectVacations(state),
    isReady: selectIsReady(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchVacations: vacations => dispatch(fetchVacations(vacations))
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaveRequestsPageContainer);
