
// eslint-disable-next-line no-unused-vars
import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const DialogsContainer = connect( mapStateToProps) (Dialogs);
export default DialogsContainer