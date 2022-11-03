import React from "react";
import "../Project/style.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ProjectVideos from "../Videos";
import ProjectReact from "./ProjectReact";

export default function ProjectsReact() {
    const react = [
        {
            name: {
                name: "challenge-webjump",
                emoji: "🏢",
                class: "webjump",
            },
            repository: "https://github.com/GusRot/clothes-ecommerce",
            website: "clothes-ecommerce.vercel.app",
            iframe: "clothes-ecommerce-tsryp",
        },
        {
            name: {
                name: "dt-money",
                emoji: "🤑",
                class: "dt-money",
            },
            repository: "https://github.com/GusRot/DTMoney",
            website: "dt-money-gusrot.vercel.app",
            iframe: "intelligent-banach-kwln7",
        },
        {
            name: {
                name: "To do List",
                emoji: "💪",
                class: "to-do",
            },
            repository: "https://github.com/GusRot/To-Do-List",
            website: "https://to-do-list-gusrot.vercel.app/",
            iframe: "to-do-list-5bnfq",
        },
        {
            name: {
                name: "Travel",
                emoji: "⛺",
                class: "travel",
            },
            repository: "https://github.com/GusRot/Travel-Places",
            website: "travel-places.vercel.app",
            iframe: "vigorous-nightingale-gdqfl",
        },
        {
            name: {
                name: "Forms",
                emoji: "⌨️",
                class: "forms",
            },
            repository: "https://github.com/GusRot/Form-Data",
            website: "form-data-gusrot.vercel.app",
            iframe: "cold-dust-yj339",
        },
    ];

    const video = [
        {
            name: {
                name: "e-commerce",
                emoji: "🏢",
                class: "e-commerce",
            },
            repository: "https://github.com/GusRot/e-commerce",
            website: "https://github.com/GusRot/e-commerce",
            iframe: "https://www.youtube.com/embed/So8afPRb9TU",
        },
        {
            name: {
                name: "magento-styles",
                emoji: "⚔",
                class: "magento-styles",
            },
            repository: "https://github.com/GusRot/Magento-Styles",
            website: "https://github.com/GusRot/Magento-Styles",
            iframe: "https://www.youtube.com/embed/vqYf1iDuWT0",
        },
        {
            name: {
                name: "magento-theme",
                emoji: "⛟",
                class: "magento-theme",
            },
            repository: "https://github.com/GusRot/Magento-theme",
            website: "https://github.com/GusRot/Magento-theme",
            iframe: "https://www.youtube.com/embed/91P7wj8-Lzw",
        },
    ];

    return (
        <main className="projetos">
            <h2>My Projects</h2>

            <ul>
                {video.map((proj) => (
                    <>
                        <ProjectVideos
                            name={proj.name}
                            repository={proj.repository}
                            website={proj.website}
                            iframe={proj.iframe}
                            result=""
                            key={proj.iframe}
                        />
                    </>
                ))}
            </ul>

            <ul id="style">
                <br></br>
                {react.map((proj, index) => (
                    <Fade
                        direction={index % 2 === 0 ? "left" : "right"}
                        damping={0.15}
                        duration={250}
                        key={proj.iframe}
                    >
                        <ProjectReact
                            name={proj.name}
                            repository={proj.repository}
                            website={proj.website}
                            iframe={proj.iframe}
                            result=""
                        />
                    </Fade>
                ))}
            </ul>
            <div className="paginations">
                <Link to="/pag2">
                    <button>Next Page</button>
                </Link>
                <span>pag 1 / 3</span>
            </div>
        </main>
    );
}
