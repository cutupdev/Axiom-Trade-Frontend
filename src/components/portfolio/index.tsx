"use client"

import React, { useContext, useEffect, useState } from 'react'
import SpotView from './SpotView'
import WalletsView from './WalletsView'
import PerpetualsView from './PerpetualsView'
import UserContext from '@/contexts/usercontext'

const PortfolioSelectList = [
  {
    id: 1,
    title: "Spot",
    data: "spot"
  },
  {
    id: 2,
    title: "Wallets",
    data: "wallets"
  },
  {
    id: 3,
    title: "Perpetuals",
    data: "perpetuals"
  },
]

export default function PortfolioPage() {
  const [portfolioSelect, setPortfolioSelect] = useState<string>("wallets");
  const { setLoadingState } = useContext<any>(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
  }, [])

  const renderSelectedView = () => {
    switch (portfolioSelect) {
      case "spot":
        return <SpotView />
      case "wallets":
        return <WalletsView />
      case "perpetuals":
        return <PerpetualsView />
      default:
        return <WalletsView />
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mx-auto px-3 sm:px-5 py-4 sm:py-8 w-full max-w-[1440px] h-full'>
      <div className="flex flex-col justify-start items-center gap-3 sm:gap-4 w-full">

        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-row justify-start items-center gap-2 sm:gap-3 w-full overflow-x-auto pb-2">
          {PortfolioSelectList.map((item) => (
            <div key={item.id} className="flex-shrink-0 flex-row justify-start items-center text-gray-600" onClick={() => setPortfolioSelect(item.data)}>
              <div className={`font-medium text-base sm:text-lg tracking-[-0.02em] hover:text-white cursor-pointer whitespace-nowrap px-2 py-1 rounded-md transition-colors ${portfolioSelect === item.data ? "text-white bg-[#526fff]/20" : "text-gray-600"}`}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-start items-center gap-3 w-full">
          {PortfolioSelectList.map((item) => (
            <div key={item.id} className="flex flex-row justify-start items-center gap-4 text-gray-600" onClick={() => setPortfolioSelect(item.data)}>
              <div className={`font-medium text-lg xl:text-xl tracking-[-0.02em] hover:text-white cursor-pointer ${portfolioSelect === item.data ? "text-white" : "text-gray-600"}`}>{item.title}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-start items-center gap-4 w-full h-full">
          {renderSelectedView()}
        </div>

      </div>
    </div>
  )
}
