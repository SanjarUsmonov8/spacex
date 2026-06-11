import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default async function Falkon9() {
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    const specificItem4 = data.find((item: any) => item.id === 4)


    return (
        <div>
            <Navbar />
            <div className="relative w-full overflow-hidden">
                <div>
                    <img
                        className="object-cover h-200 w-full"
                        src=" https://www.spacex.com/assets/images/vehicles/falcon-9/f9_feature.jpg"
                        
                        alt="Falcon 9 Hero"
                    />
                </div>

                {/* THE ANIMATED TEXT CONTAINER:
        - Added standard CSS keyframes inside an inline style tag.
        - The style shifts the box down 40px initially, hides it, and then slides it up over 1.2 seconds.
      */}
                <div
                    className="z-10 absolute inset-0 px-[500px] pt-[320px]"
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

                    <h1 className="font-bold text-8xl text-white">FALCON 9</h1>
                    <p className="flex justify-center pt-8 text-white uppercase">
                        First Orbital Class Rocket Capable of Reflight
                    </p>
                </div>
            </div>
             <div className="relative w-full overflow-hidden">
                {/* 2. THE TEXT CONTAINER (Stays anchored on the left, now overlapping half the image) */}
                <div className="z-10 absolute inset-0 pl-25 pt-60">


                    <p className=" font-sans text-2xl leading-relaxed w-120">
                       DRAGON
                    </p>
                    <h1 className="font-bold text-5xl mb-4 pb-10">OVERVIEW</h1>
                    <div>
                        <div>
                            <div className="flex justify-around w-120 gap-80 pb-5">
                                <h1 className="text font-mono font-light tracking-tight">{specificItem4.part1}</h1>
                                <p className="">{specificItem4.part4}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                        <div>
                            <div className="flex justify-around w-120 gap-80 pb-5 pt-6">
                                <h1 className="text font-mono font-light tracking-tight">{specificItem4.part2}</h1>
                                <p className="">{specificItem4.part5}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                        <div>
                            <div className="flex justify-around w-120 gap-60 pb-5 pt-6">
                                <h1 className="text font-mono font-light tracking-tight">{specificItem4.part3}</h1>
                                <p className="">{specificItem4.part6}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                    </div>
                </div>
                <div className="-mr-80"><img className="object-cover w-full h-full" src="https://www.spacex.com/assets/images/vehicles/falcon-9/mobile/WebsiteF9Fairings_Render_Mobile.jpg" style={{ clipPath: 'inset(0% 15% 0% 0%)' }} alt="" /></div>
            </div>
            <div><img src="https://www.spacex.com/assets/images/vehicles/falcon-9/F9_DM2_LAUNCH_3840x2560.jpg" alt="" /></div>
            <Footer/>
        </div>
    )
}