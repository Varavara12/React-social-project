import React from "react";
import s from './Users.module.css'

const Users = (props) => {
      if(props.users.length === 0){
          props.setUsers([
        {id: 1, photoUrl: 'https://html.crumina.net/html-olympus/img/author-main1.jpg', followed: false, fullName: 'Vitalii', status: 'I am a boss', location: {city: 'Kharkov', country: 'Ukraine'} },
        {id: 2, photoUrl: 'https://html.crumina.net/html-olympus/img/author-main1.jpg', followed: true, fullName: 'Patryk', status: 'I am a boss too', location: {city: 'Szczecin', country: 'Poland'} },
        {id: 3, photoUrl: 'https://html.crumina.net/html-olympus/img/author-main1.jpg', followed: false, fullName: 'Igor', status: 'I am a boss yes', location: {city: 'Kharkov', country: 'Ukraine'} },

    ])
      }

  return (
      <div>
          {
              props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() =>{props.unfollow(u.id)}}>unfollow</button> : <button onClick={() =>{props.follow(u.id)}}>follow</button> }

                        </div>
                    </span>
                  <span>
                      <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                      </span>
                  </span>
              </div>)
          }
      </div>
  )
};

export default Users