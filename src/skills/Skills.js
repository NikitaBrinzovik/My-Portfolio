import React from "react";
import style from "./Skills.module.css";
import styleContainer from "../commen/styles/Container.module.css"
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        title="JS"
                        description="11ugahufidghsduifghsdfuhgsdiuf ghdgfhdfghdfghdfgh hdghdghdhdfgh"
                    />
                    <Skill
                        title="СSS"
                        description="222ugahufidghsduifghsdfuhgsdiuf ghdgfhdfghdfghdfgh hdghdghdhdfgh"
                    />
                    <Skill
                        title="HTML"
                        description="333ugahufduifghsdfuhgsdiuf ghdgfhdfghdfghdfgh hdghdghdhdfgh"
                    />
                </div>
            </div>

        </div>
    );
}