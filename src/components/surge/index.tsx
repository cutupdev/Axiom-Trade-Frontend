"use client";
import React from "react";
import Image from "next/image";
import TokenIcon from "@/../public/logo.png";
import solIcon from "@/../public/images/sol.png";
import { FaRegCopy } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

interface SurgeCardProps {
  rank: number;
  item: any;
  section: "early" | "surging";
}

function SurgeCard({ rank, item, section }: SurgeCardProps) {
  const mcValue = item?.marketCap || 0;
  const mcDisplay = mcValue >= 1000000
    ? `$${(mcValue / 1000000).toFixed(1)}M`
    : mcValue >= 1000
    ? `$${(mcValue / 1000).toFixed(1)}K`
    : `$${mcValue}`;

  const athValue = item?.ath || 0;
  const athDisplay = athValue >= 1000000
    ? `$${(athValue / 1000000).toFixed(1)}M`
    : athValue >= 1000
    ? `$${(athValue / 1000).toFixed(1)}K`
    : `$${athValue}`;

  const mcChange = item?.mcChange || 0;
  const athMultiplier = item?.athMultiplier || 0;
  const timeAgo = item?.timeAgo || "5m";

  // Progress bar percentage (mock calculation)
  const progressPercent = Math.min((mcValue / athValue) * 100, 100);

  return (
    <div className="group flex flex-row items-center gap-3 bg-[#0A0D12] hover:bg-[#161B22] border border-[#21262D] rounded-lg p-3 transition-colors cursor-pointer w-full">
      {/* Token Image with border - WHITE background like in image */}
      <div className="relative flex-shrink-0">
        <div className="flex justify-center items-center bg-white rounded-md w-[70px] h-[70px]">
          <span className="font-bold text-xl text-black">{item?.symbol || "PVE"}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        {/* Top Row: Token Name + Time */}
        <div className="flex flex-row items-start justify-between gap-2">
          <div className="flex flex-row items-center gap-2">
            <span className="font-bold text-base text-white">
              {item?.symbol || "PVE"}
            </span>
            <span className="text-sm text-[#A0A0A0]">
              {item?.name || "PVE"}
            </span>
            <FaRegCopy className="text-xs text-[#A0A0A0] cursor-pointer hover:text-white" />
          </div>
          <div className="text-sm text-[#A0A0A0] whitespace-nowrap">
            {timeAgo}
          </div>
        </div>

        {/* Creator info */}
        <div className="flex flex-row items-center gap-2 text-xs text-[#22c55e]">
          <span>{item?.creator || "Co5v...pump"}</span>
          <span>{timeAgo}</span>
          <div className="flex flex-row items-center gap-1">
            <span>👥</span>
            <span>🌐</span>
            <span>✏️</span>
            <IoSearchOutline className="text-sm" />
          </div>
        </div>

        {/* Market Cap with Progress Bar */}

          {/* Progress bar */}
          <div className="w-full bg-[#1A1A1A] rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full ${mcChange >= 0 ? 'bg-[#007AFF]' : 'bg-[#ef4444]'}`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="flex justify-end">
            <span className="text-xs text-[#FFA500]">
              ATH {athDisplay} {athMultiplier}x
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-3 text-xs flex-wrap">
            <div className="flex items-center gap-1">
              <span className="text-[#A0A0A0]">V</span>
              <span className="text-white">${(item?.volume24h / 1000 || 6.19).toFixed(2)}K</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#A0A0A0]">L</span>
              <span className="text-white">${(item?.liquidity / 1000 || 10.5).toFixed(1)}K</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#A0A0A0]">👥</span>
              <span className="text-white">{item?.holders || 24}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#A0A0A0]">🔥</span>
              <span className="text-white">{item?.burns || 19}</span>
            </div>

            {/* Percentage stats */}
            <span className="text-[#22c55e]">
              ⚡ {(item?.stat1 || 10)}%
            </span>
            <span className="text-[#007AFF]">
              📊 {(item?.stat2 || 5)}%
            </span>
            <span className="text-[#22c55e]">
              🎯 {(item?.stat3 || 5)}%
            </span>
            <span className="text-[#22c55e]">
              ✓ {(item?.stat4 || 0)}%
            </span>
            <span className="text-[#ef4444]">
              ⚠ {(item?.stat5 || 10)}%
            </span>
          </div>

          {/* Action Button */}
          <button className="bg-[#007AFF] hover:bg-[#007AFF]/80 rounded-full w-[40px] h-[40px] flex items-center justify-center transition-colors flex-shrink-0">
            <span className="text-white text-xl">⚡</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Surge() {
  // Mock data - will be replaced with actual data
  const earlyTokens = [
    {
      symbol: "ONE",
      name: "ONE",
      image: "/images/tokens/one.png",
      marketCap: 17300,
      ath: 24600,
      mcChange: 12.47,
      athMultiplier: 1.42,
      timeAgo: "3m",
      creator: "8moG...Aone",
      volume24h: 3650,
      liquidity: 9890,
      holders: 18,
      burns: 18,
      stat1: 0,
      stat2: 0,
      stat3: 0,
      stat4: 0,
      stat5: 0,
    },
    {
      symbol: "Members",
      name: "Members",
      image: "/images/tokens/members.png",
      marketCap: 16100,
      ath: 26500,
      mcChange: 51.9,
      athMultiplier: 1.65,
      timeAgo: "6m",
      volume24h: 3500,
      liquidity: 10900,
      holders: 48,
      burns: 33,
      stat1: 22,
      stat2: 0,
      stat3: 0,
      stat4: 0,
      stat5: 0,
    },
    {
      symbol: "-1",
      name: "-1",
      image: "/images/tokens/minus1.png",
      marketCap: 12100,
      ath: 11800,
      mcChange: -45.6,
      athMultiplier: 0.98,
      timeAgo: "9m",
      volume24h: 7170,
      liquidity: 9480,
      holders: 31,
      burns: 15,
      stat1: 2,
      stat2: 2,
      stat3: 2,
      stat4: 0,
      stat5: 12,
    },
    {
      symbol: "SMB",
      name: "MonkeyStrategy",
      image: "/images/tokens/smb.png",
      marketCap: 49000,
      ath: 95000,
      mcChange: 177.9,
      athMultiplier: 1.94,
      timeAgo: "13m",
      volume24h: 6800,
      liquidity: 11800,
      holders: 59,
      burns: 34,
      stat1: 0,
      stat2: 4,
      stat3: 4,
      stat4: 0,
      stat5: 8,
    },
  ];

  const surgingTokens = [
    {
      symbol: "SMB",
      name: "MonkeyStrategy",
      image: "/images/tokens/smb.png",
      marketCap: 71300,
      ath: 95000,
      mcChange: -19,
      athMultiplier: 1.33,
      timeAgo: "3m",
      volume24h: 4630,
      liquidity: 16000,
      holders: 138,
      burns: 68,
      stat1: 27,
      stat2: 4,
      stat3: 4,
      stat4: 2,
      stat5: 0,
    },
    {
      symbol: "LOOK",
      name: "LOOK",
      image: "/images/tokens/look.png",
      marketCap: 66200,
      ath: 66500,
      mcChange: -3.52,
      athMultiplier: 1,
      timeAgo: "6m",
      volume24h: 6190,
      liquidity: 978000,
      holders: 6078,
      burns: 414,
      stat1: 28,
      stat2: 0,
      stat3: 0,
      stat4: 62,
      stat5: 4,
    },
    {
      symbol: "LOOK",
      name: "LOOK",
      image: "/images/tokens/look.png",
      marketCap: 64600,
      ath: 67100,
      mcChange: -1.04,
      athMultiplier: 1.04,
      timeAgo: "12m",
      volume24h: 14600,
      liquidity: 975000,
      holders: 6077,
      burns: 413,
      stat1: 28,
      stat2: 0,
      stat3: 0,
      stat4: 62,
      stat5: 4,
    },
    {
      symbol: "LOOK",
      name: "LOOK",
      image: "/images/tokens/look.png",
      marketCap: 63900,
      ath: 67100,
      mcChange: 0.046,
      athMultiplier: 1.05,
      timeAgo: "14m",
      volume24h: 8710,
      liquidity: 962000,
      holders: 6076,
      burns: 413,
      stat1: 28,
      stat2: 0,
      stat3: 0,
      stat4: 62,
      stat5: 4,
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[#0A0A0A] px-2 sm:px-4 lg:px-6 py-4 overflow-auto">
      {/* Desktop: 2 columns side by side, Mobile: 1 column stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full max-w-[1420px] mx-auto">
        {/* Early Section */}
        <div className="flex flex-col gap-3 bg-[#0D1117] border border-[#21262D] rounded-lg p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-bold text-white">Early</h2>
          <div className="flex flex-col gap-2 sm:gap-3">
            {earlyTokens.map((token, index) => (
              <SurgeCard
                key={`early-${index}`}
                rank={index + 1}
                item={token}
                section="early"
              />
            ))}
          </div>
        </div>

        {/* Surging Section */}
        <div className="flex flex-col gap-3 bg-[#0D1117] border border-[#21262D] rounded-lg p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-bold text-white">Surging</h2>
          <div className="flex flex-col gap-2 sm:gap-3">
            {surgingTokens.map((token, index) => (
              <SurgeCard
                key={`surging-${index}`}
                rank={index + 1}
                item={token}
                section="surging"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
