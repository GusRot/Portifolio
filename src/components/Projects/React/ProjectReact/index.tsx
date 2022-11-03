import React from "react";
import { ProjectProps } from "../../../Types";
import "../../Project/style.css";

export default function ProjectReact({
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
                    Description{" "}
                </a>
            </p>
            <iframe
                title={repository}
                src={`https://codesandbox.io/embed/${iframe}?fontsize=14&hidenavigation=1&theme=dark`}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            >
                loading="lazy"
            </iframe>
        </li>
    );
}
