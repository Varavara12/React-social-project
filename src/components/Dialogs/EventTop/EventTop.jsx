import React from "react";
import s from '../../Profile/Profile.module.css'

class EventTop  extends React.Component{
    render() {
        return (
        <div className={s.eventTop}>
            <div className={s.eventTopLeft}><h4>My masseges</h4></div>
            <div className={s.eventTopRight}><h4>Event Title Here</h4></div>
        </div>
    );
    }
}

export default EventTop