import React from "react";
import "../Project/style.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
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

    return (
        <main className="projetos">
            <h2>Meus Projetos</h2>

            <li className={`li-${"e-commerce"}`}>
                <p className="inline">
                    <a
                        className={"e-commerce"}
                        href={"e-commerce-gusrot.vercel.app"}
                        target="blank"
                    >
                        <u>{"e-commerce"}</u>
                        {"🏪"}
                    </a>
                </p>{" "}
                <p className="inline2">
                    {" "}
                    <a
                        href={"https://github.com/GusRot/e-commerce"}
                        target="blank"
                    >
                        {" "}
                        Descrição{" "}
                    </a>
                </p>
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/So8afPRb9TU"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </li>

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
                    <button>Próxima Página</button>
                </Link>
                <span>pag 1 / 3</span>
            </div>
        </main>
    );
}
