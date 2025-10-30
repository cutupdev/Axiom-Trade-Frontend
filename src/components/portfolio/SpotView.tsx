"use client"

import React from 'react'
import { FaAngleDown, FaExternalLinkAlt, FaEyeSlash, FaSearch, FaSort } from 'react-icons/fa'
import Image from 'next/image'
import solIcon from '@/../public/images/sol.png'
import { MdOutlineFileUpload } from 'react-icons/md'
import { BiCalendarEvent } from 'react-icons/bi'
import { IoSwapVertical } from 'react-icons/io5'

const SpotView = () => {
  return (
    <div className="w-full h-full">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-1 px-2 py-1 border-[1px] border-gray-800 rounded-full cursor-pointer">
              <span className="font-medium text-white text-sm">Axiom Main</span>
              <FaAngleDown className="text-gray-400 text-sm" />
            </div>
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer" aria-label="External link" type="button">
                <FaExternalLinkAlt className="text-sm" />
              </button>
              <button className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer" aria-label="Search" type="button">
                <FaSearch className="text-sm" />
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex flex-row justify-start items-center gap-2">
                <Image src={solIcon} alt="solIcon" width={14} height={14} />
                <span className="font-medium text-white text-sm">0</span>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="relative flex flex-row justify-start items-center w-6 h-3">
                  <div className="top-0 left-0 z-[3] absolute bg-gray-800 rounded-sm w-3 h-3"></div>
                  <div className="top-0 left-1 z-[2] absolute bg-gray-700 rounded-sm w-3 h-3"></div>
                  <div className="top-0 left-2 z-[1] absolute bg-gray-600 rounded-sm w-3 h-3"></div>
                </div>
                <span className="font-medium text-white text-sm">0</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-xs" type="button">1d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-xs" type="button">7d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-xs" type="button">30d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-xs" type="button">Max</button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center gap-1 px-2 py-1 border-[1px] border-gray-800 rounded-full cursor-pointer">
              <span className="font-medium text-white text-sm">Axiom Main</span>
              <FaAngleDown className="text-gray-400 text-base" />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-row justify-start items-center gap-2">
                <Image src={solIcon} alt="solIcon" width={16} height={16} />
                <span className="font-medium text-white text-sm">0</span>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="relative flex flex-row justify-start items-center w-8 h-4">
                  <div className="top-0 left-0 z-[3] absolute bg-gray-800 rounded-sm w-4 h-4"></div>
                  <div className="top-0 left-2 z-[2] absolute bg-gray-700 rounded-sm w-4 h-4"></div>
                  <div className="top-0 left-4 z-[1] absolute bg-gray-600 rounded-sm w-4 h-4"></div>
                </div>
                <span className="font-medium text-white text-sm">0</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer" aria-label="External link" type="button">
                <FaExternalLinkAlt className="text-base" />
              </button>
              <button className="px-2 py-1 text-gray-400 hover:text-white cursor-pointer" aria-label="Search" type="button">
                <FaSearch className="text-base" />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-sm" type="button">1d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-sm" type="button">7d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-sm" type="button">30d</button>
              <button className="hover:bg-gray-800 px-2 py-1 rounded-sm text-gray-400 hover:text-white text-sm" type="button">Max</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#101114] border-[1px] border-gray-800 rounded-lg w-full h-full">
        {/* Mobile Layout - Stacked */}
        <div className="flex lg:hidden flex-col w-full h-full">
          {/* Balance Section */}
          <div className="flex flex-col py-3 border-gray-800 border-b w-full">
            <h3 className="mb-4 px-3 font-semibold text-white text-lg">Balance</h3>
            <div className="space-y-3">
              <div className="px-3">
                <p className="text-gray-400 text-sm">Total Value</p>
                <p className="font-bold text-white text-lg">$0</p>
              </div>
              <div className="px-3">
                <p className="text-gray-400 text-sm">Unrealized PNL</p>
                <p className="font-bold text-white text-lg">$0</p>
              </div>
              <div className="px-3 pt-3 border-gray-800 border-t">
                <p className="text-gray-400 text-sm">Available Balance</p>
                <p className="font-bold text-white text-lg">$0</p>
              </div>
            </div>
          </div>

          {/* PNL Graph Section */}
          <div className="px-3 py-4 border-gray-800 border-b w-full">
            <div className="flex flex-row justify-between items-center w-full mb-3">
              <h3 className="font-semibold text-white text-base">Realized PNL</h3>
              <BiCalendarEvent className="text-white text-base cursor-pointer" />
            </div>
            <div className="relative p-2 h-32">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 120">
                  <path d="M 20 100 Q 60 80 100 70 T 180 50 T 260 40 T 340 20 T 380 10" stroke="#3B82F6" strokeWidth="2" fill="none" />
                  <circle cx="20" cy="100" r="2" fill="#3B82F6" />
                  <circle cx="100" cy="70" r="2" fill="#3B82F6" />
                  <circle cx="200" cy="50" r="2" fill="#3B82F6" />
                  <circle cx="300" cy="30" r="2" fill="#3B82F6" />
                  <circle cx="380" cy="10" r="2" fill="#3B82F6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Performance Section */}
          <div className="px-3 py-4 border-gray-800 border-b w-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-white text-base">Performance</h3>
              <MdOutlineFileUpload className="text-white text-base cursor-pointer" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Unrealized PNL</span>
                <span className="text-white text-sm">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Realized PNL</span>
                <span className="text-white text-sm">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total TXNS</span>
                <span className="text-white text-sm">0 / 0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex flex-row justify-center items-center border-gray-800 border-b-[1px] w-full h-full">
          {/* Balance Panel */}
          <div className="flex flex-col py-3 w-full max-w-[450px] h-full">
            <h3 className="mb-6 px-4 font-semibold text-white text-xl">Balance</h3>
            <div className="space-y-4">
              <div className="px-4">
                <p className="text-gray-400 text-sm">Total Value</p>
                <p className="font-bold text-white text-xl">$0</p>
              </div>
              <div className="px-4">
                <p className="text-gray-400 text-sm">Unrealized PNL</p>
                <p className="font-bold text-white text-xl">$0</p>
              </div>
              <div className="px-4 pt-4 border-gray-800 border-t">
                <p className="text-gray-400 text-sm">Available Balance</p>
                <p className="font-bold text-white text-xl">$0</p>
              </div>
            </div>
          </div>

          {/* Realized PNL Graph Panel */}
          <div className="px-4 py-6 border-r-[1px] border-r-gray-800 border-l-[1px] border-l-gray-800 w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <h3 className="font-semibold text-white text-lg">Realized PNL</h3>
              <BiCalendarEvent className="text-white text-lg cursor-pointer" />
            </div>
            <div className="relative p-4 h-48">
              {/* Test Chart */}
              <div className="relative w-full h-full">
                {/* Chart Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                  <div className="bg-gray-700 w-full h-px"></div>
                </div>

                {/* Chart Data Line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                  <path
                    d="M 20 160 Q 60 120 100 100 T 180 80 T 260 60 T 340 40 T 380 20"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    className="drop-shadow-sm"
                  />

                  {/* Data Points */}
                  <circle cx="20" cy="160" r="3" fill="#3B82F6" />
                  <circle cx="60" cy="120" r="3" fill="#3B82F6" />
                  <circle cx="100" cy="100" r="3" fill="#3B82F6" />
                  <circle cx="140" cy="90" r="3" fill="#3B82F6" />
                  <circle cx="180" cy="80" r="3" fill="#3B82F6" />
                  <circle cx="220" cy="70" r="3" fill="#3B82F6" />
                  <circle cx="260" cy="60" r="3" fill="#3B82F6" />
                  <circle cx="300" cy="50" r="3" fill="#3B82F6" />
                  <circle cx="340" cy="40" r="3" fill="#3B82F6" />
                  <circle cx="380" cy="20" r="3" fill="#3B82F6" />

                  {/* Area Fill */}
                  <path
                    d="M 20 160 Q 60 120 100 100 T 180 80 T 260 60 T 340 40 T 380 20 L 380 200 L 20 200 Z"
                    fill="url(#gradient)"
                    opacity="0.1"
                  />

                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                </svg>

              </div>
            </div>
          </div>

          {/* Performance Panel */}
          <div className="p-4 rounded-lg w-full max-w-[450px] h-full">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-white text-xl">Performance</h3>
              <MdOutlineFileUpload className="text-white text-lg cursor-pointer" />
            </div>
            <div className="">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Unrealized PNL</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Realized PNL</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Total TXNS</span>
                <span className="text-white">0 / 0</span>
              </div>
              <div className="pt-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-400 text-sm">&gt;500%</span>
                  </div>
                  <span className="text-white">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-400 text-sm">200% ~ 500%</span>
                  </div>
                  <span className="text-white">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-400 text-sm">0% ~ 200%</span>
                  </div>
                  <span className="text-white">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-400 text-sm">0% ~ -50%</span>
                  </div>
                  <span className="text-white">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    <span className="text-gray-400 text-sm">&lt; -50%</span>
                  </div>
                  <span className="text-white">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center w-full h-auto lg:h-[600px]">
          {/* Active Positions Section */}
          <div className="flex flex-col border-gray-800 lg:border-r w-full h-full lg:h-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-3 border-gray-800 border-b h-auto lg:h-[50px] gap-3 lg:gap-0">
              <div className="flex gap-2 lg:gap-4 text-sm">
                <button className="px-1 text-gray-600 hover:text-white cursor-pointer" type="button">Active Positions</button>
                <button className="px-1 text-gray-600 hover:text-white cursor-pointer" type="button">History</button>
                <button className="px-1 text-gray-600 hover:text-white cursor-pointer" type="button">Top 100</button>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 lg:gap-4 w-full lg:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="Search by name or address"
                      className="bg-gray-800 px-2 border border-gray-800 rounded-full outline-none w-full sm:w-44 h-6 text-white text-xs"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-gray-600 hover:text-white cursor-pointer">
                      <FaEyeSlash className="text-[12px] lg:text-[14px]" />
                      <span className="text-xs">Show Hidden</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 hover:text-white cursor-pointer">
                      <IoSwapVertical className='text-[12px] lg:text-[14px]' />
                      <span className="text-xs">USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              {/* Mobile Table */}
              <div className="lg:hidden">
                <div className="flex flex-col gap-2 p-3">
                  <div className="text-center text-gray-400 py-8">No active positions</div>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className='border-gray-800 border-b-[1px]'>
                    <tr className="flex py-1 font-medium text-gray-600 text-sm">
                      <th className="w-full">Token</th>
                      <th className="w-full">Bought</th>
                      <th className="w-full">Sold</th>
                      <th className="flex justify-center items-center gap-1 w-full">
                        Remaining
                        <FaSort className='text-gray-600 text-sm' />
                      </th>
                      <th className="w-full">PNL</th>
                      <th className="w-full">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="py-8 text-gray-400 text-center">No active positions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="w-full h-full border-gray-800 lg:border-l border-t lg:border-t-0">
            <div className="p-3 border-gray-800 border-b h-auto lg:h-[50px]">
              <button className="px-1 font-medium text-white text-sm text-start cursor-pointer" type="button">Activity</button>
            </div>
            <div className="">
              {/* Mobile Activity */}
              <div className="lg:hidden">
                <div className="flex flex-col gap-2 p-3">
                  <div className="text-center text-gray-400 py-8">No activity</div>
                </div>
              </div>

              {/* Desktop Activity */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className='border-gray-800 border-b-[1px]'>
                    <tr className="flex py-1 text-gray-400 text-sm text-left">
                      <th className="w-full text-center">Type</th>
                      <th className="w-full text-center">Token</th>
                      <th className="flex items-center gap-1 w-full text-center">
                        Amount
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </th>
                      <th className="flex items-center gap-1 w-full text-center">
                        Market Cap
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </th>
                      <th className="w-full text-center">Age</th>
                      <th className="w-full text-center">Explorer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={6} className="py-8 text-gray-400 text-center">No activity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotView
