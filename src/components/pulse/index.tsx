"use client";

import React, { useContext, useEffect, useState } from "react";
import { getAllList } from "@/utils";
import UserContext from "@/contexts/usercontext";
import Image from "next/image";
import PulseCard from "../others/cards/PulseCard";
import solIcon from "@/../public/images/sol.png";
import { BsBookmarkX, BsLightningChargeFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { CgOptions } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoVolumeHighOutline } from "react-icons/io5";
import { PiGpsFixFill } from "react-icons/pi";

export default function Pulse() {
  const {
    tokenList,
    setTokenList,
    currentAmount,
    setCurrentAmount,
    setLoadingState,
  } = useContext<any>(UserContext);
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>("New Pairs");

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllList();
      console.log("🚀 ~ fetchData ~ resp:", resp.data.data);
      if (resp && Array.isArray(resp.data.data)) {
        setTokenList(resp.data.data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  }, []);

  return (
    <div className="relative flex flex-row items-center w-full h-full min-h-[calc(100vh-98px)]">
      <div className="flex flex-col w-full h-full max-h-[calc(100vh-98px)]">
        <div className="flex flex-col justify-start items-center w-full h-[calc(100vh-98px)]">
          <div className="flex flex-col flex-1 justify-center items-center p-3 sm:p-6 lg:p-[24px] px-3 sm:px-4 lg:px-[24px] w-full h-full max-h-[calc(100vh-98px)] overflow-hidden">
            {/* Mobile Header */}


            {/* Desktop Header */}
            <div className="hidden lg:flex flex-row justify-center items-center gap-4 mb-4 w-full h-[32px] min-h-[32px]">
              <div className="flex flex-row flex-1 justify-start items-center gap-6 text-nowrap">
                <div className="flex flex-row justify-start items-center gap-6 h-[32px] text-[#A0A0A0]">
                  <div className="font-medium text-base xl:text-xl tracking-[-0.02em] cursor-pointer text-white">
                    Pulse
                  </div>
                </div>
              </div>
              <div className="relative flex flex-row justify-start items-center gap-6 min-w-0 text-nowrap">
                <div className="[&::-webkit-scrollbar]:hidden flex flex-row justify-start items-center gap-6 min-w-0 [-ms-overflow-style:none] overflow-x-auto overflow-y-hidden text-nowrap [scrollbar-width:none]">
                  <div className="flex flex-row justify-center items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] px-3 rounded-full h-[32px] text-[#A0A0A0] hover:text-white transition-all duration-150 ease-in-out cursor-pointer">
                    <TfiMenuAlt className="text-sm" />
                    <span className="font-bold text-xs whitespace-nowrap">
                      Display
                    </span>
                    <FaAngleDown className="text-sm" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="group relative flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-8 h-8 cursor-pointer">
                  <BsBookmarkX className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors duration-150 ease-in-out" />
                </div>
                <div className="group relative flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-8 h-8 cursor-pointer">
                  <IoVolumeHighOutline className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors duration-150 ease-in-out" />
                </div>
                <div className="group relative flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-8 h-8 cursor-pointer">
                  <PiGpsFixFill className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors duration-150 ease-in-out" />
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 h-full">
                <div className="group flex flex-row justify-center items-center gap-2 hover:bg-[#2A2A2A] px-3 border border-[#333333] rounded-full h-[32px] transition-colors duration-125 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <LuWallet className="text-sm text-[#A0A0A0] transition-colors duration-150 ease-in-out" />
                    <span className="font-medium text-xs text-[#A0A0A0] transition-colors duration-150 ease-in-out">
                      1
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Image className="w-3 h-3" src={solIcon} alt="solIcon" />
                    <span className="font-medium text-xs text-[#A0A0A0] transition-colors duration-150 ease-in-out">
                      1
                    </span>
                  </div>
                  <FaAngleDown className="text-sm text-[#A0A0A0] transition-colors duration-150 ease-in-out" />
                </div>
              </div>
            </div>

            {/* Mobile Layout - Tabbed Sections */}
            <div className="flex lg:hidden flex-col flex-1 w-full h-full min-h-[calc(100vh-320px)] overflow-hidden">
              {/* Mobile Controls Row 1 - Display and Filter */}
              <div className="flex flex-row justify-between items-center mb-3 w-full px-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] px-3 py-2 rounded-lg border border-[#333333] cursor-pointer">
                    <TfiMenuAlt className="text-xs text-white" />
                    <span className="font-medium text-xs text-white">Display</span>
                    <FaAngleDown className="text-xs text-white" />
                  </div>
                  <div className="flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg w-8 h-8 border border-[#333333] cursor-pointer">
                    <BsBookmarkX className="text-xs text-[#A0A0A0]" />
                  </div>
                  <div className="flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-lg w-8 h-8 border border-[#333333] cursor-pointer">
                    <CgOptions className="text-xs text-[#A0A0A0]" />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] px-3 py-2 rounded-lg border border-[#333333] cursor-pointer">
                  <TfiMenuAlt className="text-xs text-white" />
                  <span className="font-medium text-xs text-white">Filter</span>
                  <FaAngleDown className="text-xs text-white" />
                </div>
              </div>

              {/* Mobile Controls Row 2 - Wallet and Presets */}
              <div className="flex flex-row justify-between items-center mb-3 w-full px-2">
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-row items-center gap-2 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#333333]">
                    <LuWallet className="text-xs text-white" />
                    <span className="font-medium text-xs text-white">1</span>
                    <Image src={solIcon} alt="solIcon" className="w-3 h-3" />
                    <span className="font-medium text-xs text-white">0</span>
                    <FaAngleDown className="text-xs text-white" />
                  </div>
                  <div className="flex flex-row items-center gap-1 bg-[#1A1A1A] px-2 py-2 rounded-lg border border-[#333333]">
                    <BsLightningChargeFill className="text-xs text-[#A0A0A0]" />
                    <input
                      type="number"
                      placeholder="0"
                      className="bg-transparent border-none w-8 text-white text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1 bg-[#1A1A1A] px-3 py-2 rounded-lg border border-[#333333]">
                  <TfiMenuAlt className="text-xs text-[#007AFF]" />
                  <span className="font-medium text-xs text-[#007AFF] cursor-pointer">P1</span>
                  <span className="font-medium text-xs text-[#A0A0A0] cursor-pointer hover:text-white">P2</span>
                  <span className="font-medium text-xs text-[#A0A0A0] cursor-pointer hover:text-white">P3</span>
                </div>
              </div>

              {/* Section Selection Tabs - Floating */}
              <div className="flex flex-row gap-2 mb-3 w-full px-2">
                <button
                  onClick={() => setActiveSection("New Pairs")}
                  className={`flex-1 py-2.5 px-3 font-medium text-sm rounded-lg transition-colors ${
                    activeSection === "New Pairs"
                      ? "text-white bg-[#2A2A2A] shadow-sm"
                      : "text-[#A0A0A0] bg-[#1A1A1A] hover:text-white hover:bg-[#2A2A2A]"
                  }`}
                >
                  New Pairs
                </button>
                <button
                  onClick={() => setActiveSection("Final Stretch")}
                  className={`flex-1 py-2.5 px-3 font-medium text-sm rounded-lg transition-colors ${
                    activeSection === "Final Stretch"
                      ? "text-white bg-[#2A2A2A] shadow-sm"
                      : "text-[#A0A0A0] bg-[#1A1A1A] hover:text-white hover:bg-[#2A2A2A]"
                  }`}
                >
                  Final Stretch
                </button>
                <button
                  onClick={() => setActiveSection("Migrated")}
                  className={`flex-1 py-2.5 px-3 font-medium text-sm rounded-lg transition-colors ${
                    activeSection === "Migrated"
                      ? "text-white bg-[#2A2A2A] shadow-sm"
                      : "text-[#A0A0A0] bg-[#1A1A1A] hover:text-white hover:bg-[#2A2A2A]"
                  }`}
                >
                  Migrated
                </button>
              </div>

              {/* Mobile Content */}
              <div className="flex flex-col border border-[#333333] rounded-lg w-full h-full overflow-auto bg-[#0A0A0A]">
                {tokenList &&
                  tokenList.map((item: any, index: number) => (
                    <PulseCard
                      key={index}
                      item={item}
                      index={index}
                      hiddenIds={hiddenIds}
                      setHiddenIds={setHiddenIds}
                    />
                  ))}
              </div>
            </div>

            {/* Desktop Layout - 3 Columns */}
            <div className="hidden lg:flex flex-row flex-1 justify-start items-center border border-[#333333] w-full h-full min-h-[calc(100vh-258px)] overflow-auto bg-[#0A0A0A]">
              {/* Column 1: New Pairs */}
              <div className="flex flex-col justify-start items-start border-r border-[#333333] w-full min-w-0 h-full overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row justify-between items-center px-3 lg:px-4 border-b border-[#333333] w-full h-[40px] lg:h-[48px] bg-[#1A1A1A]">
                  <span className="flex-1 font-medium text-sm lg:text-base text-[#A0A0A0]">
                    New Pairs
                  </span>
                  <div className="flex flex-row justify-end items-center gap-2 lg:gap-3">
                    <div className="flex flex-row justify-center items-center gap-1 px-1 border border-[#333333] rounded-full h-[24px] lg:h-[28px]">
                      <BsLightningChargeFill className="text-[10px] lg:text-[12px] text-[#A0A0A0]" />
                      <input
                        type="number"
                        placeholder="0"
                        className="justify-center items-center bg-transparent border-none w-[24px] lg:w-[32px] text-[#A0A0A0] text-xs lg:text-sm"
                      />
                      <Image
                        src={solIcon}
                        alt="solIcon"
                        className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px]"
                      />
                      <div className="flex flex-row gap-1 px-1 border-[#333333] border-l text-[#A0A0A0] text-[10px] lg:text-xs">
                        <span className="hover:text-white cursor-pointer">
                          P1
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P2
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P3
                        </span>
                      </div>
                    </div>
                    <CgOptions className="text-sm lg:text-base text-[#A0A0A0] cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col w-full h-full max-h-[calc(100vh-193px)] overflow-auto overflow-y-scroll">
                  {tokenList &&
                    tokenList.map((item: any, index: number) => (
                      <PulseCard
                        key={index}
                        item={item}
                        index={index}
                        hiddenIds={hiddenIds}
                        setHiddenIds={setHiddenIds}
                      />
                    ))}
                </div>
              </div>

              {/* Column 2: Final Stretch */}
              <div className="flex flex-col justify-start items-start border-r border-[#333333] w-full min-w-0 h-full overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row justify-between items-center px-3 lg:px-4 border-b border-[#333333] w-full h-[40px] lg:h-[48px] bg-[#1A1A1A]">
                  <span className="flex-1 font-medium text-sm lg:text-base text-[#A0A0A0]">
                    Final Stretch
                  </span>
                  <div className="flex flex-row justify-end items-center gap-2 lg:gap-3">
                    <div className="flex flex-row justify-center items-center gap-1 px-1 border border-[#333333] rounded-full h-[24px] lg:h-[28px]">
                      <BsLightningChargeFill className="text-[10px] lg:text-[12px] text-[#A0A0A0]" />
                      <input
                        type="number"
                        placeholder="0"
                        className="justify-center items-center bg-transparent border-none w-[24px] lg:w-[32px] text-[#A0A0A0] text-xs lg:text-sm"
                      />
                      <Image
                        src={solIcon}
                        alt="solIcon"
                        className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px]"
                      />
                      <div className="flex flex-row gap-1 px-1 border-[#333333] border-l text-[#A0A0A0] text-[10px] lg:text-xs">
                        <span className="hover:text-white cursor-pointer">
                          P1
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P2
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P3
                        </span>
                      </div>
                    </div>
                    <CgOptions className="text-sm lg:text-base text-[#A0A0A0] cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col w-full h-full max-h-[calc(100vh-193px)] overflow-auto overflow-y-scroll">
                  {tokenList &&
                    tokenList.map((item: any, index: number) => (
                      <PulseCard
                        key={index}
                        item={item}
                        index={index}
                        hiddenIds={hiddenIds}
                        setHiddenIds={setHiddenIds}
                      />
                    ))}
                </div>
              </div>

              {/* Column 3: Migrated */}
              <div className="flex flex-col justify-start items-start w-full min-w-0 h-full overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row justify-between items-center px-3 lg:px-4 border-b border-[#333333] w-full h-[40px] lg:h-[48px] bg-[#1A1A1A]">
                  <span className="flex-1 font-medium text-sm lg:text-base text-[#A0A0A0]">
                    Migrated
                  </span>
                  <div className="flex flex-row justify-end items-center gap-2 lg:gap-3">
                    <div className="flex flex-row justify-center items-center gap-1 px-1 border border-[#333333] rounded-full h-[24px] lg:h-[28px]">
                      <BsLightningChargeFill className="text-[10px] lg:text-[12px] text-[#A0A0A0]" />
                      <input
                        type="number"
                        placeholder="0"
                        className="justify-center items-center bg-transparent border-none w-[24px] lg:w-[32px] text-[#A0A0A0] text-xs lg:text-sm"
                      />
                      <Image
                        src={solIcon}
                        alt="solIcon"
                        className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px]"
                      />
                      <div className="flex flex-row gap-1 px-1 border-[#333333] border-l text-[#A0A0A0] text-[10px] lg:text-xs">
                        <span className="hover:text-white cursor-pointer">
                          P1
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P2
                        </span>
                        <span className="hover:text-white cursor-pointer">
                          P3
                        </span>
                      </div>
                    </div>
                    <CgOptions className="text-sm lg:text-base text-[#A0A0A0] cursor-pointer" />
                  </div>
                </div>
                <div className="flex flex-col w-full h-full max-h-[calc(100vh-193px)] overflow-auto overflow-y-scroll">
                  {tokenList &&
                    tokenList.map((item: any, index: number) => (
                      <PulseCard
                        key={index}
                        item={item}
                        index={index}
                        hiddenIds={hiddenIds}
                        setHiddenIds={setHiddenIds}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
