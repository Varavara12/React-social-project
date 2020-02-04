import React from "react";
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";




const Users = ( {currentPage, totalUsersCount, pageSize, onPageChanged,  ...props}) => {

    return (
            <div className={s.notifications_list}>
                <h3 className={s.h3}>People</h3>
                <div className={s.users}>
                    <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
                    {/*<div>
                        {pages.map(p => {
                            return <span key={p} onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && s.seledtedPage}>{p}</span>
                        })}
                    </div>*/}
                    {
                        props.users.map(u => <User users={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} key={u.id} />
                          )
                    }
                </div>

            </div>
        )
};

export default Users