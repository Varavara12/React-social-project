import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requireField} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
      return (
          <form onSubmit={props.handleSubmit}>  {/*handleSubmit доверяем обработку событий*/}
                <div>
                      <Field placeholder={"Login"} name={"email"} component={Input} validate={[requireField]}/>
                </div>
                <div>
                      <Field placeholder={"Password"} type={"password"} name={"password"} component={Input} validate={[requireField]}/>
                </div>
                <div>
                      <Field component={Input} name={"rememberMe"} type={"checkbox"} validate={[]}/> remember me
                </div>
              {
                  props.error && <div className={s.formSummeruError}>
                      {props.error}
                  </div>
              }
                <div>
                      <button>Login</button>
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
              props.login(formData.email, formData.password, formData.rememberMe)
       };
       if(props.isAuth) {
           return <Redirect to={"/profile"}/>
       }
      return (
          <div>
                <h1>Login</h1>
               <LoginReduxForm onSubmit={onSubmit}/>
          </div>
      )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login)