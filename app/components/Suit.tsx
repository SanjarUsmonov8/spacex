"use client";

import { useState } from "react";

export default function SuitHotspots() {
  const [activeDot, setActiveDot] = useState<number | null>(null);

  // ADJUST POSITION COORDINATES HERE
  const dotsData = [
    {
      id: 1,
      top: "25%",  
      left: "48%", 
      headline: "HELMET & VISOR DESIGN",
      info: "Anti-glare visor system with custom dynamic tracking layers and integrated pressure sealing management specs.",
    },
    {
      id: 2,
      top: "52%",
      left: "50%",
      headline: "CHEST INTERFACE PLATFORM",
      info: "Central hub managing primary vital telemetry feeds, core environmental controls, and umbilical systems connections.",
    },
    {
      id: 3,
      top: "75%",
      left: "72%",
      headline: "MANUAL ARTICULATION GLOVES",
      info: "Custom fabricated materials offering high-dexterity manipulation over standard internal touchscreen display control interfaces.",
    },
  ];

  return (
    /* ENLARGED BASE CONTAINER: Fits the full screen viewport height now */
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* IMAGE CONTAINER: Full-size layout scaling */}
      <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
        <img 
          src="https://www.spacex.com/assets/images/human-spaceflight/home/the-suit-new.png" 
          alt="SpaceX Suit Layout Canvas" 
          className="w-full h-full object-contain select-none"
        />

        {/* LOOP HOTSPOT DOTS */}
        {dotsData.map((dot) => (
          <div
            key={dot.id}
            className="absolute z-20"
            style={{ top: dot.top, left: dot.left }}
          >
            {/* FLAT GRAY MINIMAL DOT (NO GLOW, NO PULSE) */}
            <button
              onClick={() => setActiveDot(activeDot === dot.id ? null : dot.id)}
              className="group flex h-4 w-4 items-center justify-center rounded-full bg-zinc-600 border border-zinc-500 hover:bg-zinc-400 hover:border-zinc-300 transition-all shadow-md active:scale-95"
            >
              {/* Core inner pinpoint */}
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 group-hover:bg-zinc-950"></span>
            </button>

            {/* MINIMALIST DARK INDUSTRIAL POPUP (NO COLORS) */}
            {activeDot === dot.id && (
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-64 bg-zinc-950 border border-zinc-800 rounded-sm p-4 shadow-2xl text-white z-30 animate-fadeIn">
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="font-mono font-bold text-xs text-zinc-100 uppercase tracking-wider">
                    {dot.headline}
                  </h4>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveDot(null); }} 
                    className="text-zinc-600 hover:text-zinc-300 text-sm font-mono leading-none"
                  >
                    ×
                  </button>
                </div>
                <div className="h-[1px] w-full bg-zinc-800 mb-2" />
                <p className="text-[11px] text-zinc-400 font-sans font-normal normal-case leading-relaxed">
                  {dot.info}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 5px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
}