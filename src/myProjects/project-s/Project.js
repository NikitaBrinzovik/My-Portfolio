import React from "react";
import style from "./Project.module.css";

export function Project(props) {

    return (
        <div className={style.projectBlock}>
            <div className={style.icon}>
                {props.icon}
                <button onClick={props.projectLink} className={style.projectButton}> Let's look!</button>
            </div>
            <div className={style.projectName}>{props.projectName}</div>
            <div className={style.projectDescription}>{props.projectDescription}</div>
        </div>
    );
}