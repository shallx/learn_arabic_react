import React from "react";
import classes from './Button.module.css';

const Button = (props) => (
    <button 
        className={[classes.Button, classes[props.btnType]].join(' ')}
        style = {{
            display: 'flex',
        alignItems: 'center',
        padding: '6px 24px',
        borderRadius: '30px',
        transition: 'all 0.3s',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor: 'transparent',
        color: "#8f5eff",
        borderColor: "#8f5eff",
        fontSize: '20px',
        fontWeight: 500,
        textTransform: 'none',
        }}
        onClick={props.clicked}
        disable={props.disabled}
    >
        {props.children}
    </button>
);

export default Button;
