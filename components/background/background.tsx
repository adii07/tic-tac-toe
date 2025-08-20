"use client";

import React, { useEffect, useRef } from "react";
import './background.css';
const BackgroundXO: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const symbols = 80; // number of X and O
        for (let i = 0; i < symbols; i++) {
            const span = document.createElement("span");
            span.className = "symbol";
            span.textContent = Math.random() > 0.5 ? "X" : "O";

            // random position
            span.style.top = Math.random() * 100 + "vh";
            span.style.left = Math.random() * 100 + "vw";

            // random size
            span.style.fontSize = 20 + Math.random() * 30 + "px";

            // animation timings
            const twinkleDelay = Math.random() * 5 + "s";
            const twinkleDuration = 2 + Math.random() * 3 + "s";
            const rotateDuration = 6 + Math.random() * 6 + "s";
            const driftDuration = 10 + Math.random() * 20 + "s";

            // random drift direction
            const dx = (Math.random() - 0.5) * 40; // -20 to +20 px
            const dy = (Math.random() - 0.5) * 40;
            span.style.setProperty("--dx", `${dx}px`);
            span.style.setProperty("--dy", `${dy}px`);

            span.style.animation = `
        twinkle ${twinkleDuration} linear infinite ${twinkleDelay}, 
        spin ${rotateDuration} linear infinite,
        drift ${driftDuration} ease-in-out infinite alternate
      `;

            container.appendChild(span);
        }

        return () => {
            container.innerHTML = "";
        };
    }, []);

    return <div className="background-xo" ref={containerRef}></div>;
};

export default BackgroundXO;
