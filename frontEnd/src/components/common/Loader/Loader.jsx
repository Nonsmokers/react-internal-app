import React from 'react';
import './Loader.scss';

const Loader = () => {
    return (
        <div className="loading__wrapper">
            <div className="circle"/>
            <div className="circle"/>
            <div className="circle"/>
            <div className="shadow"/>
            <div className="shadow"/>
            <div className="shadow"/>
        </div>
    )
}
export default Loader;