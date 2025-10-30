"use client"

import React, { useState, useEffect } from 'react'
import RewardsView from './RewardsView'
import LeaderboardView from './LeaderboardView'
import BenefitsView from './BenefitsView'
import { useContext } from 'react'
import UserContext from '@/contexts/usercontext'

// Debug imports
console.log('RewardsView import:', RewardsView)
console.log('LeaderboardView import:', LeaderboardView)
console.log('BenefitsView import:', BenefitsView)

const RewardsSelectList = [
  {
    id: 1,
    title: "Rewards",
    data: "rewards"
  },
  {
    id: 2,
    title: "Leaderboard",
    data: "leaderboard"
  },
  {
    id: 3,
    title: "Benefits",
    data: "benefits"
  },
]

export default function RewardsPage() {
  const [rewardsSelect, setRewardsSelect] = useState<string>("rewards");
  const { setLoadingState } = useContext<any>(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
  }, [])

  const renderSelectedView = () => {

    switch (rewardsSelect) {
      case "rewards":
        return <RewardsView />
      case "leaderboard":
        return <LeaderboardView />
      case "benefits":
        return <BenefitsView />
      default:
        return <div>Loading...</div>
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mx-auto px-3 sm:px-5 py-4 sm:py-8 w-full max-w-[1440px] h-full'>
      <div className="flex flex-col justify-start items-center gap-3 sm:gap-4 w-full">
        {/* Mobile Navigation Tabs */}
        <div className="flex lg:hidden flex-row justify-start items-center gap-2 w-full overflow-x-auto pb-2">
          {RewardsSelectList.map((item) => (
            <div key={item.id} className="flex-shrink-0" onClick={() => setRewardsSelect(item.data)}>
              <div className={`font-medium text-base tracking-[-0.02em] hover:text-white cursor-pointer whitespace-nowrap px-3 py-2 rounded-md transition-colors ${rewardsSelect === item.data ? "text-white bg-[#526fff]/20" : "text-gray-600"}`}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden lg:flex flex-row justify-start items-center gap-3 w-full text-gray-600">
          {RewardsSelectList.map((item) => (
            <div key={item.id} className="flex flex-row justify-start items-center gap-4 text-gray-600" onClick={() => setRewardsSelect(item.data)}>
              <div className={`font-medium text-lg xl:text-xl tracking-[-0.02em] hover:text-white cursor-pointer ${rewardsSelect === item.data ? "text-white" : "text-gray-600"}`}>{item.title}</div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex flex-col justify-start items-center gap-4 w-full h-full">
          {renderSelectedView()}
        </div>
      </div>
    </div>
  )
}
