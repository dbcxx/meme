"use client"

import { useState, useRef,useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import WhitepaperModal from "@/components/whitepaper-modal"
import FeatureCarousel from "@/components/feature-carousel"



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
   

  return (
    <main className="min-h-screen bg-[#272B33] text-white">
      {/* Hero Section */}
      <section className="container mx-auto lg:px-8 px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-evenly relative">
          {/* Rocket image positioned as in the design */}
          <div className=" lg:absolute lg:bottom-0 lg:left-0 transform translate-y-16 md:translate-y-24">
            <Image src="/rocket.png" alt="Rocket" width={340} height={340} className="object-contain hidden md:block" />
          </div>

          <div className="lg:pl-40 pl-10 max-w-xl ">
            <div className="mb-8">
              <h1 className="lg:text-[90px] text-6xl font-bold">
                Always
                <br />
                <span className="lg:text-9xl text-6xl bg-gradient-to-r from-green-400 via-green-300 to-yellow-300 text-transparent bg-clip-text">
                  Early
                </span> 
              </h1>
              <p className="mt-4 text-gray-300 text-lg">Get in Early to Degen Calls. Beat the Cabals, KOLs and FnFs to their game.</p>
            </div>

    
            <div className="space-y-4">
            <div className="flex items-center w-48 p-[3px] bg-[#ff5500]">
              <Link
                href="https://t.me/UseAlwaysEarlyBot"
                className="flex items-center w-48 bg-[#ff5500] hover:bg-[#ff6600] border-2 border-[#272B33] text-white px-4 py-2 transition-colors"
              >                                
                {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
                ACCESS BOT
              </Link>
              </div>


              <div className="flex items-center w-48 p-[3px] bg-[#FF9500]">
              <Link
                href="#official-links"
                className="flex items-center w-48 bg-[#FF9500] hover:bg-[#ff5500]/10 border-2 border-[#272B33] text-white px-4 py-2 transition-colors"
              >
                {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
                OFFICIAL LINKS
              </Link>
              </div>


              <div className="flex items-center w-48 p-[3px] bg-[#5BD999]">
              <button
                 onClick={() => setIsModalOpen(true)}
                className="flex items-center w-48 bg-[#5BD999] hover:bg-[#22c55e]/10 border-2 border-[#272B33] text-white px-4 py-2 transition-colors"
              >
                {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
                WHITEPAPER
              </button>
              </div>
            </div>





          </div>

          <video
            ref={videoRef}
            className="h-96 bg-[#1F2229]x rounded-lg mt-16 md:mt-0"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
          <source src="/early.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>


           {/* Unmute Button (always visible) */}
           {isMuted && (
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = false
            setIsMuted(false)
          }
        }}
        className="fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-white transition-colors"
      >
        🔊 Unmute
      </button>
           )}

          
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-full mx-auto lg:px-52 px-4 py-16 bg-[#1F2229]">
        <h2 className="lg:text-7xl text-5xl font-bold text-center bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text mb-16">
          Features
        </h2>

        {/* Desktop view: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 relative rounded-lg group"
              style={{
                background: "#1a1e24",
                border: "1px solid transparent",
                borderRadius: "8px",
                backgroundClip: "padding-box",
                position: "relative",
              }}
            >
              {/* Gradient border */}
            <div
        
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "8px",
                  padding: "1px",
                  background: "linear-gradient(to bottom right, #F75B00 1%, #5BD999 39%, #FDCA36 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }} 
              /> 
                {/* <div
        className="absolute inset-0 rounded-lg p-px transition-transform duration-500 group-hover:animate-gradient-move"
        style={{
          background: "linear-gradient(90deg, #F75B00, #5BD999, #FDCA36)",
          backgroundSize: "200% 200%",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      /> */}

              {/* Number box */}
              <div
                className="w-10 h-10 mb-4 flex items-center justify-center rounded-md"
                style={{
                  background: "#1a1e24",
                  border: "1px solid transparent",
                  position: "relative",
                }}
              >
                {/* Gradient border for number box */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "6px",
                    padding: "1px",
                    background: "linear-gradient(to bottom right, #F75B00 1%, #5BD999 39%, #FDCA36 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Number with gradient text */}
                <span className="bg-gradient-to-r from-[#F75B00] via-[#5BD999] to-[#FDCA36] text-transparent bg-clip-text font-medium">
                  {index + 1}
                </span>
              </div>

              {/* Title with gradient */}
              <h3 className="lg:text-2xl text-xl font-bold mb-3 bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <FeatureCarousel features={features} />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="container mx-auto lg:px-32 px-4 py-16">
        <h2 className="lg:text-7xl text-5xl font-bold text-center bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text mb-16">
          Coming soon
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-[#ff5500]/30">
          {comingSoon.map((item, index) => (
            <div key={index} className="px-6 relative">
              {/* Number box */}
              <div
                className="w-10 h-10 mb-4 flex items-center justify-center rounded-md"
                style={{
                  background: "#1a1e24",
                  border: "1px solid transparent",
                  position: "relative",
                }}
              >
                {/* Gradient border for number box */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "6px",
                    padding: "1px",
                    background: "linear-gradient(to bottom right, #F75B00 1%, #5BD999 39%, #FDCA36 100%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                {/* Number with gradient text */}
                <span className="bg-gradient-to-r from-[#F75B00] via-[#5BD999] to-[#FDCA36] text-transparent bg-clip-text font-medium">
                  {index + 1}
                </span>
              </div>

              <h3 className="lg:text-2xl text-xl font-bold bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Official Links Section */}
      <section id="official-links" className="py-16 bg-gradient-to-r from-green-400 via-teal-300 to-yellow-300">
        <div className="container mx-auto px-4">
          <h2 className="lg:text-7xl text-5xl font-bold text-center text-[#1a1e24] mb-8">Official Links</h2>

          <div className="flex justify-center space-x-4">
            <Link href="https://x.com/AlwaysEarlyBot" className="bg-black p-2 rounded-md hover:bg-gray-800 transition-colors">
              <Image src="/x-icon.png" alt="X / Twitter" width={24} height={24} className="w-6 h-6" />
            </Link>
            <Link href="https://t.me/AlwaysEarlyBotChannel" className="bg-[#0088cc] p-2 rounded-md hover:bg-[#0099dd] transition-colors">
              <Image src="/telegram-icon.png" alt="Telegram" width={24} height={24} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="lg:text-7xl text-5xl font-bold text-center bg-gradient-to-r from-[#F75B00] to-[#FDCA36] text-transparent bg-clip-text mb-8">
          Disclaimer
        </h2>

        <div className="max-w-4xl mx-auto text-gray-400 space-y-4 lg:text-xl text-base">
          <p>
            The content from Always Early - whether it's degen gems, frontruns, cabal plays, or any other calls - isn't
            financial, investment, or trading advice. We're not your mom or your broker; we don't say what to buy, sell,
            or HODL. Ape in at your own risk, do your own digging, and maybe call your financial guy before you YOLO.
          </p>
          <p>
            We hustle to keep our calls, signals and tips on point, but we're not perfect. If something's off or
            outdated, that's on you to catch - we're not liable. You're playing the degen game with our info, so own the
            wins and the rekt. Full send, no regrets.
          </p>
        </div>
      </section>

      {/* Whitepaper Modal */}
      <WhitepaperModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

const features = [
  {
    title: "Degen Gems",
    description:
      "Unearth hidden memecoin treasures before they moon. We sniff out the wildest low-cap plays so you can ape in early and ride the pump.",
  },
  {
    title: "Frontruns",
    description:
      "Beat the insiders at their own game. Get the jump on hype cycles and trending tokens before the cabal floods the chat.",
  },
  {
    title: "Cabal plays",
    description:
      "Expose the moves of Cabals like the LA Vape, Grand FnF, Stratton Oakmont, the Te/Charto/sully cabal etc. We decode their signals so you’re in on the action, not left holding bags.",
  },
  {
    title: "Dip Opportunities",
    description:
      "Buy the blood, sell the green. Our AI spots the juiciest dips so you can stack cheap sats while others panic.",
  },
  {
    title: "Conviction Holds",
    description:
      "HODL with balls of steel. We highlight the projects worth diamond-handing through the noise - because real degens don't paperhand.",
  },
  {
    title: "Degen Tips/Strategies",
    description:
      "Level up your game with battle-tested tricks. From sniper entries to exit liquidity hacks, we've got the playbook for max gains.",
  },
]

const comingSoon = [
  {
    title: "Leverage Trading Signals",
    description:
      "Crank the leverage, chase the pumps. Our AI dishes out precise calls to help you 10x or rug - full send, no regrets.",
  },
  {
    title: "Smart Wallet Alerts",
    description:
      "Real-time alerts on sharp wallets - AI tracks their gem, dip, and pump moves so you can follow the smart money and win.",
  },
  {
    title: "Sports Betting Predictions",
    description:
      "Flex your degen skills beyond crypto. Our AI crunches the odds so you can bet big on games and stack more bags.",
  },
]

