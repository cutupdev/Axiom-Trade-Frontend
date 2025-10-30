"use client"

import React, { useState } from 'react'

const PerpetualsView = () => {
  const [timeFilter, setTimeFilter] = useState<string>("1d");
  return (
    <div className="w-full h-full">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-3">
          <div className="flex items-center">
            <span className="font-medium text-white text-sm sm:text-base">Your holdings</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button className={`hover:bg-[#526fff]/20 px-2 sm:px-3 py-1 rounded-sm text-gray-600 hover:text-white text-xs sm:text-sm ${timeFilter === "1d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("1d")}>1d</button>
            <button className={`hover:bg-[#526fff]/20 px-2 sm:px-3 py-1 rounded-sm text-gray-600 hover:text-white text-xs sm:text-sm ${timeFilter === "7d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("7d")}>7d</button>
            <button className={`hover:bg-[#526fff]/20 px-2 sm:px-3 py-1 rounded-sm text-gray-600 hover:text-white text-xs sm:text-sm ${timeFilter === "30d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("30d")}>30d</button>
            <button className={`hover:bg-[#526fff]/20 px-2 sm:px-3 py-1 rounded-sm text-gray-600 hover:text-white text-xs sm:text-sm ${timeFilter === "Max" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("Max")}>Max</button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">Your holdings</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className={`hover:bg-[#526fff]/20 px-3 py-1 rounded-sm text-gray-600 hover:text-white text-sm ${timeFilter === "1d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("1d")}>1d</button>
            <button className={`hover:bg-[#526fff]/20 px-3 py-1 rounded-sm text-gray-600 hover:text-white text-sm ${timeFilter === "7d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("7d")}>7d</button>
            <button className={`hover:bg-[#526fff]/20 px-3 py-1 rounded-sm text-gray-600 hover:text-white text-sm ${timeFilter === "30d" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("30d")}>30d</button>
            <button className={`hover:bg-[#526fff]/20 px-3 py-1 rounded-sm text-gray-600 hover:text-white text-sm ${timeFilter === "Max" ? "text-white bg-[#526fff]" : "text-gray-600"}`} onClick={() => setTimeFilter("Max")}>Max</button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col border-[1px] border-gray-800 rounded-lg w-full h-full">
        {/* Mobile Layout - Stacked */}
        <div className="flex lg:hidden flex-col w-full h-full">
          {/* Performance Section */}
          <div className="flex flex-col px-3 py-4 border-gray-800 border-b w-full">
            <h4 className="font-medium text-white text-base mb-3">Performance</h4>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs">All Time Volume:</span>
                <span className="text-white text-sm">$0</span>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">All Time PNL:</span>
                  <span className="text-white text-sm">$0</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs">Number of Trades:</span>
                  <span className="text-white text-sm">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Account Value Section */}
          <div className="px-3 py-4 border-gray-800 border-b w-full">
            <div className="flex flex-col">
              <span className="text-gray-400 text-xs">Account Value:</span>
              <span className="text-white text-sm">$0</span>
            </div>
          </div>

          {/* PNL Graph Section */}
          <div className="flex flex-col border-gray-800 border-b w-full">
            <h3 className="p-3 font-semibold text-white text-base">PNL</h3>
            <div className="relative flex flex-col justify-center items-center px-4 h-32 min-h-[128px]">
              <div className="bg-pink-500 w-full h-px"></div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex flex-row justify-start w-full h-full">
          {/* Left Panel - Your Holdings */}
          <div className="flex flex-col py-3 border-gray-800 border-r w-full max-w-[450px] h-full min-h-[280px]">
            <div className="flex flex-col gap-2 w-full h-full">
              {/* Performance Section */}
              <div className="flex flex-col gap-5 px-4 pb-5 border-gray-800 border-b w-full">
                <h4 className="font-medium text-white text-lg">Performance</h4>
                <div className="flex flex-col justify-between">
                  <span className="text-gray-400 text-xs">All Time Volume:</span>
                  <span className="text-white">$0</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col justify-between">
                    <span className="text-gray-400 text-xs">All Time PNL:</span>
                    <span className="text-white">$0</span>
                  </div>
                  <div className="flex flex-col justify-between">
                    <span className="text-gray-400 text-xs">Number of Trades:</span>
                    <span className="text-white">0</span>
                  </div>
                </div>
              </div>

              {/* Account Value Section */}
              <div className="px-4 py-3 w-full h-full min-h-[80px]">
                <div className="flex flex-col justify-between">
                  <span className="text-gray-400 text-xs">Account Value:</span>
                  <span className="text-white">$0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - PNL Graph */}
          <div className="flex flex-col w-full h-full min-h-[280px]">
            <h3 className="p-3 font-semibold text-white text-base">PNL</h3>
            <div className="relative flex flex-col justify-center items-center px-10 h-full min-h-[232px]">
              <div className="bg-pink-500 w-full h-px"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Positions and History */}
        <div className="">
          <div className="px-3 pt-3 border-[1px] border-gray-700">
            <div className="flex gap-2 sm:gap-4 text-xs">
              <button className="pb-2 border-white border-b-2 text-white">Open Positions</button>
              <button className="pb-2 text-gray-400 hover:text-white">Trade History</button>
            </div>
          </div>
          <div className="">
            {/* Mobile Positions */}
            <div className="lg:hidden">
              <div className="flex flex-col justify-center items-center py-12 w-full h-full min-h-[200px] text-gray-400 text-center">
                <span className="text-base">No open positions</span>
              </div>
            </div>

            {/* Desktop Positions */}
            <div className="hidden lg:block w-full h-full min-h-[300px] overflow-x-auto">
              <table className="w-full">
                <thead className="border-gray-800 border-b">
                  <tr className="text-gray-600 text-xs text-left">
                    <th className="flex items-center gap-1 px-2 py-1">
                      Token
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </th>
                    <th className="px-2 py-1">Position</th>
                    <th className="px-2 py-1">Position Value</th>
                    <th className="px-2 py-1">Entry Price</th>
                    <th className="px-2 py-1">Mark Price</th>
                    <th className="px-2 py-1">Liquidation Price</th>
                    <th className="px-2 py-1">Margin Used (PNL)</th>
                    <th className="px-2 py-1">TP/SL</th>
                    <th className="px-2 py-1">Close</th>
                  </tr>
                </thead>
                <tbody className="flex flex-col w-full h-full">
                  <tr className="flex flex-col w-full h-full">
                  </tr>
                </tbody>
              </table>
              <div className="flex flex-col justify-center items-center py-12 w-full h-full min-h-[250px] text-gray-400 text-center">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                  <span className="text-lg">No open positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PerpetualsView
