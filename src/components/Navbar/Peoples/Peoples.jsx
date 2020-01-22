import React from 'react';
import s from './Peoples.module.css';
import Categories from "./Categories/Categories";
import UserFollowContainer from "./Users/UsersFollowContainer";


class Peoples extends React.Component {
    render() {
        return (
            <div className={s.people}>
                <Categories/>
                <UserFollowContainer/>
            </div>
        );
    }

}

export default Peoples