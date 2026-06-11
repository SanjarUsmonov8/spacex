"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. If scrolling down, hide it. If scrolling up, show it.
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setVisible(false); // Scrolling Down
            } else {
                setVisible(true);  // Scrolling Up
            }

            // 2. Track the position for the next movement
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`flex fixed top-0 left-0 right-0 z-50 py-3 px-14 items-center justify-between transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
                } ${
                /* SHADOW LOGIC: If scrolled down past 10px, add a dark background blur + shadow */
                lastScrollY > 10
                    ? "bg-gradient-to-b from-zinc-900 to-transparent h-20"
                    : "bg-transparent"
                }`}
        >
           <Link href="/"><img className="h-7 invert" src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png" alt="" /></Link>

            <div className="text-zinc-300 text-sm font-mono font-semibold flex justify-around w-[800px] uppercase">

                {/* CATEGORY 1: VEHICLES */}
                {/* Added pb-4 to create an invisible hover bridge between the text and the dropdown */}
                <div className="relative group pb-4 pt-2 cursor-pointer">
                    <h1>Vehicles</h1>

                    {/* Dropdown Menu Box */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-gradient-to-b from-black/80 to-transparent -mt-16 pt-14 p-4 w-30 ">
                        <ul className="flex flex-col gap-3 normal-case text-white font-semibold font-normal text-x1 uppercase">
                            {/* You can now change these plain text <li> items into standard links */}
                            <li className="hover:text-white transition-colors"><a href="/starship">starship</a></li>
                            <li className="hover:text-white transition-colors"><a href="/dragon">dragon</a></li>
                            <li className="hover:text-white transition-colors"><a href="/falcon9">falcon 9</a></li>
                            <li className="hover:text-white transition-colors"><a href="/falconheavy">falcon heavy</a></li>
                        </ul>
                    </div>
                </div>

                {/* CATEGORY 2: HUMAN SPACEFLIGHT */}
                <div className="relative group pb-4 pt-2 cursor-pointer">
                    <h1>Human Spaceflight</h1>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-gradient-to-b from-black/80 to-transparent -mt-16 pt-14 p-4 min-w-[160px]">
                        <ul className="flex flex-col gap-3 normal-case text-white font-semibold font-normal text-x1 uppercase">
                            <li className="hover:text-white transition-colors"><a href="/hs">overview</a></li>
                            <li className="hover:text-white transition-colors"><a href="/space-station">Space Station</a></li>
                            <li className="hover:text-white transition-colors"><a href="/starship">earth orbit</a></li>
                            <li className="hover:text-white transition-colors"><a href="/starship">the moon</a></li>
                            <li className="hover:text-white transition-colors"><a href="/marsp">mars & beyond</a></li>
                        </ul>
                    </div>
                </div>

                {/* CATEGORY 3: STARLINK */}
                <a href="https://starlink.com/" target="_blank" rel="noopener noreferrer" className="pt-2 pb-4">
                    <h1>starlink</h1>
                </a>


                {/* CATEGORY 4: STARSHIELD */}

                <a href="https://www.spacex.com/starshield/" target="_blank" rel="noopener noreferrer" className="pt-2 pb-4">
                    <h1>starshield</h1>
                </a>


                {/* NO DROPDOWNS FOR EXTERNAL LINKS */}
                <div className="relative group pb-4 pt-2 cursor-pointer">
                    <h1>xai</h1>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-gradient-to-b from-black/80 to-transparent -mt-16 pt-14 p-4 w-30">
                        <ul className="flex flex-col gap-3 normal-case text-white font-semibold font-normal text-x1 uppercase">
                            <li className="hover:text-white transition-colors"><a href="https://x.ai/">grok</a></li>
                            <li className="hover:text-white transition-colors"><a href="https://grokipedia.com/">grokipedia</a></li>
                            <li className="hover:text-white transition-colors"><a href="https://x.com/">𝕏</a></li>
                        </ul>
                    </div>
                </div>

                <a href="https://terafab.ai/" target="_blank" rel="noopener noreferrer" className="pt-2 pb-4">
                    <h1>Terafab</h1>
                </a>

                {/* CATEGORY 5: COMPANY */}
                <div className="relative group pb-4 pt-2 cursor-pointer">
                    <h1>Company</h1>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-gradient-to-b from-black/80 to-transparent -mt-16 pt-14 p-4 w-25 ">
                        <ul className="flex flex-col gap-3 normal-case text-white font-semibold font-normal text-x1 uppercase">
                            <li className="hover:text-white transition-colors"><a href="/about">mission</a></li>
                            <li className="hover:text-white transition-colors"><a href="/careers">Careers</a></li>
                            <li className="hover:text-white transition-colors"><a href="/starship">updates</a></li>
                            <li className="hover:text-white transition-colors"><a href="/starship">content</a></li>
                        </ul>
                    </div>
                </div>

                {/* CATEGORY 6: SHOP */}
                <div className="relative group pb-4 pt-2 cursor-pointer">
                    <h1>Shop</h1>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-gradient-to-b from-black/80 to-transparent -mt-16 pt-14 p-4 w-20">
                        <ul className="flex flex-col gap-3 normal-case text-white font-semibold font-normal text-x1 uppercase">
                            <li className="hover:text-white transition-colors"><a href="/apparel">spacex</a></li>
                            <li className="hover:text-white transition-colors"><a href="/starship">xai</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="text-zinc-300 font-mono border border-gray-400 rounded-sm p-2 pr-20 h-7 flex items-center w-[280px] text-xs uppercase">
                <h1>Upcoming Launches</h1>
            </div>
        </div>
    );
}