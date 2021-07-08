import React from "react";
import style from './Nav.module.css';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href="Главное">Главное</a>
            <a href="Технологии">Технологии</a>
            <a href="Проекты">Проекты</a>
            <a href="Контакты">Контакты</a>
            {/*<a href=""></a>*/}
        </div>
    );
}

