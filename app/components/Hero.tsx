"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 12, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let h = prev.hours;
        let m = prev.minutes;
        let s = prev.seconds - 1;

        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { return { hours: 12, minutes: 12, seconds: 12 }; }

        return { hours: h, minutes: m, seconds: s };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-black">
      
      {/* Background Video */}
      <video 
        src="/spacex.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-85"
      />

      {/* Subtle Vignette Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* 
          Positioned at Bottom Left:
          - justify-end: pushes content to the bottom
          - items-start: aligns content to the left
      */}
      <div className="absolute inset-0 flex flex-col justify items-start p-10 pt-100 text-white z-10 max-w-4xl">
        
        {/* 1. MINIMAL TIMER (Now on top of the heading) */}
        <div className="flex gap-1.5 text-xl md:text-2xl font-light text-slate-300 tracking-wider mb-1 ">
          <span>{formatTime(timeLeft.hours)}</span>
          <span className="text-slate-500">:</span>
          <span>{formatTime(timeLeft.minutes)}</span>
          <span className="text-slate-500">:</span>
          <span className="text-slate-300">{formatTime(timeLeft.seconds)}</span>
          
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-slate-500 self-end mb-1 ml-2">
            T-MINUS
          </span>
        </div>

        {/* 2. THE TEXT HERO */}
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-tight leading-none drop-shadow-md -pt-50">
          Starship`s Thirteenth Flight Test
        </h1>
        <div className="pt-20"><a href="/starship"><div className="bg-black/60 w-25 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >WATCH →</h1></div></a></div>
      </div>
    </div>
  );
}