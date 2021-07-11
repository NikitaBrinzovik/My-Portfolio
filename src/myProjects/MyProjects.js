import React from "react";
import style from "./MyProjects.module.css";
import styleContainer from "../commen/styles/Container.module.css"
import {Project} from "./project-s/Project";

export function MyProjects() {
    return (
        <div className={style.myProjectsBlock}>
            <div className={ `${styleContainer.container} ${style.myProjectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projectsList}>
                    <Project
                        icon="foto"
                        projectName="Social Network"
                        projectDescription="bla-bla-nla ddguasdghadga"
                        projectLink="https://ru.reactjs.org/docs/hooks-effect.html"
                    />
                    <Project
                        icon="foto"
                        projectName="ToDoList"
                        projectDescription="!!!!! gfdsg bla-bla-nla ddguasdghadga"
                        projectLink="https://ru.reactjs.org/docs/hooks-effect.html"
                    />
                    <Project
                        icon="foto"
                        projectName="ToDoList"
                        projectDescription="!!!!! gfdsg bla-bla-nla ddguasdghadga"
                        projectLink="https://ru.reactjs.org/docs/hooks-effect.html"
                    />
                    <Project
                        icon="foto"
                        projectName="ToDoList"
                        projectDescription="!!!!! gfdsg bla-bla-nla ddguasdghadga"
                        projectLink="https://ru.reactjs.org/docs/hooks-effect.html"
                    />
                </div>


            </div>
        </div>
    );
}