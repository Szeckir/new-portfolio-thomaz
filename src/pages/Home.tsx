import { HyperText } from "@/components/ui/hyper-text"
import { Search } from 'lucide-react';
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Particles } from "@/components/ui/particles";

function Home() {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);
    const phrases = ["Software Developer", "Software Lover", "Software Addicted"]
    const [phrase, setPhrase] = useState("Software Developer");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % phrases.length; // Cycle through phrases
            setPhrase(phrases[index]);
        }, 4000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="justify-center items-center flex flex-col mt-[25vh]">
            <HyperText duration={3000}>Thomaz Gomes Szeckir</HyperText>

            <div className="mt-2 w-full max-w-[584px] mx-auto flex items-center border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 py-2 px-4 hover:cursor-pointer">
                <Search className="text-gray-500 mr-3" size={20} />
                <div className="flex">
                    <TypingAnimation className="text-sm text-gray-500">{phrase}</TypingAnimation>
                </div>
            </div>
            <Particles
                className="absolute inset-0 z-0"
                quantity={250}
                ease={80}
                color={color}
                refresh
            />
        </div>
    )
}

export default Home
