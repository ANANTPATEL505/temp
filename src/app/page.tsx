'use client'

import Bubbles from "./comps/bubble";
import Typewriter from "./comps/type";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen md:px-10 w-full">
      <div className="h-[76px] w-full"></div>
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[73vh] rounded-3xl dark:rounded-none overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-3/6 left-1/2 py- min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/LayerZero+-+Header+Animation+-+V02.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay / Shadow from all sides */}
        <div className="absolute inset-0 pointer-events-none hm "></div>

        {/* Centered Text */}
        <div className="absolute bottom-10 left-6 md:bottom-7 md:left-15 flex flex-col font-[Roboto,sans] text-white gap-1">

          {/* Build */}
          <div className="w-48 md:w-64 text-4xl sm:text-5xl md:text-7xl">
            Build
          </div>

          {/* Typewriter */}
          <div className="w-48 md:w-64 h-16 sm:h-20 flex items-center">
            <Typewriter
              texts={[
                { text: "Finance", color: "#22c55e" },
                { text: "Governance", color: "#3b82f6" },
                { text: "APPs", color: "#eab308" },
                { text: "Internet", color: "#a855f7" },
                { text: "Anything", color: "#ef4444" },
              ]}
              speed={90}
              delay={1200}
            />
          </div>

          {/* OmniChain */}
          <div className="w-48 md:w-64 text-4xl sm:text-5xl md:text-7xl">
            Decentralized
          </div>
        </div>


      </section>

      {/* Next Section */}
      <section className="relative w-full h-[90vh]">
        <hr className="border-t border-gray-300 opacity-20 mt-7" />

        <div className="relative flex items-center justify-center h-full">
          <Bubbles />
        </div>

        {/* Centered Text */}
        <div className="absolute inset-0 top-20 flex items-center justify-center pointer-events-none">
          <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold font-[Roboto] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-gradient">
            hello DEVs
          </h1>
        </div>
        <hr className="border-t border-gray-300 opacity-20 mt-7" />
      </section>

      <section className="w-full  flex justify-center items-center h-screen">
        <div className="flex justify-between hover-box w-1/5  h-10 items-center group cursor-pointer dark:border-[1px] border-black overflow-hidden border-2 dark:border-white transition">
          <div className="flex gap-1">
            <img
              src="/logo/github.png"
              className="w-6 h-6 filter invert transition duration-200 group-hover:invert-0 z-10 group-hover:text-white"
            />
            <span className=" transition duration-200 filter dark:invert-0 group-hover:invert text-black dark:text-white font-medium">
              GitHub
            </span>
          </div>

          <img
            src="/logo/arrow.png"
            className="w-6 h-6 filter invert-0 dark:invert transition duration-200 rotate-330 group-hover:invert dark:group-hover:invert-0 z-10 "
          />
        </div>
      </section>
    </div>
  )
}
