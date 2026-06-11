import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function Starship() {
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    const specificItem2 = data.find((item: any) => item.id === 2)


    return (
        <div>
            <Navbar />
            <div className="relative w-full overflow-hidden">
                <div>
                    <img
                        className="object-cover h-full w-full"
                        src="https://www.spacex.com/assets/images/human-spaceflight/mars/mars_hero_d.jpg"
                        alt="Starship Hero"
                    />
                </div>

                {/* THE ANIMATED TEXT CONTAINER:
        - Added standard CSS keyframes inside an inline style tag.
        - The style shifts the box down 40px initially, hides it, and then slides it up over 1.2 seconds.
      */}
                <div
                    className="z-10 absolute inset-0 px-[350px] pt-[320px]"
                    style={{
                        animation: 'slideUpSmooth 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}
                >
                    {/* CSS Animation Keyframes injected right here */}
                    <style>{`
          @keyframes slideUpSmooth {
            from {
              opacity: 0;
              transform: translateY(540px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

                    <h1 className="font-bold text-8xl text-white">MARS & BEYOND</h1>
                    <p className="flex justify-center pt-8 text-white">
                        THE ROAD TO MAKING HUMANITY MULTIPLANETARY
                    </p>
                </div>
            </div>
            <div className="relative w-full overflow-hidden ">
                <div><img className="object-cover w-full h-full " src="https://www.spacex.com/assets/images/human-spaceflight/mars/mars_carousel2_card1_d.jpg" alt="" />
                </div>
                <div className="z-10 absolute inset-0 pl-205 pt-30"><h1 className="uppercase font-bold text-5xl">a city on mars</h1>
                    <h1 className="py-7 w-130">Establishing a self-sufficient city on Mars will require upwards of one million people and millions of tonnes of cargo to be delivered to the Red planet. By launching more than 10 times per day to maximize transfer windows that open up every approximately 26 months, several thousand Starships will ultimately transfer crew and equipment to build a lasting presence on another world.</h1>
                </div>
            </div>
            <div>{specificItem2 && (
                <div key={specificItem2.id}>
                    {/* Changed h-screen to h-[600px] or h-full so the wrapper has an explicit canvas size */}
                    <div className="relative w-full h-[1000px] bg-black  overflow-hidden">
                        <div className="absolute  ">
                            <img
                                className="w-full h-full object-contain"
                                src="https://www.spacex.com/assets/images/human-spaceflight/mars/mars_whymars_d.jpg"
                                alt="Starship Tanker"
                            />
                        </div>
                        {/* 2. THE TEXT CONTAINER (Stays anchored on the left, now overlapping half the image) */}
                        <div className="z-10 relative pl-225 pt-40">
                            <h1 className="font-bold text-5xl mb-4">WHY MARS?</h1>

                            <p className=" font-sans text-sm leading-relaxed mb-6 w-120 pb-10">
                               At an average distance of 140 million miles, Mars is one of Earth`s closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.
                            </p>

                            <div>
                                <div>
                                    <div className="flex justify-around w-120 gap-67 pb-5">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem2.part1}</h1>
                                        <p className="">{specificItem2.part4}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                                <div>
                                    <div className="flex justify-around w-120 gap-72 pb-5 pt-6">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem2.part2}</h1>
                                        <p className="">{specificItem2.part5}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                                <div>
                                    <div className="flex justify-around w-120 gap-85 pb-5 pt-6">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem2.part3}</h1>
                                        <p className="">{specificItem2.part6}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}</div>
            <Footer/>
        </div>
    )
}