export default function Footer() {
    return(
        <div>
            <div className="flex justify-center py-20 "><div className="w-0.5 h-40 bg-amber-50"/></div>
            <div className="flex justify-center gap-0.5 text-sm"><h1 className="text-zinc-400">For inquiries about Starship and our human spaceflight program, contact </h1><p>  sales@spacex.com</p></div>
            <div className="flex justify-center pt-28 pb-10 uppercase text-sm gap-10">
                <a href="https://www.spacex.com/careers">Careers</a>
                <a href="https://www.spacex.com/updates">Updates</a>
                <a href="https://www.spacex.com/assets/media/privacy_policy_spacex.pdf">Privacy Policy</a>
                <a href="https://www.spacex.com/supplier">Suppliers</a>
                <h1 >© 2026 SpaceX</h1>
            </div>
        </div>
    )
}