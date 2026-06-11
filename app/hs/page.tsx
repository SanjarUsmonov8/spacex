import Navbar from "../components/Navbar";
import Suit from "../components/Suit";

export default function Falkon9() {
    return (
        <div>
            <Navbar/>
             <div className="relative w-full overflow-hidden">
                <div>
                    <img
                        className="object-cover h-full w-full"
                        src="https://www.spacex.com/assets/images/human-spaceflight/home/HS-hero.webp"
                        alt="Starship Hero"
                    />
                </div>

                {/* THE ANIMATED TEXT CONTAINER:
        - Added standard CSS keyframes inside an inline style tag.
        - The style shifts the box down 40px initially, hides it, and then slides it up over 1.2 seconds.
      */}
                <div
                    className="z-10 absolute inset-0 px-[220px] pt-[320px]"
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

                    <h1 className="font-bold text-8xl text-white">HUMAN SPACEFLIGHT</h1>
                    <p className="flex justify-center pt-8 text-white uppercase">
                        Making Life Multiplanetary
                    </p>
                </div>
            </div>
            <div className="pt-20 bg-black"><img className="w-full" src="https://mlyn.by/app/uploads/2024/05/photo_2024-05-02_10-26-47.jpg" alt="" /></div>
            <div><Suit/></div>
        </div>
    )
}