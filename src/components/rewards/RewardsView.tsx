"use client"

import React from 'react'
import { FaAngleDown, FaUser, FaChartLine, FaGift, FaStar, FaClock, FaSearch } from 'react-icons/fa'
import Image from 'next/image'
import solIcon from '@/../public/images/sol.png'
import { BiUser } from 'react-icons/bi'

const RewardsView = () => {
  return (
    <div className="w-full h-full">
      {/* Main Rewards Summary */}
      <div className="flex flex-col items-center mb-4 sm:mb-5">
        {/* Central Icon and Title */}
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="flex justify-center items-center bg-orange-500 mb-3 sm:mb-4 rounded-lg w-12 h-12 sm:w-16 sm:h-16">
            <FaGift className="text-white text-lg sm:text-2xl" />
          </div>
          <h1 className="mb-2 font-bold text-white text-2xl sm:text-3xl">1X Rewards</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400 text-sm sm:text-base">30% Referral Rate</span>
            <FaUser className="text-gray-400 text-sm" />
            <span className="text-white text-sm sm:text-base">0</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 rounded-full w-2 h-2 sm:w-3 sm:h-3"></div>
            <span className="font-medium text-orange-500 text-sm sm:text-base">Wood</span>
          </div>
        </div>

        {/* Mobile Layout */}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full">
            <div className="bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-full text-white text-sm cursor-pointer w-full sm:w-auto text-center">
              Edit Referral
            </div>
            <div className="bg-[#526fff] hover:bg-[#526fff]/80 px-4 py-2 rounded-full text-white text-sm cursor-pointer w-full sm:w-auto text-center">
              Share Referral
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full">
          {/* Points and Earned */}
          <div className="flex items-center gap-8 h-5">
            <div className="flex items-center gap-2">
              <Image src={solIcon} alt="SOL" width={20} height={20} />
              <div className="flex flex-row justify-start items-end gap-1">
                <span className="text-white text-xl">0</span>
                <span className="text-white text-xs">Points</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image src={solIcon} alt="SOL" width={20} height={20} />
              <div className="flex flex-row justify-start items-end gap-1">
                <span className="text-white text-xl">0</span>
                <span className="text-white text-xs">Earned</span>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-4">
            <div className="bg-gray-900 hover:bg-gray-800 px-4 py-1 rounded-full text-white text-sm cursor-pointer">
              Edit Referral
            </div>
            <div className="bg-[#526fff] hover:bg-[#526fff]/80 px-4 py-1 rounded-full text-white text-sm cursor-pointer">
              Share Referral
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 mb-3 w-full">
          {/* Mobile Progress */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-white text-sm">Next Level: 2X Rewards rate for Points and SOL</span>
              <div className="flex items-center gap-2">
                <FaGift className="text-[#526fff] text-sm" />
                <span className="text-gray-400 text-xs sm:text-sm">You&apos;re almost there! Trade 10 SOL to reach Bronze</span>
              </div>
            </div>
            <div className="bg-gray-800 mb-2 rounded-full w-full h-2">
              <div className="bg-[#526fff] rounded-full h-2" style={{ width: '5%' }}></div>
            </div>
          </div>

          {/* Desktop Progress */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm">Next Level: 2X Rewards rate for Points and SOL</span>
              <div className="flex items-center gap-2">
                <FaGift className="text-[#526fff] text-sm" />
                <span className="text-gray-400 text-sm">You&apos;re almost there! Trade 10 SOL to reach Bronze</span>
              </div>
            </div>
            <div className="bg-gray-800 mb-2 rounded-full w-full h-2">
              <div className="bg-[#526fff] rounded-full h-2" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>

        <span className="w-full text-white text-base sm:text-lg text-start">
          Claim
        </span>
      </div>

      {/* Main Content Cards */}
      <div className="gap-4 sm:gap-6 grid grid-cols-1 lg:grid-cols-3 mb-4 sm:mb-5">
        {/* SOL Rewards Card */}
        <div className="bg-gray-900 p-3 sm:p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FaChartLine className="text-[#526fff] text-sm sm:text-base" />
            <h3 className="font-semibold text-white text-base sm:text-lg">SOL Rewards</h3>
          </div>
          <div className="p-2 sm:p-4 rounded-lg h-[120px] sm:h-[190px]">
            <div className="relative h-full">
              {/* Mobile SOL Rewards Chart */}
              <div className="lg:hidden">
                <svg className="w-full h-full" viewBox="0 0 250 60">
                  <text x="5" y="12" fill="white" fontSize="8" textAnchor="start">1 SOL</text>
                  <text x="5" y="26" fill="white" fontSize="8" textAnchor="start">0.5 SOL</text>
                  <text x="5" y="40" fill="white" fontSize="8" textAnchor="start">0 SOL</text>
                  <line x1="25" y1="15" x2="250" y2="15" stroke="#374151" strokeWidth="0.5" />
                  <line x1="25" y1="30" x2="250" y2="30" stroke="#374151" strokeWidth="0.5" />
                  <line x1="25" y1="45" x2="250" y2="45" stroke="#374151" strokeWidth="0.5" />
                  <text x="25" y="55" fill="white" fontSize="6" textAnchor="middle">Sep 12</text>
                  <text x="70" y="55" fill="white" fontSize="6" textAnchor="middle">Sep 15</text>
                  <text x="140" y="55" fill="white" fontSize="6" textAnchor="middle">Sep 17</text>
                  <text x="210" y="55" fill="white" fontSize="6" textAnchor="middle">Sep 19</text>
                  <line x1="25" y1="45" x2="220" y2="45" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>

              {/* Desktop SOL Rewards Chart */}
              <div className="hidden lg:block">
                <svg className="w-full h-full" viewBox="0 0 300 80">
                  <text x="5" y="15" fill="white" fontSize="10" textAnchor="start">1 SOL</text>
                  <text x="5" y="35" fill="white" fontSize="10" textAnchor="start">0.5 SOL</text>
                  <text x="5" y="55" fill="white" fontSize="10" textAnchor="start">0 SOL</text>
                  <line x1="30" y1="20" x2="300" y2="20" stroke="#374151" strokeWidth="0.5" />
                  <line x1="30" y1="40" x2="300" y2="40" stroke="#374151" strokeWidth="0.5" />
                  <line x1="30" y1="60" x2="300" y2="60" stroke="#374151" strokeWidth="0.5" />
                  <text x="30" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 12</text>
                  <text x="60" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 13</text>
                  <text x="90" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 14</text>
                  <text x="120" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 15</text>
                  <text x="150" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 16</text>
                  <text x="180" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 17</text>
                  <text x="210" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 18</text>
                  <text x="240" y="75" fill="white" fontSize="8" textAnchor="middle">Sep 19</text>
                  <line x1="30" y1="60" x2="270" y2="60" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Card */}
        <div className="flex flex-col justify-between bg-gray-900 p-3 sm:p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FaGift className="text-[#526fff] text-sm sm:text-base" />
            <h3 className="font-semibold text-white text-base sm:text-lg">Claim</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-3">
            <div className="flex flex-row justify-center items-center gap-2 px-3 py-1 border-[#526fff] border-[1px] rounded-full">
              <Image src={solIcon} alt="SOL" width={16} height={16} className="sm:w-5 sm:h-5" />
              <span className="text-white text-sm sm:text-base">+0</span>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 px-3 py-1 border-[#526fff] border-[1px] rounded-full">
              <Image src={solIcon} alt="SOL" width={16} height={16} className="sm:w-5 sm:h-5" />
              <span className="text-white text-sm sm:text-base">+0</span>
            </div>
          </div>
          <button className="bg-[#526fff] hover:bg-[#526fff]/80 py-2 rounded-full w-full text-white text-sm cursor-pointer">
            Nothing to Claim
          </button>
        </div>

        {/* Quests Card */}
        <div className="bg-gray-900 p-3 sm:p-4 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500 text-sm sm:text-base" />
              <h3 className="font-semibold text-white text-base sm:text-lg">Quests</h3>
            </div>
            <div className="flex items-center gap-1 text-gray-400 hover:text-white cursor-pointer">
              <FaClock className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm">Points Breakdown</span>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start pt-4 sm:pt-8 w-full h-full gap-4 lg:gap-0">
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 w-full">
              <div className="flex justify-center items-center bg-transparent border-[4px] sm:border-[6px] border-gray-800 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <div className="font-medium text-white text-sm sm:text-base">+1,500</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-full text-gray-400 text-xs text-center">Refer 3 more people</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 w-full">
              <div className="flex justify-center items-center bg-transparent border-[4px] sm:border-[6px] border-gray-800 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <div className="font-medium text-white text-sm sm:text-base">+1,000</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-full text-gray-400 text-xs text-center">Trade 5 more SOL in Volume</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 w-full">
              <div className="flex justify-center items-center bg-transparent border-[4px] sm:border-[6px] border-gray-800 rounded-full w-16 h-16 sm:w-24 sm:h-24">
                <div className="font-medium text-white text-sm sm:text-base">+200</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-full text-gray-400 text-xs text-center">Make 10 more transactions</div>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Referrals Section */}
      <h3 className="font-semibold text-white text-base sm:text-lg mb-3">Activity</h3>
      <div className="bg-gradient-to-b from-gray-900 to-[#12141900] p-3 sm:p-4 rounded-lg" >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
          <span className="font-semibold text-white text-sm sm:text-base">Referrals</span>
          <div className="flex items-center gap-2 bg-gray-800 px-2 py-1 rounded-full">
            <BiUser className="text-white text-sm" />
            <span className="text-white text-sm">0</span>
          </div>
        </div>
        {/* Mobile Referrals */}
        <div className="lg:hidden">
          <div className="flex flex-col items-center gap-4 py-12 w-full">
            <button className="bg-[#526fff] hover:bg-[#526fff]/80 px-6 py-2 rounded-lg text-white text-sm w-full sm:w-auto">
              Set Referral Code to Earn Rewards
            </button>
          </div>
        </div>
        {/* Desktop Referrals */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-gray-700 border-b text-gray-400 text-sm text-left">
                <th className="pb-3">Email/Wallet</th>
                <th className="flex items-center gap-1 pb-3 cursor-pointer">
                  Date Joined
                  <FaAngleDown className="text-xs" />
                </th>
                <th className="pb-3">Type</th>
                <th className="pb-3">Points Earned</th>
                <th className="pb-3">SOL Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="py-8 text-gray-400 text-center">
                  <div className="flex flex-col items-center gap-4 py-20 w-full">
                    <button className="bg-[#526fff] hover:bg-[#526fff]/80 px-6 py-2 rounded-lg text-white">
                      Set Referral Code to Earn Rewards
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
    </div >
  )
}

export default RewardsView
