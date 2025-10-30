"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import solIcon from '@/../public/images/sol.png'
import { FaEllipsisV, FaEye, FaEyeSlash, FaRegCopy, FaSearch } from 'react-icons/fa'
import { GoDownload } from 'react-icons/go'

const WalletsView = () => {
  const [showArchived, setShowArchived] = useState(false)

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Navigation and Balance */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-medium text-white text-sm">Axiom Main</span>
              <div className="flex flex-row justify-start items-center gap-2">
                <Image src={solIcon} alt="solIcon" width={14} height={14} className="sm:w-4 sm:h-4" />
                <span className="font-medium text-white text-sm">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row justify-start items-start border-[1px] border-gray-800 rounded-lg w-full h-full">
        {/* Left Panel - Wallet Management */}
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col">
            {/* Mobile Search and Action Buttons */}
            <div className="flex lg:hidden flex-col gap-3 px-3 py-3 border-gray-800 border-b">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search by name or address"
                  className="bg-transparent px-3 py-2 border border-gray-800 rounded-full outline-none w-full text-white text-xs"
                />
                <FaSearch className="top-1/2 right-3 absolute w-3 h-3 text-gray-400 -translate-y-1/2 transform" />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <div
                  onClick={() => setShowArchived(!showArchived)}
                  className="flex items-center gap-2 px-2 py-1 text-gray-600 hover:text-white cursor-pointer"
                >
                  {showArchived ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  <span className="text-sm">{showArchived ? "Hide Archived" : "Show Archived"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-900 hover:bg-gray-800 px-3 py-1 rounded-full text-white text-xs cursor-pointer" type="button">
                    Import
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-white text-xs cursor-pointer" type="button">
                    Create Wallet
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Search and Action Buttons */}
            <div className="hidden lg:flex flex-row justify-between items-center px-3 border-gray-800 border-b h-[50px]">
              <div className="relative flex-1 max-w-[220px]">
                <input
                  type="text"
                  placeholder="Search by name or address"
                  className="bg-transparent px-3 py-1 border border-gray-800 rounded-full outline-none w-full text-white text-xs"
                />
                <FaSearch className="top-1/2 right-3 absolute w-4 h-4 text-gray-400 -translate-y-1/2 transform" />
              </div>
              <div className="flex items-center gap-2">
                <div
                  onClick={() => setShowArchived(!showArchived)}
                  className="flex items-center gap-2 px-3 py-1 text-gray-600 hover:text-white cursor-pointer"
                >
                  {showArchived ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                  <span className="text-sm">{showArchived ? "Hide Archived" : "Show Archived"}</span>
                </div>
                <button className="bg-gray-900 hover:bg-gray-800 px-3 py-1 rounded-full text-white text-xs cursor-pointer" type="button">
                  Import
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-full text-white text-xs cursor-pointer" type="button">
                  Create Wallet
                </button>
              </div>
            </div>

            {/* Mobile Wallet List */}
            <div className="lg:hidden">
              <div className="p-3">
                <div className="flex flex-col gap-3 p-3 border border-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="border-gray-500 rounded" aria-label="Select wallet" />
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white text-sm">Axiom Main</span>
                        <button type="button" aria-label="Copy wallet address" className="flex items-center">
                          <FaRegCopy className="text-[10px] text-gray-600 hover:text-white cursor-pointer" />
                        </button>
                      </div>
                      <span className="text-gray-600 text-xs">45RY_9C5h</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs">Balance:</span>
                      <div className="flex flex-row justify-center items-center gap-1 px-2 py-1 border-[1px] border-gray-800 rounded-full h-5">
                        <Image src={solIcon} alt="solIcon" width={10} height={10} />
                        <span className="text-white text-xs">0</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-xs">Holdings:</span>
                      <div className="relative flex flex-row justify-center items-center border-[1px] border-gray-800 rounded-full w-8 h-4">
                        <div className="top-[2px] left-1 z-[3] absolute bg-gray-800 rounded-sm w-2 h-2"></div>
                        <div className="top-[2px] left-2 z-[2] absolute bg-gray-700 rounded-sm w-2 h-2"></div>
                        <div className="top-[2px] left-3 z-[1] absolute bg-gray-600 rounded-sm w-2 h-2"></div>
                      </div>
                      <span className="text-gray-400 text-xs">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Wallet List Table */}
            <div className="hidden lg:block overflow-hidden">
              <table className="w-full">
                <thead className="py-1 border-gray-800 border-b">
                  <tr className="">
                    <th className="font-medium text-sm text-left">
                    </th>
                    <th className="justify-start items-center pl-[16px] min-w-[220px] max-w-[220px] font-normal text-[12px] text-gray-600 text-start leading-[16px]">
                      Wallet
                    </th>
                    <th className="justify-start items-center min-w-[56px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">
                      Balance
                    </th>
                    <th className="justify-start items-center min-w-[56px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">
                      Holdings
                    </th>
                    <th className="px-4 w-full font-normal text-[12px] text-gray-600 text-right leading-[16px]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="p-3">
                      <input type="checkbox" className="border-gray-500 rounded" aria-label="Select wallet" />
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-row justify-start items-center gap-1">
                          <span className="font-medium text-white text-sm">Axiom Main</span>
                          <span className="text-gray-600 text-xs">45RY_9C5h</span>
                        </div>
                        <button type="button" aria-label="Copy wallet address" className="flex items-center">
                          <FaRegCopy className="text-[12px] text-gray-600 hover:text-white cursor-pointer" />
                        </button>
                      </div>
                    </td>
                    <td className="min-w-[100px]">
                      <div className="flex flex-row justify-center items-center gap-1 px-2 py-1 border-[1px] border-gray-800 rounded-full w-12 h-6">
                        <Image src={solIcon} alt="solIcon" width={12} height={12} />
                        <span className="text-white text-sm">0</span>
                      </div>
                    </td>
                    <td className="min-w-[100px]">
                      <div className="flex items-center gap-2">
                        <div className="relative flex flex-row justify-center items-center py-1 border-[1px] border-gray-800 rounded-full w-10 h-5">
                          <div className="top-[3px] left-1 z-[3] absolute bg-gray-800 rounded-sm w-3 h-3"></div>
                          <div className="top-[3px] left-3 z-[2] absolute bg-gray-700 rounded-sm w-3 h-3"></div>
                          <div className="top-[3px] left-5 z-[1] absolute bg-gray-600 rounded-sm w-3 h-3"></div>
                        </div>
                        <span className="text-gray-400">0</span>
                      </div>
                    </td>
                    <td className="p-3">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Panel - Wallet Transfer/Distribution */}
        <div className="border-gray-800 lg:border-l border-t lg:border-t-0 w-full h-full">
          <div className="flex flex-col h-full">
            {/* Source Wallets */}
            <div className="w-full h-full">
              <h3 className="flex justify-start items-center p-3 border-gray-800 border-b h-auto lg:h-[50px] font-semibold text-white text-sm">Source wallets</h3>
              <div className="w-full h-full min-h-[300px] overflow-hidden">
                {/* Mobile Source Wallets */}
                <div className="lg:hidden">
                  <div className="flex flex-col justify-center items-center gap-3 py-8 w-full h-full min-h-[180px] text-center">
                    <GoDownload className="text-[40px] sm:text-[60px] text-gray-400" />
                    <p className="text-gray-400 text-sm">Drag wallets to distribute SOL</p>
                  </div>
                </div>

                {/* Desktop Source Wallets */}
                <div className="hidden lg:block">
                  <table className="w-full">
                    <thead className="border-gray-800 border-b w-full">
                      <tr>
                        <th className="justify-start items-center pl-[16px] min-w-[220px] max-w-[220px] font-normal text-[12px] text-gray-600 text-start leading-[16px]">Wallet</th>
                        <th className="justify-start items-center min-w-[86px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">Balance</th>
                        <th className="justify-start items-center min-w-[86px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">Holdings</th>
                        <th className="px-4 w-full font-normal text-[12px] text-gray-600 text-right leading-[16px]">Actions</th>
                      </tr>
                    </thead>
                    <tbody className='flex flex-col w-full h-full'>
                    </tbody>
                  </table>
                  <div className="flex flex-col justify-center items-center gap-5 py-10 w-full h-full min-h-[240px] max-h-[250px] text-center">
                    <GoDownload className="text-[80px] text-gray-400" />
                    <p className="text-gray-400 text-sm">Drag wallets to distribute SOL</p>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center p-2 w-full">
                  <h3 className="flex justify-start items-center px-3 font-semibold text-gray-600 text-xs">Destination</h3>
                  <button className="flex flex-col bg-[#526fff] hover:bg-[#526fff]/90 px-3 py-1 rounded-full" type="button">
                    <span className="text-white text-xs">Start Transfer</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div className="w-full h-full min-h-[200px] lg:min-h-[300px] overflow-hidden">
              {/* Mobile Destination */}
              <div className="lg:hidden">
                <div className="bg-gray-900 p-3 border-gray-800 border-b">
                  <span className="font-normal text-[12px] text-gray-600">Destination</span>
                </div>
                <div className="flex flex-col justify-center items-center py-8 min-h-[150px]">
                  <span className="text-gray-400 text-sm">Drop wallets here</span>
                </div>
              </div>

              {/* Desktop Destination */}
              <div className="hidden lg:block">
                <table className="w-full h-full min-h-[300px]">
                  <thead className="bg-gray-900 border-gray-800 border-b w-full">
                    <tr className=''>
                      <th className="justify-start items-center py-2 pl-[16px] min-w-[220px] max-w-[220px] font-normal text-[12px] text-gray-600 text-start leading-[16px]">Wallet</th>
                      <th className="justify-start items-center min-w-[86px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">Balance</th>
                      <th className="justify-start items-center min-w-[86px] max-w-[100px] font-normal text-[12px] text-gray-600 text-start">Holdings</th>
                      <th className="px-4 w-full font-normal text-[12px] text-gray-600 text-right leading-[16px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="flex flex-col flex-1 justify-center items-center py-8">
                      </td>
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

export default WalletsView
