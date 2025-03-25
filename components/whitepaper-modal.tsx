"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface WhitepaperModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WhitepaperModal({ isOpen, onClose }: WhitepaperModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div className="bg-[#272B33] rounded-xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex mb-4 p-6">
          <Image src="/meme77.png" alt="Meme" width={400} height={400} className="w-full h-full object-contain" />
        </div>

        <div className="space-y-4 text-white">
          <p className="text-xl font-medium">Nigga, you Einstein now? 🫵😹</p>

          <p>You haven't read a white paper in your life lol - or probably any book.</p>

          <p>You're a fucking degen, just head to the bot and do what you know how to do best!</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="https://t.me/UseAlwaysEarlyBot" className="relative flex items-center justify-center">
            
            <div className="flex items-center justify-center w-full bg-[#ff5500] hover:bg-[#ff6600] border-2 border-[#1F2229] text-white px-4 py-2 rounded-md transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ACCESS BOT
            </div>
          </Link>
          

          <button onClick={onClose} className="relative flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#F9A826] rounded-md"></div>
            <div className="flex items-center justify-center w-full bg-[#F9A826] hover:bg-[#fbb33e] border-2 border-[#1F2229] text-white px-4 py-2 rounded-md transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO MAIN PAGE
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

