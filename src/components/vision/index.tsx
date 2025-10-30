"use client";

import { useContext, useEffect, useState } from "react";
import UserContext from "@/contexts/usercontext";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import Image from "next/image";
import solIcon from "@/../public/images/sol.png";
import TestTokenImg from "@/../public/images/test_token.png";
import { FaTableCellsLarge, FaXTwitter } from "react-icons/fa6";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { MdOutlineWindow } from "react-icons/md";

const SelectDataList = [
  {
    id: 1,
    title: "KOL",
    data: "kol",
  },
  {
    id: 2,
    title: "Global",
    data: "global",
  },
  {
    id: 3,
    title: "Your Wallets",
    data: "your-wallets",
  },
  {
    id: 4,
    title: "Tracked",
    data: "tracked",
  },
];

const FilterTimeList = [
  {
    id: 1,
    title: "1d",
  },
  {
    id: 2,
    title: "3d",
  },
  {
    id: 3,
    title: "7d",
  },
  {
    id: 4,
    title: "14d",
  },
  {
    id: 5,
    title: "30d",
  },
];

export default function VisionPage() {
  const { setLoadingState } = useContext<any>(UserContext);
  const [selectData, setSelectData] = useState<string>("kol");
  const [search, setSearch] = useState<string>("");
  const [filterTime, setFilterTime] = useState<string>("7d");
  const [rotate, setRotate] = useState<number>(0);
  const [isTradeOpen, setIsTradeOpen] = useState<boolean>(false);
  const [tradeSide, setTradeSide] = useState<"long" | "short">("long");

  const openTrade = (side: "long" | "short") => {
    setTradeSide(side);
    setIsTradeOpen(true);
  };
  const closeTrade = () => setIsTradeOpen(false);

  // Close the sheet when switching tabs or on desktop breakpoint
  useEffect(() => {
    setIsTradeOpen(false);
  }, [selectData]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTrade();
    };
    window.addEventListener("keydown", onKey);
    const media = window.matchMedia("(min-width: 640px)");
    const handleMedia = () => media.matches && closeTrade();
    media.addEventListener?.("change", handleMedia);
    return () => {
      window.removeEventListener("keydown", onKey);
      media.removeEventListener?.("change", handleMedia);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  }, []);

  return (
    <div className="relative isolate z-10 flex flex-col justify-center items-center mx-auto px-3 sm:px-5 py-4 sm:py-8 w-full max-w-[1440px] h-full overflow-x-hidden">
      <div className="flex flex-col justify-start items-center gap-3 sm:gap-4 w-full">
        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-3 w-full">
          {/* Sticky controls */}
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur -mx-3 px-3 pt-2 pb-2 border-b border-gray-900">
            {/* Top Row - Data Selection */}
            <div className="flex flex-row justify-start items-center gap-2 overflow-x-auto pb-2">
              {SelectDataList.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row justify-start items-center text-gray-600"
                  onClick={() => setSelectData(item.data)}
                >
                  <div
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full font-medium text-sm tracking-[-0.02em] cursor-pointer transition-colors border ${
                      selectData === item.data
                        ? "text-white bg-gray-800 border-gray-800"
                        : "text-gray-600 border-gray-900 hover:bg-gray-900"
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Search and Apply */}
            <div className="flex flex-row justify-between items-center gap-2 w-full">
              <div className="flex flex-row justify-center items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-full text-white text-xs cursor-pointer">
                <span>+</span>
                <span>Apply</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 px-3 py-1.5 border border-gray-900 rounded-full flex-1 max-w-[240px]">
                <CiSearch className="text-sm text-gray-600" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search KOLs..."
                  className="bg-transparent outline-none w-full font-medium text-xs text-gray-600 placeholder:text-gray-600 text-left"
                />
              </div>
            </div>

            {/* Third Row - Sort and Time Filters */}
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="flex flex-row justify-center items-center gap-1 hover:bg-gray-900 px-2 py-1 border border-gray-800 rounded-full cursor-pointer">
                  <span className="font-medium text-xs text-gray-600">
                    Sort by <strong className="text-white text-xs">PnL</strong>
                  </span>
                  <FaAngleDown className="text-xs text-gray-600" />
                </div>
                <div className="flex justify-center items-center bg-gray-800 hover:bg-gray-700 p-1 border border-gray-900 rounded-full text-white cursor-pointer">
                  <HiOutlineBarsArrowDown className="text-sm text-white" />
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-1 overflow-x-auto">
                {FilterTimeList.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-row justify-center items-center hover:bg-gray-900 px-2 py-1 rounded cursor-pointer border border-transparent hover:border-gray-800"
                    onClick={() => setFilterTime(item.title)}
                  >
                    <span
                      className={`font-medium text-xs whitespace-nowrap ${
                        filterTime === item.title
                          ? "text-[#526fff]"
                          : "text-gray-600"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center gap-4 text-gray-600">
              {SelectDataList.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row justify-start items-center gap-4 text-gray-600"
                  onClick={() => setSelectData(item.data)}
                >
                  <div
                    className={`font-medium text-lg xl:text-xl tracking-[-0.02em] hover:text-white cursor-pointer ${
                      selectData === item.data ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              <div className="flex flex-row justify-center items-center gap-1 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-white text-sm cursor-pointer">
                <span>+</span>
                <span>Apply</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 px-2 py-1 border border-gray-900 rounded-full w-full max-w-[240px]">
                <CiSearch className="text-lg text-gray-600" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by token or CA..."
                  className="bg-transparent outline-none w-full font-medium text-sm text-gray-600 placeholder:text-gray-600 text-left"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center px-3 w-full">
            <div className="flex flex-row justify-start items-center gap-3">
              <div className="flex flex-row justify-center items-center gap-2 hover:bg-gray-900 px-3 py-1 border border-gray-800 rounded-full cursor-pointer">
                <span className="pr-1 font-medium text-sm text-gray-600">
                  Sort by <strong className="text-white">PnL SOL</strong>{" "}
                </span>
                <FaAngleDown className="text-sm text-gray-600" />
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-800 hover:bg-gray-700 p-1 border border-gray-900 rounded-full text-white cursor-pointer">
                <HiOutlineBarsArrowDown className="text-lg text-white" />
              </div>
            </div>
            <div className="flex flex-row justify-end items-center gap-3">
              {FilterTimeList.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row justify-center items-center hover:bg-gray-900 px-2 py-1 rounded cursor-pointer"
                  onClick={() => setFilterTime(item.title)}
                >
                  <span
                    className={`font-medium text-sm ${
                      filterTime === item.title
                        ? "text-[#526fff]"
                        : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectData === "kol" && (
          <>
            <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 w-full">
              {/* Rank 1 Card - Full Width at Top */}
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative flex flex-col gap-3 mx-auto p-3 sm:p-4 border border-gray-900 rounded-lg sm:rounded-xl w-full max-w-[550px]">
                  <div className="-top-8 sm:-top-12 right-1/2 absolute flex flex-col justify-center items-center border border-gray-900 rounded-full w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm text-white bg-background">
                    1
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex sm:hidden flex-col gap-3 w-full">
                    <div className="flex flex-row justify-between items-start w-full">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <div className="bg-gray-900 rounded w-12 h-12 overflow-hidden">
                          <Image
                            src={TestTokenImg}
                            alt="TestTokenImg"
                            className="w-12 h-12 object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1">
                          <div className="flex flex-row justify-start items-center gap-1 text-xs">
                            <span className="font-semibold text-white">
                              Token Name
                            </span>
                            <span className="font-medium text-gray-600">
                              67.45%
                            </span>
                          </div>
                          <div className="flex flex-row justify-start items-center gap-2">
                            <div className="flex justify-center items-center bg-gray-900 hover:bg-gray-800 p-1 rounded-full text-white cursor-pointer">
                              <FaXTwitter className="text-xs" />
                            </div>
                            <button
                              onClick={() => openTrade("long")}
                              className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-medium border border-green-600/30"
                            >
                              Buy
                            </button>
                            <button
                              onClick={() => openTrade("short")}
                              className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-medium border border-red-600/30"
                            >
                              Short
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-end items-end gap-1">
                        <span className="text-xs text-gray-600">PNL</span>
                        <div className="flex flex-row justify-end items-end gap-1">
                          <Image
                            src={solIcon}
                            alt="solIcon"
                            className="w-3 h-3"
                          />
                          <span className="text-[#37eca1] text-sm">
                            + 1.45K
                          </span>
                        </div>
                        <span className="text-[#37eca1] text-xs">+$308K</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-start items-center gap-3">
                      <div className="bg-gray-900 rounded-lg w-16 lg:w-[68px] h-16 lg:h-[68px] overflow-hidden">
                        <Image
                          src={TestTokenImg}
                          alt="TestTokenImg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        <div className="flex flex-row justify-start items-center gap-1 text-sm lg:text-base">
                          <span className="font-semibold text-white">
                            Token Name
                          </span>
                          <span className="font-medium text-gray-600">
                            67.45%
                          </span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2">
                          <div className="flex justify-center items-center bg-gray-900 hover:bg-gray-800 p-1.5 rounded-full text-white cursor-pointer">
                            <FaXTwitter className="text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end items-end gap-1">
                      <span className="text-sm text-gray-600">PNL</span>
                      <div className="flex flex-row justify-end items-end gap-1">
                        <Image
                          src={solIcon}
                          alt="solIcon"
                          className="w-4 h-4"
                        />
                        <span className="text-[#37eca1] text-lg">+ 1.45K</span>
                      </div>
                      <span className="text-[#37eca1] text-base">+$308K</span>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="flex flex-row justify-center items-center gap-2 sm:gap-6 shadow-[0px_0px_8px_0px_#ffffff38] px-2 sm:px-4 py-3 border border-gray-900 rounded-lg">
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-base">1.36K</span>
                        <span className="text-gray-600 text-xs">Positions</span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-12 h-6 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-10 h-10 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-5 h-10"></div>
                            <div className="flex justify-center items-center bg-red-700 w-5 h-10"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[37px] h-[37px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                          <span className="text-[10px] text-green-500">
                            916
                          </span>
                          <span className="text-[10px] text-red-700">423</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-base">1.36K</span>
                        <span className="text-gray-600 text-xs">Trades</span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-12 h-6 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-10 h-10 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-5 h-10"></div>
                            <div className="flex justify-center items-center bg-red-700 w-5 h-10"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[37px] h-[37px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                          <span className="text-[10px] text-green-500">
                            916
                          </span>
                          <span className="text-[10px] text-red-700">423</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <div className="flex flex-row justify-center items-center gap-1">
                          <Image
                            src={solIcon}
                            alt="solIcon"
                            className="w-[14px] h-[14px]"
                          />
                          <span className="text-sm">10.8K</span>
                        </div>
                        <span className="text-sm">$2.28M</span>
                      </div>
                      <span className="text-gray-600 text-xs">Volume</span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1 text-gray-600">
                      <span className="font-semibold text-sm">25m</span>
                      <span className="text-xs">Avg. Hold Time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rank 2 & 3 Cards - Side by Side on Desktop, Stacked on Mobile */}
              <div className="flex flex-col lg:flex-row justify-center items-start gap-4 w-full">
                {/* Rank 2 Card */}
                <div className="relative flex flex-col gap-3 p-3 sm:p-4 border border-gray-900 rounded-lg sm:rounded-xl w-full lg:w-1/2">
                  <div className="-top-8 sm:-top-12 left-1/2 -translate-x-1/2 lg:left-3 lg:translate-x-0 absolute flex flex-col justify-center items-center border border-gray-900 rounded-full w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm text-white bg-background">
                    2
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
                    <div className="flex flex-row justify-start items-center gap-2 sm:gap-3">
                      <div className="bg-gray-900 rounded-lg w-12 h-12 sm:w-16 sm:h-16 overflow-hidden flex-shrink-0">
                        <Image
                          src={TestTokenImg}
                          alt="TestTokenImg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        <div className="flex flex-row justify-start items-center gap-1 text-xs sm:text-sm">
                          <span className="font-semibold text-white">
                            Token Name 2
                          </span>
                          <span className="font-medium text-gray-600">
                            55.23%
                          </span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2">
                          <div className="flex justify-center items-center bg-gray-900 hover:bg-gray-800 p-1 sm:p-1.5 rounded-full text-white cursor-pointer">
                            <FaXTwitter className="text-xs sm:text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-end gap-1">
                      <span className="text-xs sm:text-sm text-gray-600">
                        PNL
                      </span>
                      <div className="flex flex-row justify-end items-end gap-1">
                        <Image
                          src={solIcon}
                          alt="solIcon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span className="text-[#37eca1] text-sm sm:text-base">
                          + 892
                        </span>
                      </div>
                      <span className="text-[#37eca1] text-xs sm:text-sm">
                        +$189K
                      </span>
                    </div>
                  </div>

                  {/* Stats Section for Rank 2 */}
                  <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 shadow-[0px_0px_8px_0px_#ffffff38] px-2 sm:px-3 py-2 sm:py-3 border border-gray-900 rounded-lg">
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-sm">892</span>
                        <span className="text-gray-600 text-[10px]">
                          Positions
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-10 h-5 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-8 h-8 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-4 h-8"></div>
                            <div className="flex justify-center items-center bg-red-700 w-4 h-8"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[30px] h-[30px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                          <span className="text-[9px] text-green-500">492</span>
                          <span className="text-[9px] text-red-700">400</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-sm">1.1K</span>
                        <span className="text-gray-600 text-[10px]">
                          Trades
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-10 h-5 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-8 h-8 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-4 h-8"></div>
                            <div className="flex justify-center items-center bg-red-700 w-4 h-8"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[30px] h-[30px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                          <span className="text-[9px] text-green-500">607</span>
                          <span className="text-[9px] text-red-700">493</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <Image
                          src={solIcon}
                          alt="solIcon"
                          className="w-[12px] h-[12px]"
                        />
                        <span className="text-xs">8.5K</span>
                        <span className="text-xs">$1.8M</span>
                      </div>
                      <span className="text-gray-600 text-[10px]">Volume</span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1 text-gray-600">
                      <span className="font-semibold text-xs">18m</span>
                      <span className="text-[10px]">Avg. Hold</span>
                    </div>
                  </div>
                </div>

                {/* Rank 3 Card */}
                <div className="relative flex flex-col gap-3 p-3 sm:p-4 border border-gray-900 rounded-lg sm:rounded-xl w-full lg:w-1/2">
                  <div className="-top-8 sm:-top-12 right-1/2 -translate-x-1/2 lg:right-3 lg:translate-x-0 absolute flex flex-col justify-center items-center border border-gray-900 rounded-full w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm text-white bg-background">
                    3
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 w-full">
                    <div className="flex flex-row justify-start items-center gap-2 sm:gap-3">
                      <div className="bg-gray-900 rounded-lg w-12 h-12 sm:w-16 sm:h-16 overflow-hidden flex-shrink-0">
                        <Image
                          src={TestTokenImg}
                          alt="TestTokenImg"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start gap-1">
                        <div className="flex flex-row justify-start items-center gap-1 text-xs sm:text-sm">
                          <span className="font-semibold text-white">
                            Token Name 3
                          </span>
                          <span className="font-medium text-gray-600">
                            48.91%
                          </span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-2">
                          <div className="flex justify-center items-center bg-gray-900 hover:bg-gray-800 p-1 sm:p-1.5 rounded-full text-white cursor-pointer">
                            <FaXTwitter className="text-xs sm:text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-end items-end gap-1">
                      <span className="text-xs sm:text-sm text-gray-600">
                        PNL
                      </span>
                      <div className="flex flex-row justify-end items-end gap-1">
                        <Image
                          src={solIcon}
                          alt="solIcon"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <span className="text-[#37eca1] text-sm sm:text-base">
                          + 654
                        </span>
                      </div>
                      <span className="text-[#37eca1] text-xs sm:text-sm">
                        +$138K
                      </span>
                    </div>
                  </div>

                  {/* Stats Section for Rank 3 */}
                  <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 shadow-[0px_0px_8px_0px_#ffffff38] px-2 sm:px-3 py-2 sm:py-3 border border-gray-900 rounded-lg">
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-sm">723</span>
                        <span className="text-gray-600 text-[10px]">
                          Positions
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-10 h-5 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-8 h-8 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-4 h-8"></div>
                            <div className="flex justify-center items-center bg-red-700 w-4 h-8"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[30px] h-[30px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                          <span className="text-[9px] text-green-500">354</span>
                          <span className="text-[9px] text-red-700">369</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex flex-col justify-start items-center gap-1">
                        <span className="text-white text-sm">965</span>
                        <span className="text-gray-600 text-[10px]">
                          Trades
                        </span>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-10 h-5 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-8 h-8 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-4 h-8"></div>
                            <div className="flex justify-center items-center bg-red-700 w-4 h-8"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[30px] h-[30px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-2">
                          <span className="text-[9px] text-green-500">472</span>
                          <span className="text-[9px] text-red-700">493</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <Image
                          src={solIcon}
                          alt="solIcon"
                          className="w-[12px] h-[12px]"
                        />
                        <span className="text-xs">7.2K</span>
                        <span className="text-xs">$1.5M</span>
                      </div>
                      <span className="text-gray-600 text-[10px]">Volume</span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1 text-gray-600">
                      <span className="font-semibold text-xs">22m</span>
                      <span className="text-[10px]">Avg. Hold</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {(selectData === "kol" || selectData === "global") && (
        <div className="flex flex-col gap-2 px-4 py-2 border-[1px] border-gray-900 rounded-[14px] w-full overflow-hidden">
          <div className="flex flex-row justify-between items-center gap-4 py-2 w-full border-b border-gray-900">
            <span className="font-semibold text-white text-lg">Traders</span>
            <div className="flex flex-row justify-end items-center gap-2">
              <div className="flex flex-row justify-center items-center gap-1 bg-gray-900 px-3 py-1 rounded-full text-white cursor-pointer">
                <span className="text-base">SOL</span>
                <LiaExchangeAltSolid className="text-[14px] rotate-90" />
              </div>
              <div className="flex flex-col justify-center items-center bg-gray-900 p-1 rounded-sm text-white cursor-pointer">
                <MdOutlineWindow className="text-[18px]" />
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="flex flex-col gap-0 w-full min-w-[900px]">
              {/* Table Header */}
              <div className="flex flex-row justify-between items-center w-full px-2 py-2 font-medium text-gray-600 text-base sticky top-0 bg-background z-10">
                <span className="w-full max-w-[100px]">Rank</span>
                <span className="w-full">Trader</span>
                <span className="w-full">PNL</span>
                <span className="w-full">Win Rate</span>
                <span className="w-full">Positions</span>
                <span className="w-full">Trades</span>
                <span className="w-full">Volume</span>
                <span className="w-full">Avg Hold</span>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col gap-0 w-full h-[680px] overflow-y-auto">
                {Array.from({ length: 14 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between items-center w-full min-h-[64px] px-2 py-3 border-b border-gray-900 hover:bg-gray-900/30 transition-colors"
                  >
                    <span className="w-full max-w-[100px] text-white text-sm">
                      {index + 1}
                    </span>
                    <div className="flex flex-row justify-start items-center gap-2 w-full">
                      <Image
                        src={TestTokenImg}
                        alt="TestTokenImg"
                        className="rounded-sm w-[44px] h-[44px] object-cover flex-shrink-0"
                      />
                      <div className="flex flex-col justify-start items-start">
                        <span className="text-white text-sm">Trader Name</span>
                        <div className="flex flex-col justify-center items-center bg-gray-900 hover:bg-gray-800 rounded-full w-6 h-6 text-white cursor-pointer">
                          <FaXTwitter className="text-[12px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1 w-full font-medium text-[#37eca1] text-sm">
                      <Image
                        src={solIcon}
                        alt="solIcon"
                        className="w-[14px] h-[14px]"
                      />
                      +145.4
                    </div>
                    <span className="w-full text-white text-sm">67.45%</span>
                    <div className="flex flex-row justify-start items-center gap-2 w-full">
                      <span className="text-white text-base">1.36K</span>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-12 h-6 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-10 h-10 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-5 h-10"></div>
                            <div className="flex justify-center items-center bg-red-700 w-5 h-10"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[37px] h-[37px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                          <span className="text-[10px] text-green-500">
                            916
                          </span>
                          <span className="text-[10px] text-red-700">423</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2 w-full">
                      <span className="text-white text-base">1.36K</span>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="relative flex flex-col w-12 h-6 object-cover overflow-hidden">
                          <div
                            className="top-0 left-1 absolute flex flex-row justify-center items-center rounded-full w-10 h-10 object-cover overflow-hidden"
                            style={{
                              rotate: `${rotate}deg`,
                              transition: "rotate 0.3s ease-in-out",
                            }}
                          >
                            <div className="flex justify-center items-center bg-green-500 w-5 h-10"></div>
                            <div className="flex justify-center items-center bg-red-700 w-5 h-10"></div>
                            <div className="absolute flex flex-col bg-black rounded-full w-[37px] h-[37px]"></div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3">
                          <span className="text-[10px] text-green-500">
                            916
                          </span>
                          <span className="text-[10px] text-red-700">423</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1 w-full font-medium text-[#37eca1] text-sm">
                      <Image
                        src={solIcon}
                        alt="solIcon"
                        className="w-[14px] h-[14px]"
                      />
                      +145.4
                    </div>
                    <span className="w-full text-gray-600 text-sm">25m</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectData === "your-wallets" && (
        <div className="flex flex-col justify-center items-center w-full py-16">
          <div className="text-center max-w-xl px-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              No wallet data available
            </h3>
            <p className="text-gray-500 text-sm">
              Add some wallets to your account to see their performance rankings
              and statistics.
            </p>
          </div>
        </div>
      )}

      {selectData === "tracked" && (
        <div className="flex flex-col justify-center items-center w-full py-16">
          <div className="text-center max-w-xl px-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              No tracked wallets available
            </h3>
            <p className="text-gray-500 text-sm">
              Track wallets to monitor their performance over time. Log in to
              manage your tracked list.
            </p>
          </div>
        </div>
      )}

      {/* Mobile Trade Bottom Sheet */}
      <div
        className={`sm:hidden fixed inset-0 z-50 ${
          isTradeOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeTrade}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            isTradeOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Sheet */}
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 inset-x-0 bg-[#0a0a0a] border-t border-gray-800 rounded-t-2xl shadow-2xl transition-transform duration-300 ${
            isTradeOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold text-white text-sm">
              {tradeSide === "long" ? "Buy / Long" : "Sell / Short"}
            </span>
            <button
              onClick={closeTrade}
              className="px-2 py-1 text-xs text-gray-400 hover:text-white"
            >
              Close
            </button>
          </div>
          <div className="px-4 pb-5">
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-gray-500 text-xs">Amount (USDC)</label>
              <input
                className="bg-gray-900 px-3 py-2 border border-gray-800 rounded outline-none text-white text-sm"
                placeholder="0.00"
              />
            </div>
            <div className="flex gap-2">
              <button
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  tradeSide === "long"
                    ? "bg-green-500 text-black"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setTradeSide("long")}
              >
                Long
              </button>
              <button
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  tradeSide === "short"
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
                onClick={() => setTradeSide("short")}
              >
                Short
              </button>
            </div>
            <button
              className={`w-full mt-3 py-3 rounded-lg font-bold text-sm ${
                tradeSide === "long"
                  ? "bg-green-500 text-black"
                  : "bg-red-500 text-white"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
