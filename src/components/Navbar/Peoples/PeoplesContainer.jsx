import React from 'react';
import {connect} from "react-redux";
import Peoples from "./Peoples";

let mapStateToProps = (state) => {
    return {
          followPage: state.followPage.users
    }
};
let PeoplesContainer = connect (mapStateToProps) (Peoples);

export default PeoplesContainer