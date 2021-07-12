import React from "react";
import style from './ContactMe.module.css';

export function ContactMe() {
    return (
        <div className={style.contacts}>
            <h3>Contact me:</h3>
            <form action="xxxxx@mail.ru" method="post" className={style.myForm}>

                <input type="text" id="name" />
                <input type="text" id="email" />
                <textarea name="messageForMe" id="messageForMe" cols="30" rows="10"></textarea>
                <button type="submit" value="SEND" className={style.sendForm}>SEND</button>

            </form>

        </div>
    );
}

