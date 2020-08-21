import React, {useState, Fragment} from "react";
import {buttonPropType} from "./../../Types/Types";
import "./Button.css";

const Button : React.FC<buttonPropType> = ({className, action, value}) => {

    return (
        <Fragment>
                <button className="button" id={className} onClick={action}>{value}</button>
        </Fragment>
    )
}

export default Button;