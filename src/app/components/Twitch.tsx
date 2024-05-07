"use client";

import React, { useEffect } from "react";

interface TwitchEmbedProps {
    channel: string;
}

const TwitchEmbed: React.FC<TwitchEmbedProps> = ({ channel }) => {
    useEffect(() => {
        // Ajout du script seulement si nécessaire
        const addTwitchScript = () => {
            const scriptId = "twitch-embed-script";

            if (!document.getElementById(scriptId)) {
                const script = document.createElement("script");
                script.id = scriptId;
                script.src = "https://embed.twitch.tv/embed/v1.js";
                script.async = true;
                script.onload = () => initTwitchEmbed();
                document.body.appendChild(script);
            } else {
                initTwitchEmbed();
            }
        };

        const initTwitchEmbed = () => {
            const embedContainer = document.getElementById("twitch-embed");
            if (embedContainer) {
                embedContainer.innerHTML = "";
            }
            // S'assurer que l'élément est présent dans le DOM
            if (document.getElementById("twitch-embed")) {
                if (window.Twitch && window.Twitch.Embed) {
                    new window.Twitch!.Embed("twitch-embed", {
                        width: "100%",
                        height: "100%",
                        channel: channel,
                        layout: "video-with-chat",
                        parent: ["localhost"],
                    });
                } else {
                    console.error("Twitch library is not loaded.");
                }
            } else {
                console.error("Twitch player element not found");
            }
        };

        addTwitchScript();

        return () => {
            // Nettoyer le script et le contenu lors du démontage
            const embedContainer = document.getElementById("twitch-embed");
            if (embedContainer) {
                embedContainer.innerHTML = "";
            }
        };
    }, [channel]); // S'assurer que le code est exécuté à chaque changement de canal

    return (
        <div
            className="mx-5 py-5"
            id="twitch-embed"
            style={{ width: "1920px", height: "1080px" }}
        />
    );
};

export default TwitchEmbed;
