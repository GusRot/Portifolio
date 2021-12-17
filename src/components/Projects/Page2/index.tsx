import React from "react";
import { Link } from "react-router-dom";
import Project from "../Project";
import "../Project/style.css";
import { Fade } from "react-awesome-reveal";

export default function Page2() {
    const projectPag2 = [
        {
            name: {
                name: "Barbearia",
                emoji: "🧔",
                class: "barbearia",
            },
            repository: "https://github.com/GusRot/HelloWorld---Barbearia",
            website:
                "https://gusrot.github.io/HelloWorld---Barbearia/index.html",
            iframe: "VwWgXwV",
            result: "html%2Cresult",
        },
        {
            name: {
                name: "Mentalist",
                emoji: "🧠",
                class: "mentalist",
            },
            repository: "https://github.com/GusRot/Mentalist---Imersao-Dev",
            website: "https://gusrot.github.io/Mentalist---Imersao-Dev/",
            iframe: "LYLJLyZ",
            result: "js%2Cresult",
        },
        {
            name: {
                name: "Readaptação Globo Noticias",
                emoji: "🌎",
                class: "globo",
            },
            repository: "https://github.com/GusRot/Gustavo-Noticias",
            website: "https://gusrot.github.io/Gustavo-Noticias/",
            iframe: "rNzmpba",
            result: "result",
        },
        {
            name: {
                name: "MyInstagram",
                emoji: "📷",
                class: "instagram",
            },
            repository: "https://github.com/GusRot/My-Instagram",
            website: "https://gusrot.github.io/My-Instagram/",
            iframe: "LYjyaYr",
            result: "html%2Cresult",
        },
        {
            name: {
                name: "Cracha de Identificação",
                emoji: "🖖🏻",
                class: "cracha",
            },
            repository: "https://github.com/GusRot/Cracha",
            website: "https://gusrot.github.io/Cracha/",
            iframe: "OJjmGPW",
            result: "html%2Cresult",
        },
    ];

    return (
        <main className="projetos">
            <h2>Meus Projetos</h2>
            <ul id="style">
                {projectPag2.map((proj, index) => (
                    <Fade
                        direction={index % 2 === 0 ? "left" : "right"}
                        damping={0.15}
                        duration={250}
                    >
                        <Project
                            key={proj.iframe}
                            name={proj.name}
                            repository={proj.repository}
                            website={proj.website}
                            iframe={proj.iframe}
                            result={proj.result}
                        />
                    </Fade>
                ))}
            </ul>

            <Link to="/">
                <button>Voltar Página</button>
            </Link>
        </main>
    );
}
