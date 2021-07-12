import React from "react";
import style from './Footer.module.css';
import {NavContacts} from "./navContacts/NavContacts";

export function Footer() {
    return (
        <div className={style.footer}>
            <NavContacts />
        </div>
    );
}

