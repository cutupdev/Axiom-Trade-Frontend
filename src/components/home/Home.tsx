"use client";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/contexts/usercontext";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FaAngleDown, FaEyeSlash } from "react-icons/fa";
import { BsBookmarkX } from "react-icons/bs";
import { LuWallet } from "react-icons/lu";
import { TiFilter } from "react-icons/ti";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiLink, FiSearch } from "react-icons/fi";
import { IoFlashSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import solIcon from "@/../public/images/sol.png";
import { getAllList } from "@/utils";
import TokenDataCard, { TokenTableHeader } from "../others/cards/TokenDataCard";
import DexScreenerCard, { DexScreenerTableHeader } from "../others/cards/DexScreenerCard";
import Surge from "../surge";

// Live Tracker Component - List layout with pill icons
function LiveTrackerTab() {
  const [liveTokens, setLiveTokens] = useState<any[]>([]);
  const [topTokens, setTopTokens] = useState<any[]>([]);

  // Generate random live token data
  const generateRandomLiveToken = (index: number) => {
  };

  // Generate random top stream token data
  const generateRandomTopToken = (index: number) => {
    
  };

  // Initialize with random tokens
  useEffect(() => {
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full h-full p-3 lg:p-4">
      {/* New Streams Section */}
      <div className="flex flex-col w-full lg:w-1/2 border border-[#333333] rounded-lg bg-[#0A0A0A] overflow-hidden h-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3 lg:p-4 border-b border-[#333333]">
          <h2 className="text-white font-semibold text-base">New Streams</h2>
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by ticker or name"
              className="bg-transparent border border-[#333333] rounded-md pl-8 pr-3 py-1.5 text-sm text-[#A0A0A0] outline-none focus:border-[#007AFF] w-full sm:w-[180px]"
            />
            <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#A0A0A0] text-sm" />
          </div>
        </div>
      </div>

      {/* Top Stream Tokens Section */}
      <div className="flex flex-col w-full lg:w-1/2 border border-[#333333] rounded-lg bg-[#0A0A0A] overflow-hidden h-full">
        <div className="flex justify-between items-center p-3 lg:p-4 border-b border-[#333333]">
          <h2 className="text-white font-semibold text-base">Top Stream Tokens</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 p-3 lg:p-4 overflow-y-auto flex-1">
          {topTokens.map((token, index) => (
            <div key={token.id} className="flex flex-col bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg overflow-hidden hover:border-[#007AFF] transition-colors">
              {/* Token Image - Pill Style */}
              <div className="w-full h-[100px] lg:h-[120px] bg-black flex items-center justify-center p-2 lg:p-3">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full" style={{ clipPath: 'ellipse(100% 45% at 50% 50%)' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-full" style={{ clipPath: 'ellipse(100% 45% at 50% 50%)', transform: 'translateY(-50%)' }}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full opacity-50" style={{ width: '30%', height: '60%', top: '20%', left: '35%' }}></div>
                </div>
              </div>

              {/* Token Info */}
              <div className="p-2 lg:p-3 flex flex-col gap-1.5 lg:gap-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5 lg:gap-2 min-w-0 flex-1">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded flex-shrink-0 overflow-hidden bg-[#1A1A1A] border border-[#333333]">
                      <img src={token.avatarImage} alt={token.symbol} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-white font-semibold text-xs lg:text-sm truncate">{token.symbol}</span>
                  </div>
                  <span className="text-[#007AFF] text-[10px] lg:text-xs font-medium whitespace-nowrap">MC {token.marketCap}</span>
                </div>

                <p className="text-[#6B7280] text-[11px] lg:text-xs line-clamp-2 leading-relaxed">
                  {token.description}
                </p>

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] lg:text-xs text-[#6B7280]">
                    <span className="flex items-center gap-0.5">
                      <IoChatbubbleOutline className="text-xs lg:text-sm" /> {token.replies}
                    </span>
                    <span>•</span>
                    <span className="truncate">{token.timeAgo}</span>
                  </div>

                  <div className="flex items-center gap-1 lg:gap-1.5">
                    <button className="flex-shrink-0 w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#1A1A1A] rounded transition-colors">
                      <FiLink className="text-xs lg:text-sm" />
                    </button>
                    <button className="h-6 w-6 lg:h-7 lg:w-7 rounded-full bg-[#007AFF] text-black font-medium text-sm hover:bg-[#0066CC] transition-colors flex items-center justify-center">
                      <IoFlashSharp className="text-xs lg:text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Top Streams Tokens Component - Grid layout with larger cards
function TopStreamsTokensTab() {
  const [topTokens, setTopTokens] = useState<any[]>([]);

  // Generate random top stream token data
  const generateRandomTopToken = (index: number) => {
    const tokens = [
      { symbol: "RIP Balin Mi...", name: "RIP Balin Miller", description: "American climber Balin Miller has died at the age of 23 while climbing at Yosemite..." },
      { symbol: "SEVEN", name: "SEVEN", description: "Lucky number seven bringing fortune to the blockchain" },
      { symbol: "MicroCrop", name: "MicroCrop", description: "New drop: MicroCrop on Pump V1. This project is basement-built energy" },
      { symbol: "ZUCK", name: "ZUCK", description: "Meta failed. Libra failed. But Zuck never gives up. Now the lizard overlords finally..." },
      { symbol: "Purple Plate", name: "Purple Plate", description: "This project is built different (but mostly broken). Purple Plate dropping on V1..." },
      { symbol: "UPXI", name: "UPXI", description: "This project is coded during Red Bull rush. Degens unite—UPXI drops on Pump..." },
      { symbol: "Pump VS Four", name: "Pump VS Four", description: "This project is launched on vibes chain. It's here: Pump VS Four on Pum..." },
      { symbol: "BONK", name: "BONK", description: "The original dog coin that started it all on Solana" },
      { symbol: "Moon Boy", name: "Moon Boy", description: "To the moon and beyond with this rocket fuel token" },
      { symbol: "Degen Ape", name: "Degen Ape", description: "Apes together strong. Join the degen movement now" },
    ];

    const token = tokens[index % tokens.length];
    const timeAgo = ["17s ago", "24s ago", "41s ago", "1m ago", "2m ago", "5m ago"][Math.floor(Math.random() * 6)];
    const marketCap = (Math.random() * 10 + 1).toFixed(2);
    const replies = Math.floor(Math.random() * 10);
    // Generate random image URL
    const imageId = Math.floor(Math.random() * 1000);
    const avatarImage = `https://picsum.photos/seed/${imageId}/100/100`;

    return {
      id: `top-${index}-${Date.now()}`,
      ...token,
      timeAgo,
      marketCap: `${marketCap}K`,
      replies,
      avatarImage,
    };
  };

  // Initialize with random tokens
  useEffect(() => {
    const initialTokens = Array.from({ length: 20 }, (_, i) => generateRandomTopToken(i));
    setTopTokens(initialTokens);

    // Update data every 4 seconds
    const interval = setInterval(() => {
      setTopTokens(prev => {
        const newTokens = [...prev];
        // Randomly update 2-3 tokens
        const updateCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < updateCount; i++) {
          const randomIndex = Math.floor(Math.random() * newTokens.length);
          newTokens[randomIndex] = generateRandomTopToken(randomIndex);
        }
        return newTokens;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-auto border-0 lg:border border-[#333333] rounded-none lg:rounded-lg bg-[#0A0A0A]">


      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
        {topTokens.map((token, index) => (
          <div key={token.id} className="flex flex-col bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg overflow-hidden hover:border-[#007AFF] transition-colors">
            {/* Token Image - Pill Style */}
            <div className="w-full h-[140px] bg-black flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full" style={{ clipPath: 'ellipse(100% 45% at 50% 50%)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-full" style={{ clipPath: 'ellipse(100% 45% at 50% 50%)', transform: 'translateY(-50%)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full opacity-50" style={{ width: '30%', height: '60%', top: '20%', left: '35%' }}></div>
              </div>
            </div>

            {/* Token Info */}
            <div className="p-3 flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <div className="w-5 h-5 rounded flex-shrink-0 overflow-hidden bg-[#1A1A1A] border border-[#333333]">
                    <img src={token.avatarImage} alt={token.symbol} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white font-semibold text-sm truncate">{token.symbol}</span>
                </div>
                <span className="text-[#007AFF] text-xs font-medium whitespace-nowrap">MC {token.marketCap}</span>
              </div>

              <p className="text-[#6B7280] text-xs line-clamp-2 leading-relaxed min-h-[32px]">
                {token.description}
              </p>

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1">
                    <IoChatbubbleOutline className="text-sm" /> {token.replies}
                  </span>
                  <span>•</span>
                  <span>{token.timeAgo}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[#6B7280] hover:text-white hover:bg-[#1A1A1A] rounded transition-colors">
                    <FiLink className="text-sm" />
                  </button>
                  <button className="h-7 w-7 rounded-full bg-[#007AFF] text-black font-medium text-sm hover:bg-[#0066CC] transition-colors flex items-center justify-center">
                    <IoFlashSharp className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dex Screener Component
function DexScreenerTab() {
  const [dexTokens, setDexTokens] = useState<any[]>([]);
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());

  // Generate random token data
  const generateRandomToken = (index: number) => {
    const symbols = ["LOOK", "ZERO", "PFP", "19", "SOMBRERO", "Squeeze", "Stjude", "PEPE", "DOGE", "SHIB", "BONK", "WIF"];
    const names = ["LOOK", "zero ZERO", "Pumpfun Pepe", "the pumpfun numb...", "Sombrero M...", "Squeeze", "ST. Jude's D...", "Pepe Token", "Dogecoin", "Shiba Inu", "Bonk", "Wif"];

    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    const name = names[Math.floor(Math.random() * names.length)];
    const priceChange = (Math.random() * 300 - 50).toFixed(2);
    const marketCap = (Math.random() * 100 + 10).toFixed(2);
    const liquidity = (Math.random() * 500 + 50).toFixed(1);
    const volume = (Math.random() * 1000 + 100).toFixed(1);
    const txns = Math.floor(Math.random() * 20000 + 1000);
    const buys = Math.floor(Math.random() * 1000);
    const sells = Math.floor(Math.random() * 1000);

    return {
      id: `dex-${index}-${Date.now()}`,
      address: `0x${Math.random().toString(16).substr(2, 40)}`,
      symbol,
      name,
      tokenImage: null,
      marketCapUSD: parseFloat(marketCap) * 1000000,
      priceChange5mPerc: parseFloat(priceChange),
      liquidityUSD: parseFloat(liquidity) * 1000,
      volumeUSD5m: parseFloat(volume) * 1000,
      totalTxns: txns,
      buys,
      sells,
      chart: {
        c: Array.from({ length: 20 }, () => Math.random() * 100)
      },
      creationTimestamp: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400),
      auditLog: {
        percentage1: (Math.random() * 50).toFixed(2),
        percentage2: (Math.random() * 100).toFixed(0),
      }
    };
  };

  // Initialize with random tokens
  useEffect(() => {
    const initialTokens = Array.from({ length: 15 }, (_, i) => generateRandomToken(i));
    setDexTokens(initialTokens);

    // Update data every 2 seconds
    const interval = setInterval(() => {
      setDexTokens(prev => {
        const newTokens = [...prev];
        // Randomly update 3-5 tokens
        const updateCount = Math.floor(Math.random() * 3) + 3;
        for (let i = 0; i < updateCount; i++) {
          const randomIndex = Math.floor(Math.random() * newTokens.length);
          newTokens[randomIndex] = generateRandomToken(randomIndex);
        }
        return newTokens;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col flex-1 justify-start items-center border-0 lg:border-[1px] border-[#333333] rounded-none lg:rounded-[4px] w-full h-full overflow-auto">
      {/* Mobile: Horizontal scroll wrapper */}
      <div className="flex lg:hidden w-full h-full overflow-x-auto">
        <div className="flex flex-col justify-start items-start bg-[#1A1A1A] w-full min-w-[1320px] h-full">
          <DexScreenerTableHeader />
          <div className="flex flex-col w-full h-full overflow-auto overflow-y-scroll">
            {dexTokens
              .filter((it: any) => {
                const key = (it?.address || it?.id || "") as string;
                return key ? !hiddenIds.has(key) : true;
              })
              .map((item: any, index: number) => (
                <DexScreenerCard
                  key={item.id}
                  item={item}
                  index={index}
                  hiddenIds={hiddenIds}
                  setHiddenIds={setHiddenIds}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:flex flex-col justify-start items-start bg-[#1A1A1A] w-full min-w-[0px] max-w-[1420px] h-full">
        <DexScreenerTableHeader />
        <div className="flex flex-col w-full h-full overflow-auto overflow-y-scroll">
          {dexTokens
            .filter((it: any) => {
              const key = (it?.address || it?.id || "") as string;
              return key ? !hiddenIds.has(key) : true;
            })
            .map((item: any, index: number) => (
              <DexScreenerCard
                key={item.id}
                item={item}
                index={index}
                hiddenIds={hiddenIds}
                setHiddenIds={setHiddenIds}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

// Mobile buttons - includes Pulse
const TokenListButtonMobile = [
  {
    id: 1,
    name: "Trending",
    route: null,
  },
  {
    id: 2,
    name: "Pulse",
    route: "/pulse",
  },
  {
    id: 3,
    name: "Surge",
    route: null,
  },
  {
    id: 4,
    name: "Dex",
    route: null,
  },
  {
    id: 5,
    name: "Live",
    route: null,
  },
];

// Desktop buttons - excludes Pulse
const TokenListButtonDesktop = [
  {
    id: 1,
    name: "Trending",
    route: null,
    dropdown: null,
  },
  {
    id: 2,
    name: "Surge",
    route: null,
    dropdown: null,
  },
  {
    id: 3,
    name: "Dex Screener",
    route: null,
    dropdown: null,
  },
  {
    id: 4,
    name: "Pump Live",
    route: null,
    dropdown: [
      { name: "Live Tracker", value: "Live Tracker" },
      { name: "Top Streams Tokens", value: "Top Streams Tokens" }
    ],
  },
];

const FilterTimeList = [
  {
    id: 1,
    name: "1m",
  },
  {
    id: 2,
    name: "5m",
  },
  {
    id: 3,
    name: "30m",
  },
  {
    id: 4,
    name: "1h",
  },
];

export default function Home() {
  const router = useRouter();
  const {
    tokenList,
    setTokenList,
    currentAmount,
    setCurrentAmount,
    setLoadingState,
  } = useContext<any>(UserContext);
  console.log("🚀 ~ Home ~ tokenList:", tokenList);
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [tokenListButton, setTokenListButton] = useState<string>("Trending");
  const [filterTime, setFilterTime] = useState<string>("5m");
  const [selectPreset, setSelectPreset] = useState<string>("P1");
  const [showPumpLiveDropdown, setShowPumpLiveDropdown] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const handleTokenButtonClick = (name: string, route: string | null) => {
    if (route) {
      router.push(route);
    } else {
      setTokenListButton(name);
      setShowPumpLiveDropdown(false);
    }
  };

  const handlePumpLiveSubMenu = (tabName: string) => {
    setTokenListButton(tabName);
    setShowPumpLiveDropdown(false);
  };

  const handlePumpLiveHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + 2,
      left: rect.left
    });
    setShowPumpLiveDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => setShowPumpLiveDropdown(false), 200);
  };

  const handleDropdownItemClick = (tabName: string) => {
    setTokenListButton(tabName);
    setShowPumpLiveDropdown(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getAllList();
      console.log("🚀 ~ fetchData ~ resp:", resp.data.data);
      if (resp && Array.isArray(resp.data.data)) {
        setTokenList(resp.data.data);
      } else {
        // Generate random data if API fails
        const randomTokens = generateRandomTokens(15);
        setTokenList(randomTokens);
      }
    };

    fetchData();

    // Update random data every 3 seconds
    const interval = setInterval(() => {
      setTokenList((prev: any[]) => {
        if (!prev || prev.length === 0) return prev;
        const newTokens = [...prev];
        // Randomly update 2-4 tokens
        const updateCount = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < updateCount && i < newTokens.length; i++) {
          const randomIndex = Math.floor(Math.random() * newTokens.length);
          newTokens[randomIndex] = {
            ...newTokens[randomIndex],
            ...generateRandomTokenUpdate(newTokens[randomIndex])
          };
        }
        return newTokens;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Generate random tokens
  const generateRandomTokens = (count: number) => {
    const symbols = ["PEPE", "DOGE", "SHIB", "BONK", "WIF", "MYRO", "SILLY", "POPCAT", "MEW", "GECKO"];
    const names = ["Pepe", "Dogecoin", "Shiba Inu", "Bonk", "dogwifhat", "Myro", "Silly Dragon", "Popcat", "cat in a dogs world", "Gecko"];

    return Array.from({ length: count }, (_, i) => {
      const symbol = symbols[i % symbols.length];
      const name = names[i % names.length];
      const priceChange = (Math.random() * 200 - 50).toFixed(2);
      const marketCap = (Math.random() * 500 + 50).toFixed(1);
      const liquidity = (Math.random() * 300 + 30).toFixed(1);
      const volume = (Math.random() * 800 + 100).toFixed(1);
      const totalTxs = Math.floor(Math.random() * 1000 + 100);
      const buys = Math.floor(Math.random() * (totalTxs / 2)) + Math.floor(totalTxs / 4);
      const sells = totalTxs - buys;

      return {
        id: `token-${i}-${Date.now()}`,
        address: `0x${Math.random().toString(16).substr(2, 40)}`,
        symbol,
        name,
        tokenImage: null,
        marketCapUSD: parseFloat(marketCap) * 1000,
        priceChange5mPerc: parseFloat(priceChange),
        liquidityUSD: parseFloat(liquidity) * 1000,
        volumeUSD5m: parseFloat(volume) * 1000,
        totalTxs,
        buys,
        sells,
        top10HoldersSupplyPerc: (Math.random() * 25).toFixed(2),
        devHoldingSupplyPerc: (Math.random() * 8).toFixed(2),
        holders: Math.floor(Math.random() * 800 + 50),
        insiderWalletsSupplyPerc: (Math.random() * 15).toFixed(2),
        bondingCurveProgress: (Math.random() * 100).toFixed(1),
        chart: {
          c: Array.from({ length: 20 }, () => Math.random() * 100)
        },
        creationTimestamp: Math.floor(Date.now() / 1000) - Math.floor(Math.random() * 86400)
      };
    });
  };

  // Generate random token update
  const generateRandomTokenUpdate = (token: any) => {
    const priceChange = (Math.random() * 200 - 50).toFixed(2);
    const totalTxs = Math.floor(Math.random() * 1000 + 100);
    const buys = Math.floor(Math.random() * (totalTxs / 2)) + Math.floor(totalTxs / 4);
    const sells = totalTxs - buys;

    return {
      priceChange5mPerc: parseFloat(priceChange),
      marketCapUSD: parseFloat((Math.random() * 500 + 50).toFixed(1)) * 1000,
      liquidityUSD: parseFloat((Math.random() * 300 + 30).toFixed(1)) * 1000,
      volumeUSD5m: parseFloat((Math.random() * 800 + 100).toFixed(1)) * 1000,
      totalTxs,
      buys,
      sells,
      chart: {
        c: Array.from({ length: 20 }, () => Math.random() * 100)
      }
    };
  };

  return (
    <div className="relative flex flex-row items-center w-full h-full bg-[#0A0A0A]">
      {/* Fixed position dropdown */}
      {showPumpLiveDropdown && (
        <div
          className="pump-live-dropdown fixed z-[99999] flex flex-col bg-[#1A1A1A] border border-[#333333] rounded-lg min-w-[200px] shadow-2xl"
          style={{ top: `${dropdownPosition.top}px`, left: `${dropdownPosition.left}px` }}
          onMouseEnter={() => setShowPumpLiveDropdown(true)}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownItemClick("Live Tracker");
            }}
            onMouseDown={(e) => e.preventDefault()}
            className="px-4 py-3 hover:bg-[#2A2A2A] cursor-pointer text-[#A0A0A0] hover:text-white transition-colors text-sm rounded-t-lg"
          >
            Live Tracker
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownItemClick("Top Streams Tokens");
            }}
            onMouseDown={(e) => e.preventDefault()}
            className="px-4 py-3 hover:bg-[#2A2A2A] cursor-pointer text-[#A0A0A0] hover:text-white transition-colors text-sm border-t border-[#333333] rounded-b-lg"
          >
            Top Streams Tokens
          </div>
        </div>
      )}

      <div className="flex flex-col h-full w-full container">
        <div className="flex flex-col justify-start items-center w-full h-full">
          <div className="flex flex-col flex-1 justify-center items-center p-0 sm:p-6 lg:p-[24px] w-full h-full">
            {/* Mobile Layout */}
            <div className="flex lg:hidden flex-col gap-2 mb-2 w-full">
              {/* Top Row - Token List Buttons */}
              <div className="flex flex-row justify-start items-start gap-2 overflow-x-auto px-2 w-full">
                {TokenListButtonMobile.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex-shrink-0 px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                      tokenListButton === item.name || (item.name === "Live" && tokenListButton === "Live Tracker")
                        ? "text-white"
                        : "text-[#A0A0A0] hover:text-white"
                    }`}
                    onClick={() => {
                      if (item.name === "Live") {
                        setTokenListButton("Live Tracker");
                      } else {
                        handleTokenButtonClick(item.name, item.route);
                      }
                    }}
                  >
                    <div className="font-medium text-xs whitespace-nowrap flex items-center gap-1">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Row - Time Filters and Filter Button */}
              <div className="flex flex-row justify-between items-center gap-2 px-2">
                <div className="flex flex-row items-center gap-1">
                  {FilterTimeList.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setFilterTime(item.name)}
                      className={`flex justify-center items-center w-[35px] h-[35px] rounded-sm transition-colors cursor-pointer ${
                        filterTime === item.name
                          ? " text-[#007AFF]"
                          : "text-[#A0A0A0] hover:text-white hover:bg-[#007AFF]/20"
                      }`}
                    >
                      <div className="font-medium text-[13px]">{item.name}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-row items-center gap-2">
                  <div className="flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl p-2 cursor-pointer">
                    <TiFilter className="text-[15px] text-[#A0A0A0]" />
                    <span className="font-medium text-[13px] text-[#A0A0A0]">Filter</span> {""}
                    <FaAngleDown className="text-[13px] text-[#A0A0A0]" />
                  </div>

                  <div className="flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-[35px] h-[35px] cursor-pointer">
                    <BsBookmarkX className="text-[15px] text-[#A0A0A0]" />
                  </div>

                  <div className="flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-[35px] h-[35px] cursor-pointer">
                    <FaEyeSlash className="text-[15px] text-[#A0A0A0]" />
                  </div>
                </div>
              </div>

              {/* Third Row - Wallet and Quick Buy */}
              <div className="flex flex-row justify-between items-center gap-2 px-2">
                <div className="flex flex-row justify-center items-center gap-2 hover:bg-[#2A2A2A] px-2 border border-[#333333] rounded-full h-[35px] transition-colors cursor-pointer">
                  <LuWallet className="text-[15px] text-[#A0A0A0]" />
                  <Image className="w-[13px] h-[13px]" src={solIcon} alt="solIcon" />
                  <span className="font-medium text-[13px] text-[#A0A0A0]">1</span>
                  <FaAngleDown className="text-[13px] text-[#A0A0A0]" />
                </div>

                <div className="flex flex-row items-center gap-2 flex-1 max-w-[242px] pl-3 border border-[#333333] rounded-full h-[35px]">
                  <span className="hidden lg:font-medium text-[13px] text-[#A0A0A0] whitespace-nowrap">
                    Quick Buy
                  </span>
                  <div className="flex flex-1 justify-between items-center min-w-0">
                    <input
                      type="text"
                      value={currentAmount !== 0 ? currentAmount : "0.00"}
                      onChange={(e) => setCurrentAmount(e.target.value)}
                      placeholder="0.00"
                      className="bg-transparent outline-none w-full font-medium text-[13px] text-[#A0A0A0] placeholder:text-[#A0A0A0]"
                    />
                    <Image
                      className="w-[13px] h-[13px] mr-1"
                      src={solIcon}
                      alt="solIcon"
                    />
                  </div>
                  <div className="flex items-center gap-1 pr-1 border-[#333333] border-l h-full">
                    {["P1", "P2", "P3"].map((preset) => (
                      <div
                        key={preset}
                        className="flex justify-center items-center w-[22px] h-[22px] rounded hover:bg-[#007AFF]/10 transition-colors cursor-pointer"
                        onClick={() => setSelectPreset(preset)}
                      >
                        <span
                          className={`font-medium text-[11px] transition-colors ${
                            selectPreset === preset
                              ? "text-[#007AFF]"
                              : "text-[#A0A0A0]"
                          }`}
                        >
                          {preset}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-row justify-center items-center gap-4 xl:gap-6 mb-4 w-full max-w-[1420px] h-[32px] min-h-[32px]">
              <div className="flex flex-row flex-1 justify-start items-center gap-4 xl:gap-6 text-nowrap overflow-x-auto overflow-y-visible">
                {TokenListButtonDesktop.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-row justify-start items-center h-[32px] ${
                      tokenListButton === item.name || tokenListButton === "Live Tracker" || tokenListButton === "Top Streams Tokens"
                        ? item.name === "Pump Live" ? "text-white" : ""
                        : ""
                    } ${
                      tokenListButton === item.name && item.name !== "Pump Live"
                        ? "text-white"
                        : "text-[#A0A0A0]"
                    }`}
                  >
                    <div
                      onClick={() => handleTokenButtonClick(item.name, item.route)}
                      onMouseEnter={(e) => item.dropdown && handlePumpLiveHover(e)}
                      onMouseLeave={(e) => {
                        if (item.dropdown) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const relatedTarget = e.relatedTarget as HTMLElement;
                          // Don't close if moving to dropdown
                          if (relatedTarget && (
                            relatedTarget.closest('.pump-live-dropdown') ||
                            e.clientY > rect.bottom
                          )) {
                            return;
                          }
                          handleDropdownMouseLeave();
                        }
                      }}
                      className="font-medium text-sm xl:text-base hover:text-white tracking-[-0.02em] cursor-pointer whitespace-nowrap flex items-center gap-1"
                    >
                      {item.name}
                      {item.dropdown && (
                        <FaAngleDown className={`text-[13px] xl:text-[15px] transition-transform ${showPumpLiveDropdown ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative flex flex-row justify-start items-center gap-4 xl:gap-6 min-w-0 text-nowrap">
                <div className="[&::-webkit-scrollbar]:hidden flex flex-row justify-start items-center gap-4 xl:gap-6 min-w-0 [-ms-overflow-style:none] overflow-x-auto overflow-y-hidden text-nowrap [scrollbar-width:none]">
                  <div className="flex flex-row justify-end items-center gap-1">
                    {FilterTimeList.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setFilterTime(item.name)}
                        className={`flex flex-col justify-center items-center hover:bg-[#007AFF]/20 rounded-sm w-[35px] h-[35px] text-white hover:text-[#007AFF] cursor-pointer ${
                          filterTime === item.name
                            ? "bg-[#007AFF] text-white"
                            : "text-[#A0A0A0]"
                        }`}
                      >
                        <div className="font-medium text-[13px] xl:text-[15px] hover:text-white">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row justify-center items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] px-3 xl:px-4 rounded-full h-[35px] text-[#A0A0A0] hover:text-white transition-all duration-150 ease-in-out cursor-pointer">
                    <TiFilter className="text-[15px] xl:text-[18px]" />
                    <span className="font-bold text-[13px] xl:text-[15px] whitespace-nowrap">
                      Filter
                    </span>
                    <FaAngleDown className="text-[15px] xl:text-[18px]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-2">
                <div className="group relative flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-[35px] h-[35px] cursor-pointer">
                  <BsBookmarkX className="text-[15px] xl:text-[18px] text-[#A0A0A0] group-hover:text-white transition-colors duration-150 ease-in-out" />
                </div>

                <div className="group relative flex justify-center items-center bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full w-[35px] h-[35px] cursor-pointer">
                  <FaEyeSlash className="text-[15px] xl:text-[18px] text-[#A0A0A0] group-hover:text-white transition-colors duration-150 ease-in-out" />
                </div>
              </div>

              <div className="flex flex-row justify-start items-center gap-2 xl:gap-3 h-full">
                <div className="group flex flex-row justify-center items-center gap-2 hover:bg-[#2A2A2A] px-3 xl:px-4 border border-[#333333] rounded-full h-[35px] transition-colors duration-125 cursor-pointer">
                  <div className="flex flex-row justify-center items-center gap-1">
                    <LuWallet className="text-[15px] xl:text-[18px] text-[#A0A0A0] transition-colors duration-150 ease-in-out" />
                    <span className="font-medium text-[13px] xl:text-[15px] text-[#A0A0A0] transition-colors duration-150 ease-in-out">
                      1
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-1">
                    <Image
                      className="w-[13px] h-[13px] xl:w-[18px] xl:h-[18px]"
                      src={solIcon}
                      alt="solIcon"
                    />
                    <span className="font-medium text-[13px] xl:text-[15px] text-[#A0A0A0] transition-colors duration-150 ease-in-out">
                      1
                    </span>
                  </div>
                  <FaAngleDown className="text-[15px] xl:text-[18px] text-[#A0A0A0] transition-colors duration-150 ease-in-out" />
                </div>

                <div className="flex flex-row justify-start items-center gap-2 pl-3 xl:pl-4 border border-[#333333] rounded-full min-w-[198px] xl:min-w-[238px] h-[35px] overflow-hidden font-normal whitespace-nowrap transition-colors duration-125 cursor-pointer">
                  <span className="flex font-medium text-[13px] xl:text-[15px] text-[#A0A0A0]">
                    Quick Buy
                  </span>
                  <div className="flex flex-1 justify-between items-center min-w-0 max-w-[66px]">
                    <input
                      type="text"
                      value={currentAmount !== 0 ? currentAmount : "0.00"}
                      onChange={(e) => setCurrentAmount(e.target.value)}
                      placeholder="0.00"
                      className="bg-transparent outline-none w-full font-medium text-[13px] xl:text-[15px] text-[#A0A0A0] placeholder:text-[#A0A0A0] text-left"
                    />
                    <Image
                      className="w-[13px] h-[13px] xl:w-[18px] xl:h-[18px]"
                      src={solIcon}
                      alt="solIcon"
                    />
                  </div>
                  <div className="flex justify-center items-center gap-1 xl:gap-2 pr-1 pl-1 border-[#333333] border-l h-full cursor-pointer">
                    {["P1", "P2", "P3"].map((preset) => (
                      <div
                        key={preset}
                        className="group flex flex-row justify-center items-center hover:bg-[#007AFF]/10 rounded w-[26px] h-[26px] transition-colors duration-125 ease-in-out cursor-pointer"
                        onClick={() => setSelectPreset(preset)}
                      >
                        <span
                          className={`flex flex-row justify-center items-center font-medium text-[13px] transition-colors duration-125 ease-in-out ${
                            selectPreset === preset
                              ? "text-[#007AFF]"
                              : "text-[#A0A0A0]"
                          }`}
                        >
                          {preset}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Conditional Content Rendering */}
            {tokenListButton === "Surge" ? (
              <div className="flex flex-col flex-1 w-full h-full overflow-auto">
                <Surge />
              </div>
            ) : tokenListButton === "Dex Screener" || tokenListButton === "Dex" ? (
              <DexScreenerTab />
            ) : tokenListButton === "Live Tracker" ? (
              <LiveTrackerTab />
            ) : tokenListButton === "Top Streams Tokens" ? (
              <TopStreamsTokensTab />
            ) : (
              <div className="flex flex-col flex-1 justify-start items-center border-0 lg:border-[1px] border-[#333333] rounded-none lg:rounded-[4px] w-full h-full overflow-auto">
                {/* Mobile: Horizontal scroll wrapper */}
                <div className="flex lg:hidden w-full h-full overflow-x-auto">
                  <div className="flex flex-col justify-start items-start bg-[#1A1A1A] w-full min-w-[1320px] h-full">
                    {/* Mobile Table Header */}
                    <TokenTableHeader />

                    <div className="flex flex-col w-full h-full overflow-auto overflow-y-scroll">
                      {(tokenList || [])
                        .filter((it: any) => {
                          const key = (it?.address || it?.id || "") as string;
                          return key ? !hiddenIds.has(key) : true;
                        })
                        .map((item: any, index: number) => (
                          <TokenDataCard
                            key={item.id || item.address || index}
                            item={item}
                            index={index}
                            hiddenIds={hiddenIds}
                            setHiddenIds={setHiddenIds}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:flex flex-col justify-start items-start bg-[#1A1A1A] w-full min-w-[0px] max-w-[1420px] h-full">
                  {/* Desktop Table Header - Responsive */}
                  <TokenTableHeader />

                  <div className="flex flex-col w-full h-full overflow-auto overflow-y-scroll">
                    {(tokenList || [])
                      .filter((it: any) => {
                        const key = (it?.address || it?.id || "") as string;
                        return key ? !hiddenIds.has(key) : true;
                      })
                      .map((item: any, index: number) => (
                        <TokenDataCard
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
