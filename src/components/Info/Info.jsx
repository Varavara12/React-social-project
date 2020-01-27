import React from 'react';
import s from './Info.module.css';
import {NavLink} from "react-router-dom";
import star from '../../image/star.png'


class NavBar extends React.Component {
    render() {
        return (
            <div className={s.main}>
                <div className={s.ui_block}>
                    <div className={`${s.ui_block_title} ${s.first_title}`}>
                        <h6 className={s.title}>Last Photos</h6>
                    </div>
                    <div className={s.ui_block_content}>
                        <ul className={s.last_photo}>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-photo10-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot11-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot12-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot13-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot14-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot15-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot16-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot17-large.jpg" alt="info"/>
                            </li>
                            <li>
                                <img src="https://html.crumina.net/html-olympus/img/last-phot18-large.jpg" alt="info"/>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className={s.ui_block}>
                    <div className={s.ui_block_title}>
                        <h6 className={s.title}>Blog Posts</h6>
                    </div>
                    <div className={s.ui_block_content9}>
                        <ul>
                            <li>
                                <article className={s.post}>
                                    <NavLink to='#'>
                                        My Perfect Vacations in South America and Europe
                                    </NavLink>
                                    <p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>
                                     <div>
                                         <time className={s.post_date} dateTime='2020-02-26T17:07'>7 hours ago</time>
                                     </div>
                                </article>
                                
                            </li>
                            <li>
                                <article className={s.post}>
                                    <NavLink to='#'>
                                        The Big Experience of Travelling Alone
                                    </NavLink>
                                    <p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>
                                     <div>
                                         <time className={s.post_date} dateTime='2020-02-26T17:07'>March 18th, at 6:52pm</time>
                                     </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={s.ui_block}>
                    <div className={s.ui_block_title}>
                        <h6 className={s.title}>Friends (155)</h6>
                    </div>
                    <div className={s.ui_block_content}>
                        <ul className={s.faved_page}>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar38-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar24-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar36-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar35-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar34-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar33-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar32-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar31-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar30-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar29-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar28-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar27-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar26-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='#'>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar25-sm.jpg" alt="users"/>
                                </NavLink>
                            </li>
                             <li className={s.all_users }>
                                 <NavLink to='#'> +74</NavLink>
                             </li>
                        </ul>
                    </div>
                </div>

                <div className={s.ui_block}>
                    <div className={s.ui_block_title}>
                        <h6 className={s.title}>Favourite Pages</h6>
                    </div>

                        <ul className={s.list}>
                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar41-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>The Marina Bar</NavLink>
                                    <span>Restaurant / Bar</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>
                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar42-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>Tapronus Rock</NavLink>
                                    <span>Rock Band</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>

                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar43-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>Pixel Digital Design</NavLink>
                                    <span>Company</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>

                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar44-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>Thompson’s Custom Clothing Boutique</NavLink>
                                    <span>Clothing Store</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>

                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar45-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>Crimson Agency</NavLink>
                                    <span>Company</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>

                            <li className={s.inline_items}>
                                <div className={s.author_thumb}>
                                    <img src="https://html.crumina.net/html-olympus/img/avatar46-sm.jpg" alt="author"/>
                                </div>
                                <div className={s.notification}>
                                      <NavLink to='#'>Mannequin Angel</NavLink>
                                    <span>Clothing Store</span>
                                </div>
                                <span className={s.icon}>
                                    <NavLink to='#'><img src={star} alt=""/></NavLink>
                                </span>
                            </li>
                            
                        </ul>
                    
                </div>

            </div>
        );
    }
}



export default NavBar