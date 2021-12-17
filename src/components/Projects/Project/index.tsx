import React from "react";
import { ProjectProps } from "../../Types";
import "./style.css";

export default function Project({
    name,
    repository,
    iframe,
    website,
    result,
}: ProjectProps) {
    return (
        <li className={`li-${name.class}`}>
            <p className="inline">
                <a className={name.class} href={website} target="blank">
                    <u>{name.name}</u>
                    {name.emoji}
                </a>
            </p>{" "}
            <p className="inline2">
                {" "}
                <a href={repository} target="blank">
                    {" "}
                    Descrição{" "}
                </a>
            </p>
            <iframe
                title={iframe}
                src={`https://codepen.io/gusrot/embed/${iframe}?default-tab=${result}&theme-id=dark"&zoom=0.5`}
                loading="lazy"
            >
                See the Pen{" "}
                <a href={`https://codepen.io/gusrot/pen/${iframe}`}>
                    {name.name}
                </a>{" "}
                by GusRot (<a href="https://codepen.io/gusrot">@gusrot</a>) on{" "}
                <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </li>
    );
}
