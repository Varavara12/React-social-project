import React from "react";
import s from './DialogsItem.module.css'

class DiaelogsItem extends React.Component{
  
      render() {
          return (
        <div className={s.dialog + ' ' + s.active}>
            <ul className={s.messages_list}>
                {
                    this.props.dialogsUser.map( d => <li key={d.id}>
                          <div className={s.details}>
                                <div className={s.img}>
                                    <img src={d.src} alt="logo"/>
                                    <span className={s.msg_status}>

                                    </span>
                                </div>
                                <div className={s.user_info}>
                                     <h3>{d.name}</h3>
                                    <p>{d.message}</p>
                                </div>
                                <span className={s.time}>{d.time}</span>
                          </div>
                    </li>)
                }
            </ul>

        </div>
    );
      }
}

export default DiaelogsItem