import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function Starship() {
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    const specificItem1 = data.find((item: any) => item.id === 1)

    return (
        <div>
            <Navbar />
            <div className="relative w-full overflow-hidden">
                <div>
                    <img
                        className="object-cover h-full w-full"
                        src="https://www.spacex.com/assets/images/vehicles/starship/starship_hero_d.jpg"
                        alt="Starship Hero"
                    />
                </div>

                {/* THE ANIMATED TEXT CONTAINER:
        - Added standard CSS keyframes inside an inline style tag.
        - The style shifts the box down 40px initially, hides it, and then slides it up over 1.2 seconds.
      */}
                <div
                    className="z-10 absolute inset-0 px-[520px] pt-[320px]"
                    style={{
                        animation: 'slideUpSmooth 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    }}
                >
                    {/* CSS Animation Keyframes injected right here */}
                    <style>{`
          @keyframes slideUpSmooth {
            from {
              opacity: 0;
              transform: translateY(240px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

                    <h1 className="font-bold text-8xl text-white">STARSHIP</h1>
                    <p className="flex justify-center pt-8 text-white uppercase">
                        Service to Earth Orbit, Moon, Mars and Beyond
                    </p>
                </div>
            </div>
            <div>{specificItem1 && (
                <div key={specificItem1.id}>
                    {/* Changed h-screen to h-[600px] or h-full so the wrapper has an explicit canvas size */}
                    <div className="relative w-full h-[1000px] bg-black  overflow-hidden">


                        <div className="absolute left-1/4 w-[85%] h-full flex items-center pr-[15%]">
                            <img
                                className="w-full h-full object-contain"
                                src="https://www.spacex.com/assets/images/human-spaceflight/moon/hls_tanker_mobile.png"
                                alt="Starship Tanker"
                            />
                        </div>

                        {/* 2. THE TEXT CONTAINER (Stays anchored on the left, now overlapping half the image) */}
                        <div className="z-10 relative pl-25 pt-60">
                            <h1 className="font-bold text-5xl mb-4">STARSHIP OVERVIEW</h1>

                            <p className=" font-sans text-sm leading-relaxed mb-6 w-120 pb-10">
                                SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship –
                                represent a fully reusable transportation system designed to carry both crew and cargo to
                                Earth orbit, the Moon, Mars and beyond. Starship is the world’s most powerful launch vehicle
                                ever developed, designed to carry more than 100 metric tonnes to orbit in a fully reusable configuration.
                            </p>

                            <div>
                                <div>
                                    <div className="flex justify-around w-120 gap-80 pb-5">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem1.part1}</h1>
                                        <p className="">{specificItem1.part4}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                                <div>
                                    <div className="flex justify-around w-120 gap-80 pb-5 pt-6">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem1.part2}</h1>
                                        <p className="">{specificItem1.part5}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                                <div>
                                    <div className="flex justify-around w-120 gap-68 pb-5 pt-6">
                                        <h1 className="text font-mono font-light tracking-tight">{specificItem1.part3}</h1>
                                        <p className="">{specificItem1.part6}</p>
                                    </div>
                                    <div className="h-[1px] w-120 bg-zinc-500" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}</div>
            <div><img className="w-full" src="https://external-preview.redd.it/spacex-transformation-v0-pGoG3NxnitXYAQCmB9cphh0ygp3XzRZw4P7an6bJOEc.jpeg?width=1080&crop=smart&auto=webp&s=7a2116dbdf5f5e313094f5c4cdd02917361e34db" alt="" /></div>
            <Footer/>
        </div>
    )
}