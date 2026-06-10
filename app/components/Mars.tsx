export default function Mars() {
  return (
    <div>
      <div className="relative w-full bg-black overflow-hidden">
        <div className="absolute inset-0 z-10 pt-80 pl-25 "><h1 className="uppercase font-bold text-7xl w-150">Making life multiplanetary</h1>
          <h1 className="w-150 py-7">SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.</h1>
          <a href="https://starlink.com/"><div className="bg-black/60 w-30 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >EXPLORE →</h1></div></a></div>
        <div><img
          className="object-cover w-full h-full pl-160 py-40"
          src="https://rcrtech.com/wp-content/uploads/2026/04/Screenshot-2026-04-02-at-1.45.08-PM-1.png"
          alt="Mars"
        /></div>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div><img className="object-cover w-full h-full " src="https://www.digitaltrends.com/tachyon/2025/07/starship-landing.jpeg?fit=1800,1170" alt="" />
          {/* 4. Right Side Shadow (Fades from black on the right edge into clear) */}
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-zinc-800 to-transparent" /></div>
        <div className="z-10 absolute inset-0 pl-205 pt-30"><h1 className="uppercase font-bold text-5xl">Revolutionizing space <p className="pt-5">technology</p></h1>
          <h1 className="py-7">SpaceX`s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.</h1>
          <a href="https://starlink.com/"><div className="bg-black/60 w-35 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >LEARN MORE →</h1></div></a></div>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div className="object-cover w-full h-70 bg-sky-300/50 "><div className="absolute inset-y-0 left-0 w-350 h-75 bg-gradient-to-r from-zinc-800/80 via-zinc-800/10 to-transparent" /></div>
        <div className="z-10 absolute inset-0 pt-25 pl-20"><h1 className="uppercase font-bold text-5xl w-200">World`s leading launch service provider</h1>
          <h1 className="w-200 py-7">SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity`s ability to access space into something as routine as air travel.</h1>
          <a href="https://starlink.com/"><div className="bg-black/60 w-45 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >RESERVE YOUR RIDE →</h1></div></a></div>
        <div className="-mt-6"><img className="object-cover w-full h-full " src="https://assets.techrepublic.com/uploads/2026/01/SpaceX-Jan-2026.jpg?w=1024" alt="" style={{ clipPath: 'inset(3% 0% 0% 0%)' }} /></div>
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/50 to-transparent" />
      </div>
      <div className="relative w-full overflow-hidden ">
        <div><img className="object-cover w-full h-full " src="https://www.newfortunetimes.com/wp-content/uploads/2026/04/Advancing_Human_Spaceflight_Desktop_61c8ba1c67-e1775214925448.jpg" alt="" /></div>
        <div className="z-10 absolute inset-0 pl-190 pt-30"><h1 className="uppercase font-bold text-5xl">Advancing human <p className="py-5">spaceflight</p></h1>
        <h1 className="w-170 pb-10">Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.</h1>
        <a href="https://starlink.com/"><div className="bg-black/60 w-35 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >JOIN A MISSON →</h1></div></a></div>
      </div>
      <div className="relative w-full overflow-hidden ">
        <div className="z-10 absolute inset-0 pl-25 pt-100"><h1 className="uppercase font-bold text-5xl w-170">Delivering high-speed internet from space</h1>
        <h1 className="py-6 w-170">Starlink is the world`s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.</h1>
        <a href="https://starlink.com/"><div className="bg-black/60 w-35 h-12 flex items-center justify-center rounded-sm border-1 border-white/50"><h1 className="text-xs" >ORDER NOW →</h1></div></a>
        </div>
        <div><img className="object-cover w-full h-full transform rotate-180" src="https://substackcdn.com/image/fetch/$s_!8xrH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F05471c27-b73c-4c13-a30f-f5ae48d70490_1280x720.jpeg" alt="" /></div>
      </div>
    </div>

  )
}