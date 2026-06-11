import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

export default async function Dragon() {
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    const specificItem3 = data.find((item: any) => item.id === 3)

    return (
        <div>
            <Navbar />
            <div className="relative w-full overflow-hidden">
                <div>
                    <img
                        className="object-cover h-full w-full"
                        src="https://www.spacex.com/assets/images/vehicles/dragon/dragon_feature.jpg
"
                        alt="Dragon Hero"
                    />
                </div>

                {/* THE ANIMATED TEXT CONTAINER:
        - Added standard CSS keyframes inside an inline style tag.
        - The style shifts the box down 40px initially, hides it, and then slides it up over 1.2 seconds.
      */}
                <div
                    className="z-10 absolute inset-0 px-[550px] pt-[320px]"
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

                    <h1 className="font-bold text-8xl text-white">DRAGON</h1>
                    <p className="flex justify-center pt-8 text-white uppercase">
                        Sending Humans and Cargo into space
                    </p>
                </div>
            </div>
            <div className="relative w-full overflow-hidden bg-black">
                <div className="z-10 absolute inset-0 pl-25 pt-80">
                    <h1 className="py-6 w-120">The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.</h1>
                </div>
                <div><img className="object-cover w-full h-full transform pt-20" src="https://www.spacex.com/assets/images/vehicles/dragon/DragonTrunk_Lines_Desktop.jpg" alt="" /></div>
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
                                <h1 className="text font-mono font-light tracking-tight">{specificItem3.part1}</h1>
                                <p className="">{specificItem3.part4}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                        <div>
                            <div className="flex justify-around w-120 gap-80 pb-5 pt-6">
                                <h1 className="text font-mono font-light tracking-tight">{specificItem3.part2}</h1>
                                <p className="">{specificItem3.part5}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                        <div>
                            <div className="flex justify-around w-120 gap-68 pb-5 pt-6">
                                <h1 className="text font-mono font-light tracking-tight">{specificItem3.part3}</h1>
                                <p className="">{specificItem3.part6}</p>
                            </div>
                            <div className="h-[1px] w-120 bg-zinc-500" />
                        </div>
                    </div>
                </div>
                <div className="-mr-80"><img className="object-cover w-full h-full" src="https://www.spacex.com/assets/images/vehicles/dragon/mobile/DragonTrunk_Render_Mobile.png" style={{ clipPath: 'inset(0% 15% 0% 0%)' }} alt="" /></div>
            </div>
            <Footer/>
        </div>
    )
}