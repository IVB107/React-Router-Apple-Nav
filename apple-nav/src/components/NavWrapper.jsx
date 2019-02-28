import React from 'react';
// import { Route, Link } from 'react-router-dom';

import Tab from './Tab';

const NavWrapper = props => {
    return (
        <div>
            {props.tabs.map((tab, index) => {
                return <Tab tab={tab} key={index}/>
            })}
        </div>
    )
}

export default NavWrapper;