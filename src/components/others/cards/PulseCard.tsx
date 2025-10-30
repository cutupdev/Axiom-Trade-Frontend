'use client'

import React, { useContext, useState } from 'react'
import Image from 'next/image'
import UserContext from "@/contexts/usercontext";
import TokenIcon from "@/../public/logo.png"
import solIcon from "@/../public/images/sol.png"

import { CiUser, CiCamera } from 'react-icons/ci'
import { TbChessKing, TbWorld } from 'react-icons/tb'
import { FaTelegramPlane, FaRegCopy, FaUserCheck, FaDiscord, FaEyeSlash, FaMeteor } from 'react-icons/fa'
import { GiBehold } from 'react-icons/gi'
import { PiChartPolar, PiTrainSimple } from 'react-icons/pi'
import { BsUbuntu } from 'react-icons/bs'
import { TbChartCandle } from 'react-icons/tb'
import { LuUsersRound } from 'react-icons/lu'
import { TfiCup } from 'react-icons/tfi'
import { MdNavigateNext } from "react-icons/md";


interface PulseCardProps {
  item: any;
  index: number;
  hiddenIds: Set<string>;
  setHiddenIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function PulseCard({ item, index, hiddenIds, setHiddenIds }: PulseCardProps) {
  const { tokenList, setTokenList, currentAmount, setCurrentAmount, tokenFilterList, selectedTokenList, setSelectedTokenList, swapTokenList, setSwapTokenList, successAlert } = useContext<any>(UserContext);
  const [nowSec, setNowSec] = useState<number>(Math.floor(Date.now() / 1000));


  const ellipsize = (value: any, maxLen: number) => {
    const text = String(value ?? '');
    return text.length > maxLen ? `${text.slice(0, Math.max(0, maxLen - 1))}…` : text;
  };

  const formatSince = (creationTimestamp?: number) => {
    if (!creationTimestamp || !Number.isFinite(Number(creationTimestamp))) return '-';
    const delta = Math.max(0, nowSec - Number(creationTimestamp));
    if (delta < 60) return `${delta}s`;
    const minutes = Math.floor(delta / 60);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
  };
  return (
    <div key={item.id || item.address || index} className="group flex flex-row flex-grow justify-start items-center bg-backgroundSecondary sm:hover:bg-gray-900 active:bg-gray-800 sm:p-[8px] px-0 border-gray-600 border-b-[1px] rounded-b-[0px] w-full h-[94px] whitespace-nowrap cursor-pointer">
      <div className="relative flex flex-row flex-grow items-center gap-2 w-full h-full">
        <div className="-top-1 left-1 z-50 absolute flex justify-center items-center bg-backgroundTertiary opacity-0 group-hover:opacity-100 border border-secondaryStroke/50 rounded-[4px] w-[24px] h-[24px] text-textTertiary hover:text-primaryBlueHover transition-opacity duration-0" onClick={(e) => { e.stopPropagation(); const key = (item?.address || item?.id || "") as string; if (key) { setHiddenIds((prev: Set<string>) => { const next = new Set(prev); next.add(key); return next; }); } }}>
          <FaEyeSlash className="text-[14px]" />
        </div>
        <div className="flex flex-row justify-between items-center gap-[8px] px-[6px] w-full">
          <div className="flex flex-row justify-between items-center w-full">


            <div className="flex flex-col justify-end items-end gap-[2px]">
              <div className="flex flex-row justify-end items-center gap-1">
                <span className="text-[10px] text-gray-800">MC</span>
                <span className="text-[12px] text-green-600">$7.25K</span>
              </div>

              <div className="flex flex-row justify-end items-center gap-1">
                <span className="text-[10px] text-gray-800">V</span>
                <span className="text-[12px] text-green-600">$751</span>
              </div>

              <div className="flex flex-row justify-center items-end gap-[6px]">
                <div className="flex flex-row justify-center items-center gap-[2px]">
                  <span className="text-[10px] text-gray-800">F</span>
                  <Image src={solIcon} alt="SolIcon" className="w-[8px] h-[8px]" />
                  <span className="text-[10px] text-red-700">0.01</span>
                </div>
                <div className="flex flex-row justify-center items-center gap-[2px]">
                  <span className="text-[10px] text-gray-800">TX</span>
                  <span className="text-[10px] text-red-700">3</span>
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-start items-start bg-red-700 rounded-full w-3 h-[1px] object-cover overflow-hidden">
                      <div style={{ width: '80%' }} className="flex flex-row bg-[#22c55e] h-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-end items-center gap-1">
                <div className="flex flex-col justify-center items-center border-[1px] border-red-700 rounded-full w-4 h-4">
                  <FaMeteor className='text-[9px] text-red-700 rotate-180' />
                </div>

                <div className="flex flex-row justify-center items-center">
                  <MdNavigateNext className='text-[10px] text-gray-800' />
                  <MdNavigateNext className='text-[10px] text-gray-800' />
                  <MdNavigateNext className='text-[10px] text-gray-800' />
                </div>

                <div className="flex flex-col justify-center items-center border-[1px] border-yellow-600 rounded-full w-4 h-4">
                  <FaMeteor className='text-[9px] text-yellow-600 rotate-180' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >
    </div >
  )
}
