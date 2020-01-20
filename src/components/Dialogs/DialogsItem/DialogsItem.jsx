import React from "react";
import s from './DialogsItem.module.css'


const DialogItem = (props) => {
       if(props.dialogsUser.length === 0){
          props.setDialogsUsers( [
            {id: 1, name: 'Vitalik Kropotkin', message: 'Vestibulum ac diam..', time: '13:43 PM', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {id: 2, name: 'Nikita Voskov', message: 'Nulla quis lorem ut..', time: '10:32 PM', src: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon8.png'},
            {id: 3, name: 'Igor Krasilia', message: 'Praesent sapien massa.', time: '22:09 PM', src: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon6.png'},
            {id: 4, name: 'Andrey Belych', message: 'Convallis a pellente...', time: '9:12 PM', src: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon12.png'},
            {id: 5, name: 'Alexa Braun',  message: 'Vivamus magna just..', time: '16:23 PM', src: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon7.png'}
        ])
      }
    return (
        <div className={s.dialog + ' ' + s.active}>
            <ul className={s.messages_list}>
                {
                    props.dialogsUser.map( d => <li key={d.id}>
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
};

export default DialogItem