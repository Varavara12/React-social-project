import React from 'react';
import s from './Peoples.module.css';
import Categories from "./Categories/Categories";
import Users from "./Users/Users";

const Peoples = (props) => {

    let userElements = props.state.map((user) => <Users name={user.name} id={user.id} src={user.src}/>);
    return (
        <div className={s.people}>
            <Categories/>
            {userElements}
        </div>
    );
};

export default Peoples