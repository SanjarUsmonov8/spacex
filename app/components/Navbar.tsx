export default function Navbar() {
    return(
        <div className="flex absolute top-0 left-0 right-0 z-10 bg-transparent py-3 px-8 items-center justify-between">
            <img className="h-7" src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png" alt="" />
            <div className="text-zinc-700 font-bold flex justify-around w-200">
                <h1>Vehicles</h1>
                <h1>Human Spaceflight</h1>
                <h1>Starlink</h1>
                <h1>Starshield</h1>
                <h1>XAI</h1>
                <h1>Terafab</h1>
                <h1>Company</h1>
                <h1>Shop</h1>
            </div>
            <div className="text-black border border-black p-2 text-sm">upcoming launcher</div>
        </div>
    )
}