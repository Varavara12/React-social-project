import React from "react";
import s from './SentMessage.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, requireField} from "../../../utils/validators/validators";

class SentMessage extends React.Component {
      addNewMessage =(values) => {
          this.props.addMessage(values.newMessageText);  /*name={"newMessageText"} применяем интификатор*/
      };
    render() {
        return (
            <div className={s.sent_message}>
                  <AddMessageFormRedux onSubmit={this.addNewMessage} />  {/*Сформированная компонента с помощью HOC*/}
            </div>
        );
    }
}
const  maxLength50 = maxLengthCreator(50);
const addMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.input_group}>
            <div>                                       {/*name={"newMessageText"} интификатор*/}
                <Field placeholder={"Type your message"} name={"newMessageText"} component={Input} validate={[requireField, maxLength50]} />
            </div>
             <span className={s.btn}>
                 <button className={s.btn_button}>Send</button>
             </span>

        </form>
    )
};
                                   /*form: "dialogAddMessageForm определяем что будет в state*/
const AddMessageFormRedux = reduxForm ({form: "dialogAddMessageForm"}) (addMessageForm);

export default SentMessage