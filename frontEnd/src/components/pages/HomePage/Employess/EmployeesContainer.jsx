import React from 'react';
import EmployeeGrid from "./EmloyessGrid/EmployeeGrid";
import EmployeeList from "./EmloyessList/EmployeeList";
import EmployeeListHeaderContainer from "./EmployeesListHeader/EmployeeListHeaderContainer";

function EmployeesContainer(props) {
    return (
        <>
            <ul className="card">
                {props.view === "table" ?
                    <>
                        <EmployeeListHeaderContainer/>
                        {props.users.map((card, i) => (
                            <EmployeeList key={i} card={card}/>
                        ))}
                    </> :
                    <>
                        {props.users.map((card, i) => (
                            <EmployeeGrid key={i} card={card}/>
                        ))}
                    </>
                }
            </ul>
        </>
    )
}

export default EmployeesContainer;

