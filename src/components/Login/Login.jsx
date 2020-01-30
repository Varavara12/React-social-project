import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
      return (
          <form onSubmit={props.handleSubmit}>  {/*handleSubmit доверяем обработку событий*/}
                <div>
                      <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                      <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                      <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
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
              console.log(formData)
       };
      return (
          <div>
                <h1>Login</h1>
               <LoginReduxForm onSubmit={onSubmit}/>
          </div>


      )
};

export default Login