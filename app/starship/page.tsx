import Navbar from "../components/Navbar";

export default async function Starship() {
    const res = await fetch('http://127.0.0.1:8000/');
    const data = await res.json();
    const specificItem1 = data.find((item: any) => item.id === 1)

    return (
        <div>
            <Navbar/>
            <div className="relative w-full overflow-hidden">
                <div><img className="object-cover h-full w-full" src="https://www.spacex.com/assets/images/vehicles/starship/starship_hero_d.jpg" alt="" /></div>
                <div className="z-10 absolute inset-0 px-130 pt-80"><h1 className="font-bold text-8xl">STARSHIP</h1>
                <p className="flex justify-center pt-8">Service to Earth Orbit, Moon, Mars and Beyond</p></div>
            </div>
            <div>{specificItem1 && (
                <div key={specificItem1.id}>
                    <div>
                        <div>
                            <div></div>
                            <div><h1 className="text-7xl">{specificItem1.part1}</h1></div>
                        </div>
                        <div><img src="https://www.spacex.com/assets/images/human-spaceflight/moon/hls_depot_mobile.png" alt="" /></div>
                    </div>
                </div>
            )}</div>
        </div>
    )
}