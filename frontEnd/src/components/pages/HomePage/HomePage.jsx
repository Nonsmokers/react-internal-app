import React, {useState} from 'react';
import "./HomePage.scss";
import Loader from "../../common/Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import EmployeesNavbar from "./Employess/EmloyessNavbar/EmloyessNavbar";
import EmployeesContainer from "./Employess/EmployeesContainer";
import EmptyEmployees from "../../common/EmptyEmployees/EmptyEmployees";

const HomePage = (props) => {
    const [view, setView] = useState('grid');

    const handleViewUpdate = (e) => {
        setView(e.target.alt);
    };

    return (
        <>
            {props.isReady === false ?
                <Loader/> :
                <>
                    <SearchBar search={props.search}
                               setSearch={props.setSearch}
                               onSearchRequest={props.onSearchRequest}/>
                    <div id="employees">
                        <EmployeesNavbar handleViewUpdate={handleViewUpdate} users={props.users}/>
                        {props.users.length === 0 ? <EmptyEmployees /> : <EmployeesContainer users={props.users} view={view}/>}
                    </div>
                </>
            }
        </>
    )
}

export default HomePage