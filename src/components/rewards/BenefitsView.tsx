"use client"

import React from 'react'
import Image from 'next/image'
import RaydiumIcon from '@/../public/images/raydium.png'
import SugarIcon from '@/../public/images/sugar.svg'

const BenefitsView = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col sm:flex-row flex-wrap justify-start items-start gap-4 sm:gap-6 w-full">
        {/* Raydium Rewards Card */}
        <div className="flex flex-col justify-between bg-gray-900 p-4 sm:p-6 rounded-lg w-full sm:max-w-[450px] h-auto sm:h-[250px]">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Image src={RaydiumIcon} alt="Raydium" width={16} height={16} className="sm:w-5 sm:h-5" />
            <h3 className="font-semibold text-white text-lg sm:text-xl">Raydium Rewards</h3>
          </div>
          <p className="justify-start mb-4 sm:mb-6 h-auto sm:h-full text-gray-600 text-sm">
            No claimable rewards available. Trade Raydium and Launch Lab tokens to earn rewards.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 py-2 sm:py-1 rounded-full w-full text-white text-sm">
            Claim All
          </button>
        </div>

        {/* Sugar Rewards Card */}
        <div className="flex flex-col justify-between bg-gray-900 p-4 sm:p-6 rounded-lg w-full sm:max-w-[450px] h-auto sm:h-[250px]">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Image src={SugarIcon} alt="Sugar" width={16} height={16} className="sm:w-5 sm:h-5" />
            <h3 className="font-semibold text-white text-lg sm:text-xl">Sugar Rewards</h3>
          </div>
          <p className="justify-start mb-4 sm:mb-6 h-auto sm:h-full text-gray-600 text-sm">
            No Sugar rewards available to claim.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 py-2 sm:py-1 rounded-full w-full text-white text-sm">
            Claim All
          </button>
        </div>
      </div>
    </div>
  )
}

export default BenefitsView
