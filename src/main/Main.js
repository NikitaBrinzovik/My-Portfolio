import React from "react";
import style from "./main.module.css";
import styleContainer from "../commen/styles/Container.module.css"

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>Nikita Kuznetsov</h1>
                    <p>
                        <span>Front-end Developer</span>
                    </p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}
