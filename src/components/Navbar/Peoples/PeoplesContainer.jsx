import React from 'react';
import {connect} from "react-redux";
import Peoples from "./Peoples";

let mapStateToProps = (state) => {
    return {
          UserPage: state.UserPage.users
    }
};
let PeoplesContainer = connect (mapStateToProps) (Peoples);

export default PeoplesContainer