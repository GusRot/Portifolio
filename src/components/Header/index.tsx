import React from "react";
import "./style.css";

export default function Header() {
    const info = ["Gustavo Lira Rotta", "Front-end Developer"];
    const socials = [
        {
            href: "https://www.linkedin.com/in/gustavo-rotta-6447b0163/",
            src: `https://bn02pap001files.storage.live.com/y4m_Ri3eR6easoEnW3UXmgIQ1WBQzEKn9Zsw8wAMiGXxAeAnw_dxK-sZt8oFaE7BL_vvCiDPicxEiXISPHarldQRQPHitcr93ePugoKk6lrG4flWEegt8rkwuXYbpkviDe87GsleO-o8cO1Jq8yWLZX82oIFBKKWTHLd3Ne0ExQTQtTcNq1GFoqSmEMe1VyG_jz?width=450&height=428&cropmode=none`,
        },
        {
            href: "https://github.com/GusRot",
            src: `https://bn02pap001files.storage.live.com/y4mVC0A3iF0KCRf-zBzqS-BPqgD8cYvrdaz7CrYemGskn9O7TwRRQ01It0M49nC4zNywbVljstasZ_v75Xbsrf8Y9fkeqxAMFJisTy0_8V13jfblNvCXmZUOumpvvMukoMc-jvjwsbcW09-SPw_dfZkq1KDevTOdurOCI_J8aoUPkXjVVGEj9A-7fklnnLfBnUn?width=450&height=428&cropmode=none`,
        },
    ];

    return (
        <header className="intro">
            <div className="perfil-container">
                <div className="perfil-animation"></div>
                <img
                    className="fotoPerfil"
                    src="https://github.com/GusRot.png"
                    alt="foto-de-perfil"
                />
            </div>

            <div className="info-container">
                <div>
                    <h1>{info[0]}</h1>
                    <p>{info[1]}</p>

                    {socials.map((social, index) => (
                        <p key={index + "socials"}>
                            <a href={social.href} target="blank">
                                <img
                                    className="logo"
                                    src={social.src}
                                    alt="midias"
                                />
                            </a>
                        </p>
                    ))}
                    <p className="certification">
                        <a
                            href="https://1drv.ms/b/s!AvtEm98X2cVanssS264BUFuZE7mSLg?e=iF5qDp"
                            target="blank"
                        >
                            Adobe Certified Expert Front-End Developer - Adobe
                            Commerce
                        </a>
                    </p>
                </div>
                <div className="info-resume">
                    <p>
                        <a
                            href="https://gusrot.github.io/Curriculo-Interativo/pages/ingles.html"
                            target="blank"
                        >
                            RESUME
                        </a>
                    </p>
                </div>
            </div>
        </header>
    );
}
