import React from "react";
import classes from './ImageCard.module.css';

function ImageCard(props) {
    let pronounciation = props.showPronounciation ? <p>{props.alphabet.pronounciation}</p> : null;
    return (
        <div onClick={props.clicked}>
            <img height="250px" width="250px" src={"./images/" + props.alphabet.path + ".png"} alt="label" />
            <span>{pronounciation}</span>
        </div>
    );
}

export default ImageCard;