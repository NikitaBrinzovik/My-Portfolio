import React from "react";
import style from './NavContacts.module.css';

export function NavContacts() {
    return (
        <div className={style.navCont}>
            <h3 className={style.myName}>Kuznetsov Nikita</h3>
            <div className={style.contactsBlock}><a href="Git">Git  </a>
                <a href="LinkedIn">LinkedIn  </a>
                <a href="Self phone">Self phone  </a>
                <a href="Telegram">Telegram  </a>
                {/*<a href=""></a>*/}</div>
            <div className={style.rights}>© 2021 abra-kadabra, All Rights Reserved.</div>

        </div>
    );
}

