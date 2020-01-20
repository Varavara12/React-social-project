import React from "react";
import {connect} from "react-redux";
import {setDialogsUsersAC} from "../../../redux/dialogsUser-reducer";
import DialogItem from "./DialogsItem";

let mapStateToProps = (state) => {
    return {
          dialogsUser: state.dialogUsersPage.dialogsUser
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
         setDialogsUsers: (dialogsUser) =>{
             dispatch(setDialogsUsersAC(dialogsUser))
         }
    }
};

const DialogItemContainer = connect (mapStateToProps, mapDispatchToProps) (DialogItem);

export default DialogItemContainer