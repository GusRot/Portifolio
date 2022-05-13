import React from "react";
import { ProjectProps } from "../../Types";

export default function ProjectVideos({
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
                width="100%"
                height="450"
                src={iframe}
                title={iframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </li>
    );
}
