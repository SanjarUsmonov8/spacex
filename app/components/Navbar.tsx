export default function Navbar() {
    return(
        <div className="flex absolute top-0 left-0 right-0 z-10 bg-transparent py-3 px-14 items-center justify-between">
            <img className="h-7 " src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png" alt="" />
            <div className="text-zinc-300 -pl-0 text-sm font-mono font-semibold flex justify-around w-200 uppercase">
                <h1>Vehicles</h1>
                <h1>Human Spaceflight</h1>
                <h1>Starlink</h1>
                <h1>Starshield</h1>
                <h1>XAI</h1>
                <h1>Terafab</h1>
                <h1>Company</h1>
                <h1>Shop</h1>
            </div>
            <div className="text-zinc-300 font-mono border border-gray-400 rounded-sm p-2 pr-20 h-7 flex items-center w-70 text-xs uppercase"><h1 className="">Upcoming Launches</h1></div>
        </div>
    )
}