import React from "react";
import Project from "./Project";
import "./Project/style.css";
import { Link } from "react-router-dom";

export default function Projects() {
    const project = [
        {
            name: {
                name: "Memory Game",
                emoji: "🙈",
                class: "memory-game",
            },
            repository: "https://github.com/GusRot/Memory-Game",
            website: "https://gusrot.github.io/Memory-Game/",
            iframe: "rNzJYOP",
            result: "js%2Cresult",
        },
        {
            name: {
                name: "Rotta Eats",
                emoji: "🍕",
                class: "rotta-eats",
            },
            repository: "https://github.com/GusRot/Food-eats",
            website: "https://gusrot.github.io/Food-eats/",
            iframe: "KKvXZEZ",
            result: "js%2Cresult",
        },
        {
            name: {
                name: "Curriculo Interativo",
                emoji: "📑",
                class: "curriculo",
            },
            repository: "https://github.com/GusRot/Curriculo-Interativo",
            website: "https://gusrot.github.io/Curriculo-Interativo/",
            iframe: "OJjmqdR",
            result: "js%2Cresult",
        },
        {
            name: {
                name: "RottaFlix",
                emoji: "🎬",
                class: "rottaflix",
            },
            repository: "https://github.com/GusRot/RottaFlix---Alura-Challenge",
            website: "https://gusrot.github.io/RottaFlix---Alura-Challenge/",
            iframe: "qBjoEEG",
            result: "js%2Cresult",
        },
    ];

    return (
        <main className="projetos">
            <h2>Meus Projetos</h2>
            <ul id="style">
                {project.map((proj) => (
                    <Project
                        key={proj.iframe}
                        name={proj.name}
                        repository={proj.repository}
                        website={proj.website}
                        iframe={proj.iframe}
                        result={proj.result}
                    />
                ))}
            </ul>
            <Link to="/pag2">
                <button>Próxima Página</button>
            </Link>
        </main>
    );
}
