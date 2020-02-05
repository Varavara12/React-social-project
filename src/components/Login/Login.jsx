import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requireField} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {NavLink, Redirect} from "react-router-dom";
import s from "./Login.module.css"
import login_bg from "../../image/login-bg.jpg"
import logo from "../../image/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from '@fortawesome/fontawesome-free-brands';

const LoginForm = ({error, handleSubmit, captchaUrl}) => {
      return (
          <form onSubmit={handleSubmit}>  {/*handleSubmit доверяем обработку событий*/}
                <div className={s.form_group}>
                      <Field placeholder={"Login"} name={"email"} component={Input} validate={[requireField]}/>
                </div>
                <div className={s.form_group}>
                      <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} validate={[requireField]}/>
                </div>
                <div className={s.remembe}>
                      <Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[]}/> remember me
                </div>
              {captchaUrl && <img src={captchaUrl} alt="captchaUrl"/>   }
              {captchaUrl && <div className={s.form_group}> <Field component={Input} placeholder={"Symbol from image"} name={"captcha"} type={"text"} validate={[requireField]} /> </div>}
              {
                  error && <div className={s.formSummeruError}>
                      {error}
                  </div>
              }
                <div>
                      <button className={s.login_btn}>Login Now</button>
                </div>
          </form>
      )
};

/*Контейнерная компонента образуещияся с помощью HOC*/
const LoginReduxForm = reduxForm({
    form: 'login'  /*уникальное строковое имя*/
}) (LoginForm);

const Login = (props) => {
       const onSubmit =(formData) => {
              props.login(formData.email, formData.password, formData.rememberMe, formData.captcha )
       };
       if(props.isAuth) {
           return <Redirect to={"/profile"}/>
       }
      return (
          <div className={s.login_register_bg}>
              <div className={s.row} >
                  <div className={s.col}>
                      <div className={s.lg_left}>
                          <img className={s.img_bg} src={login_bg} alt="login_bg"/>
                          <div className={s.wrapper_left}>
                              <div className={s.main_left}>
                                  <img src={logo} alt="logo"/>
                              </div>
                              <div className={s.lr_text}>
                                  <h2>Login Now</h2>
                                  <p>Loremail Multiple Social Network</p>
                                  <p>React application</p>
                              </div>
                          </div>
                          <div className={s.by}>
                                   <p>by Vitalii Kropotkin React developer </p>
                              </div>

                      </div>
                  </div>
                  <div className={s.col}>
                      <div className={s.lr_right}>
                          <div className={s.social_logins}>
                              <button className={s.social_f_btn}>
                                  <FontAwesomeIcon className={s.fa} icon={faFacebook}/>
                                  Continue with facebook
                              </button>
                              <button className={`${s.social_f_btn} ${s.google_btn}`}>
                                    <FontAwesomeIcon className={s.fa} icon={faGoogle}/>
                                  Continue with Google
                              </button>
                          </div>
                          <div className={s.or}>Or</div>
                          <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
                          <div className={s.forgot_link}>
                              <NavLink to={"#"}>Forgot Password? </NavLink>
                          </div>
                          <div className={s.regstr_link}>
                              Don’t have an account?
                              <NavLink to={"#"}>Register Now </NavLink>
                          </div>
                      </div>

                  </div>

              </div>

          </div>
      )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login}) (Login)