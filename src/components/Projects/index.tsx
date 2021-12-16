import React from "react";
import Project from "./Project";
import "./Project/style.css";

export default function Projects() {
    const project = [
        {
            name: {
                name: "Memory Game",
                emoji: "🙈",
                class: "memory-game",
            },
            repository: "https://github.com/GusRot/Memory-Game",
            website: "https://github.com/GusRot/Memory-Game",
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
            <ul>
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
        </main>
    );
}
