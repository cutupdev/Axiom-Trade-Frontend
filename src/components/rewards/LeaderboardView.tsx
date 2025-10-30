"use client"

import React, { useState } from 'react'
import { FaGift, FaUser } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'

const LeaderboardView = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50

  // Generate 230 leaderboard entries
  const generateLeaderboardData = () => {
    const data = []
    const basePoints = 1000000000
    const userIds = [
      "434...5d5", "7a2...9f1", "3b8...2c4", "9e1...7d8", "2f5...4a6", "8c3...1b9", "6d7...5e2", "4a9...8c1", "1b2...6f4",
      "5c3...7e8", "9f1...2a5", "8b4...6c9", "3e7...1d2", "6a9...4f8", "2c5...8b1", "7d3...9e6", "4f8...2a7", "1b6...5c3",
      "9e2...7f4", "5a8...3c1", "8d6...9b2", "3f1...7e5", "6c4...2a9", "2b7...8d3", "7e9...1f6", "4a2...5c8", "1d5...9b7",
      "8f3...6e1", "5b9...2c4", "3e6...7a8", "9c1...4f5", "6a7...8d2", "2f4...9b6", "7d8...3e1", "4c5...6a9", "1b2...7f8",
      "8e6...4c3", "5f9...1a7", "3d2...8b5", "9a4...6e8", "6c7...2f1", "2b5...9d3", "7f8...4a6", "4e1...7c9", "1a3...5b2"
    ]

    for (let i = 0; i < 230; i++) {
      const rank = i + 1
      const pointsVariation = Math.floor(Math.random() * 500000000) + 10000000
      const totalPoints = basePoints - (i * 2000000) + pointsVariation
      const tradingPoints = Math.floor(totalPoints * (0.8 + Math.random() * 0.2))
      const referralPoints = totalPoints - tradingPoints
      const userId = userIds[i % userIds.length]

      data.push({
        rank,
        userId,
        totalPoints: totalPoints.toLocaleString(),
        trading: tradingPoints.toLocaleString(),
        referrals: referralPoints.toLocaleString()
      })
    }

    return data
  }

  const leaderboardData = generateLeaderboardData()

  // Calculate pagination
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = leaderboardData.slice(startIndex, endIndex)

  return (
    <div className="w-full h-full">
      {/* Central Icon */}
      <div className="flex justify-center mb-6 sm:mb-8 py-6 sm:py-10">
        <div className="flex justify-center items-center bg-orange-500 rounded-lg w-12 h-12 sm:w-16 sm:h-16">
          <FaGift className="text-white text-lg sm:text-2xl" />
        </div>
      </div>

      {/* Points Leaderboard */}
      <div className="bg-[#0d0f18] p-3 sm:p-6 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
          <h2 className="font-bold text-white text-lg sm:text-xl">Points Leaderboard</h2>
          <div className="flex flex-wrap gap-1 sm:gap-2 w-full sm:w-auto">
            {/* Previous button */}
            <button
              title="Previous"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-1 sm:px-2 py-1 rounded text-xs sm:text-sm ${currentPage === 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              <MdNavigateNext className="text-white text-xs sm:text-sm rotate-180" />
            </button>

            {/* Page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum
              if (totalPages <= 5) {
                pageNum = i + 1
              } else if (currentPage <= 3) {
                pageNum = i + 1
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i
              } else {
                pageNum = currentPage - 2 + i
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm ${currentPage === pageNum
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                >
                  {pageNum}
                </button>
              )
            })}

            {/* Next button */}
            <button
              title="Next"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-1 sm:px-2 py-1 rounded text-xs sm:text-sm ${currentPage === totalPages
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              <MdNavigateNext className="text-white text-xs sm:text-sm" />
            </button>

            <div className="flex items-center gap-1 sm:gap-2 ml-1 sm:ml-2 px-2 sm:px-3 py-1 border-[1px] border-gray-900 rounded-full text-white cursor-pointer">
              <FaUser className="text-white text-xs sm:text-sm" />
              <span className="text-white text-xs">
                YOU
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Leaderboard */}
        <div className="lg:hidden">
          {currentData.map((user, index) => (
            <div key={startIndex + index} className={`p-3 border border-gray-800 rounded-lg mb-3 ${user.rank === 1 ? 'border-yellow-500' : ''}`}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-sm ${user.rank === 1 ? 'text-yellow-500' : 'text-white'}`}>#{user.rank}</span>
                  <span className={`text-sm ${user.rank === 1 ? 'text-yellow-500' : 'text-white'}`}>{user.userId}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-gray-400 mb-1">Total</div>
                  <div className="text-white">{user.totalPoints}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400 mb-1">Trading</div>
                  <div className="text-white">{user.trading}</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-400 mb-1">Referrals</div>
                  <div className="text-white">{user.referrals}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Leaderboard */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-gray-700 border-b text-gray-400 text-sm text-left">
                <th className="pb-3">Rank</th>
                <th className="pb-3">User ID</th>
                <th className="pb-3">Total Points</th>
                <th className="pb-3">Trading</th>
                <th className="pb-3">Referrals</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((user, index) => (
                <tr key={startIndex + index} className="border-gray-800 border-b">
                  <td className={`py-3 ${user.rank === 1 ? 'text-yellow-500 font-bold' : 'text-white'}`}>
                    {user.rank}
                  </td>
                  <td className={`py-3 ${user.rank === 1 ? 'text-yellow-500 font-bold' : 'text-white'}`}>
                    {user.userId}
                  </td>
                  <td className="py-3">
                    <div className="flex flex-col">
                      <div className="flex justify-center items-center gap-2 px-4 py-1 border-[1px] border-gray-900 rounded-full max-w-[140px]">
                        <div className="flex flex-col">
                          <div className="bg-gray-600 rounded-full w-2 h-2"></div>
                          <div className="bg-gray-500 rounded-full w-1 h-1"></div>
                        </div>
                        <span className="text-white text-sm">{user.totalPoints}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <div className="bg-gray-600 rounded-full w-2 h-2"></div>
                        <div className="bg-gray-500 rounded-full w-1 h-1"></div>
                      </div>
                      <span className="text-white text-sm">{user.trading}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col">
                        <div className="bg-gray-600 rounded-full w-2 h-2"></div>
                        <div className="bg-gray-500 rounded-full w-1 h-1"></div>
                      </div>
                      <span className="text-white text-sm">{user.referrals}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-400 text-xs sm:text-sm gap-2 sm:gap-0">
          <span>Showing {startIndex + 1}-{Math.min(endIndex, leaderboardData.length)} of {leaderboardData.length} entries</span>
          <span>Page {currentPage} of {totalPages}</span>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardView
