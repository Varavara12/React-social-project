import React from 'react';
import clock from '../../../../image/clock.png'
import icon8 from '../../../../image/icon8.png'
import icon9 from '../../../../image/icon9.png'
import liked from '../../../../image/liked.png'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBookmark, faEnvelope, faHeart, faCommentAlt, faEye} from "@fortawesome/free-solid-svg-icons"

import s from './Post.module.css';

const Post = (props) => {
    
  return(
          <div className={s.posts}>

                   <div  className={s.item}>
                      <div className={s.post_topbar}>
                          <div className={s.usy_dt}>
                              <img src="http://gambolthemes.net/workwise-new/images/resources/us-pic.png" alt=""/>
                              <div className={s.usy_name}>
                                  <h3>Vitalii Kropotkin</h3>
                                  <span>
                                           <img src={clock} alt="clock"/>
                                           3 min ago
                                       </span>
                              </div>
                          </div>
                          <div className={s.epi_sec}>
                              <ul className={s.descp}>
                                  <li>
                                      <img src={icon8} alt="icon8"/>
                                      <span>Epic Coder</span>
                                  </li>
                                  <li>
                                      <img src={icon9} alt="icon9"/>
                                      <span>Ukraine</span>
                                  </li>
                              </ul>
                              <ul className={s.bk_links}>
                                  <li>
                                      <NavLink to='#'>
                                          <FontAwesomeIcon className={s.faBookmark} icon={faBookmark}/>
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink to='#'>
                                          <FontAwesomeIcon className={s.faBookmark} icon={faEnvelope}/>
                                      </NavLink>
                                  </li>
                              </ul>
                          </div>
                          <div className={s.job_descp}>
                              <h3>Senior Wordpress Developer</h3>
                              <ul className={s.job_dt}>
                                  <li>
                                      <NavLink to='#'>Resume</NavLink>
                                  </li>
                                  <li>
                                      <span>$30 / hr</span>
                                  </li>
                              </ul>
                              <p>
                                  {props.post}
                              </p>
                              <ul className={s.skill_tags}>
                                  <li><span>HTML</span></li>
                                  <li><span>JAVASCRIPT</span></li>
                                  <li><span>CSS</span></li>
                                  <li><span>REACT</span></li>
                                  <li><span>WORDPRESS</span></li>
                              </ul>
                          </div>
                          <div className={s.job_status_bar}>
                               <ul className={s.like_com}>
                                   <li>
                                       <button> <FontAwesomeIcon icon={faHeart}/> Like</button>
                                       <img src={liked} alt="liked"/>
                                       <span>{props.likesCount}</span>
                                   </li>
                                   <li>
                                       <NavLink to='#'>
                                           <FontAwesomeIcon className={s.faCommentAlt} icon={faCommentAlt}/>
                                           Comment 15
                                       </NavLink>
                                   </li>
                               </ul>
                              <div className={s.views}>
                                    <NavLink to='#'>
                                           <FontAwesomeIcon className={s.faCommentAlt} icon={faEye}/>
                                           Views {props.views}
                                       </NavLink>
                              </div>
                          </div>

                      </div>
                  </div>

          </div>
  );
};

export default Post;