"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import TokenIcon from "@/../public/logo.png";
import { FaEyeSlash } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import solIcon from "@/../public/images/sol.png";
import { FaRegCopy } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import SparklineChart from "../SparklineChart";
import UserContext from "@/contexts/usercontext";

interface DexScreenerCardProps {
  item: any;
  index: number;
  hiddenIds: Set<string>;
  setHiddenIds: React.Dispatch<React.SetStateAction<Set<string>>>;
}

// Dex Screener Table Header Component
export function DexScreenerTableHeader() {
  return (
    <div className="sticky top-0 z-20 flex flex-row items-center px-2 sm:px-[13px] border-b border-[#333333] w-full min-w-fit h-[40px] sm:h-[48px] lg:h-[53px] bg-[#0D1117] text-[#A0A0A0] text-[10px] sm:text-[11px] lg:text-[12px] font-medium">
      <div className="flex justify-start items-center gap-1 px-4 sm:px-4 w-[260px] sm:w-[260px] lg:w-[320px] flex-shrink-0">
        Pair Info
      </div>
      <div className="flex justify-center items-center px-3 sm:px-2 lg:px-3 w-[120px] sm:w-[110px] lg:w-[140px] flex-shrink-0">
        {/* Chart - no title */}
      </div>
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 cursor-pointer w-[130px] sm:w-[120px] lg:w-[140px] flex-shrink-0">
        Market Cap
      </div>
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 cursor-pointer w-[120px] sm:w-[110px] lg:w-[130px] flex-shrink-0">
        Liquidity
      </div>
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 cursor-pointer w-[120px] sm:w-[110px] lg:w-[130px] flex-shrink-0">
        Volume
      </div>
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 cursor-pointer w-[130px] sm:w-[120px] lg:w-[140px] flex-shrink-0">
        TXNS
      </div>
      <div className="flex justify-start items-center gap-1 px-3 sm:px-2 lg:px-3 w-[180px] sm:w-[140px] lg:w-[160px] flex-shrink-0">
        Audit Log
      </div>
      <div className="flex justify-center items-center w-[120px] sm:w-[130px] lg:w-[150px] flex-shrink-0">
        Action
      </div>
    </div>
  );
}

export default function DexScreenerCard({
  item,
  index,
  hiddenIds,
  setHiddenIds,
}: DexScreenerCardProps) {
  const { successAlert } = useContext<any>(UserContext);
  const [nowSec, setNowSec] = useState<number>(Math.floor(Date.now() / 1000));

  const ellipsize = (value: any, maxLen: number) => {
    const text = String(value ?? "");
    return text.length > maxLen
      ? `${text.slice(0, Math.max(0, maxLen - 1))}…`
      : text;
  };

  const formatSince = (creationTimestamp?: number) => {
  };

  return (
    <div className="group flex flex-row items-center bg-[#0A0D12] hover:bg-[#161B22] active:bg-[#22c55e]/10 px-2 sm:px-[13px] border-[#21262D] border-b-[1px] w-full min-w-fit h-[90px] sm:h-[100px] lg:h-[110px] cursor-pointer">

      {/* Pair Info Column - Fixed width */}
      <div className="flex justify-start items-center gap-3 sm:gap-4 p-3 sm:px-4 w-[260px] sm:w-[260px] lg:w-[320px] flex-shrink-0">
        <div className="relative flex-shrink-0 justify-center items-center w-[45px] sm:w-[55px] h-[45px] sm:h-[55px]">
          <span className="contents">
            <div className="top-[32px] sm:top-[53px] left-[32px] sm:left-[53px] z-30 absolute flex justify-center items-center p-[1px] rounded-full w-[14px] sm:w-[16px] h-[14px] sm:h-[16px] [background:linear-gradient(219deg,#FFD700_0%,#DAA520_48.97%,#B8860B_48.98%,#996515_100%)]">
              <div className="z-30 absolute flex justify-center items-center bg-[#0A0A0A] rounded-full w-[12px] sm:w-[14px] h-[12px] sm:h-[14px]">
                <Image
                  className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px]"
                  src={solIcon}
                  alt="TokenIcon"
                />
              </div>
            </div>
          </span>
          <div className="z-20 absolute flex justify-start items-center bg-[#53D38E]/20 p-[1px] rounded-[4px]">
            <div className="group flex justify-start items-center bg-[#1A1A1A] p-[2px] rounded-[3px]">
              <div className="group/image relative flex-shrink-0 w-[36px] sm:w-[56px] h-[36px] sm:h-[56px]">
                <div className="z-10 absolute border-[1px] border-[#333333] rounded-[1px] w-[36px] sm:w-[56px] h-[36px] sm:h-[56px] pointer-events-none"></div>
                <div className="relative w-full h-full">
                  {typeof item?.tokenImage === "string" && item.tokenImage ? (
                    <Image
                      className="rounded-[1px] w-full h-full object-cover"
                      src={item.tokenImage as string}
                      alt="TokenIcon"
                      width={56}
                      height={56}
                    />
                  ) : (
                    <Image
                      className="rounded-[1px] w-full h-full object-cover"
                      src={TokenIcon}
                      alt="TokenIcon"
                    />
                  )}
                  <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-200">
                    <CiCamera className="text-[24px] text-gray" />
                  </div>
                </div>
              </div>
              {typeof item?.tokenImage === "string" && item.tokenImage && (
                <div className="hidden group-hover/image:block top-0 left-[64px] z-50 absolute bg-[#1A1A1A] shadow-xl p-[4px] border border-[#333333] rounded-[6px]">
                  <Image
                    className="rounded-[4px] w-[160px] h-[160px] object-cover"
                    src={item.tokenImage as string}
                    alt="Token Preview"
                    width={160}
                    height={160}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="top-0 left-0 z-10 absolute rounded-[4px] w-[42px] sm:w-[62px] h-[42px] sm:h-[62px] [background:linear-gradient(219deg,#FFD700_0%,#DAA520_48.97%,#B8860B_48.98%,#996515_100%)]"></div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 p-2">
          <div className="flex flex-row justify-start items-center gap-1">
            <span
              title={item.symbol || ""}
              className="font-medium text-[12px] text-white sm:text-[16px] tracking-[-0.02em]"
            >
              {ellipsize(item.symbol || "-", 10)}
            </span>
            <span
              title={item.name || item.address || ""}
              className="block max-w-full font-medium text-[12px] text-inherit text-gray-500 sm:text-[16px] truncate tracking-[-0.02em]"
            >
              {ellipsize(item.name || item.address || "-", 16)}
            </span>
            <span className="contents">
              <div className="flex flex-row justify-start items-center gap-[4px] min-w-0 overflow-hidden text-gray-500 hover:text-green-500 transition-colors duration-[125ms]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (item.address) {
                      navigator.clipboard
                        ?.writeText(item.address)
                        .then(() => successAlert("Address copied"))
                        .catch(() => {});
                    }
                  }}
                  aria-label="Copy token address"
                  type="button"
                >
                  <FaRegCopy className="text-[12px] text-inherit text-gray-500 sm:text-[14px]" />
                </button>
              </div>
            </span>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <span className="font-medium text-[12px] text-white sm:text-[14px]">
              {formatSince(
                Number(
                  item.creationTimestamp || item.poolCreationBlockTimestamp
                )
              )}
            </span>
            {!!(item.links?.twitter || item.twitter) && (
              <a
                href={(item.links?.twitter || item.twitter) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="Twitter profile"
              >
                <CiUser className="text-[14px] text-white sm:text-[16px] hover:text-green-500 transition-colors duration-[125ms]" />
              </a>
            )}
            {!!(item.links?.website || item.website) && (
              <a
                href={(item.links?.website || item.website) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="Website"
              >
                <TbWorld className="text-[14px] text-white sm:text-[16px] hover:text-green-500 transition-colors duration-[125ms]" />
              </a>
            )}
            {!!(item.links?.telegram || item.telegram) && (
              <a
                href={(item.links?.telegram || item.telegram) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="text-[14px] text-white sm:text-[16px] hover:text-green-500 transition-colors duration-[125ms]" />
              </a>
            )}
            {!!(item.links?.discord || item.discord) && (
              <a
                href={(item.links?.discord || item.discord) as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                aria-label="Discord"
              >
                <FaDiscord className="text-[14px] text-white sm:text-[16px] hover:text-green-500 transition-colors duration-[125ms]" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Chart Column - Fixed width */}
      <div className="flex justify-center items-center px-3 sm:px-2 lg:px-3 w-[120px] sm:w-[110px] lg:w-[140px] flex-shrink-0">
        <div className="relative w-[100px] sm:w-[90px] lg:w-[110px] h-[45px] sm:h-[45px] lg:h-[50px]">
          <SparklineChart
            data={Array.isArray(item.chart?.c) ? (item.chart.c as number[]) : []}
            tokenAddress={item.address || ""}
            width={110}
            height={50}
            color={Number(item.priceChange5mPerc) >= 0 ? "#00E676" : "#FF4081"}
            className="bg-transparent rounded-[4px]"
            useWebSocketData={
              !Array.isArray(item.chart?.c) || (item.chart?.c?.length || 0) === 0
            }
          />
        </div>
      </div>

      {/* Market Cap Column - Fixed width */}
      <div className="flex flex-col justify-center items-start gap-0.5 sm:gap-1 px-3 sm:px-2 lg:px-3 w-[130px] sm:w-[120px] lg:w-[140px] flex-shrink-0">
        <span className="font-medium text-[11px] sm:text-[13px] lg:text-[14px] text-white truncate">
          ${item.marketCapUSD ? (Number(item.marketCapUSD) / 1000000).toFixed(2) : 0}M
        </span>
        <span
          className={`font-medium text-[10px] sm:text-[11px] lg:text-[12px] ${
            Number(item.priceChange5mPerc) >= 0
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {Number(item.priceChange5mPerc) >= 0 ? '⬇ ' : '⬆ '}{Math.abs(Number.isFinite(Number(item.priceChange5mPerc)) ? Number(item.priceChange5mPerc) : 0).toFixed(2)}%
        </span>
      </div>

      {/* Liquidity Column - Fixed width */}
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 w-[120px] sm:w-[110px] lg:w-[130px] flex-shrink-0">
        <span className="font-medium text-[11px] sm:text-[13px] lg:text-[14px] text-white truncate">
          ${item.liquidityUSD ? (Number(item.liquidityUSD) / 1000).toFixed(1) : 0}K
        </span>
      </div>

      {/* Volume Column - Fixed width */}
      <div className="flex justify-start items-center px-3 sm:px-2 lg:px-3 w-[120px] sm:w-[110px] lg:w-[130px] flex-shrink-0">
        <span className="font-medium text-[11px] sm:text-[13px] lg:text-[14px] text-white truncate">
          ${item.volumeUSD5m ? (Number(item.volumeUSD5m) / 1000).toFixed(1) : 0}K
        </span>
      </div>

      {/* TXNS Column - Fixed width */}
      <div className="flex flex-col justify-center items-start gap-0.5 sm:gap-1 px-3 sm:px-2 lg:px-3 w-[130px] sm:w-[120px] lg:w-[140px] flex-shrink-0">
        <span className="font-medium text-[11px] sm:text-[13px] lg:text-[14px] text-white truncate">
          {item.totalTxns ? (item.totalTxns / 1000).toFixed(1) : 0}K
        </span>
        <div className="flex flex-row gap-0.5 sm:gap-1 font-medium text-[10px] sm:text-[11px] lg:text-[12px]">
          <span className="text-green-500">{item.buys ?? 0}</span>
          <span className="text-gray-400">/</span>
          <span className="text-red-500">{item.sells ?? 0}</span>
        </div>
      </div>

      {/* Audit Log Column - Fixed width */}
      <div className="flex flex-col gap-0.5 sm:gap-1 px-3 sm:px-2 lg:px-3 w-[180px] sm:w-[140px] lg:w-[160px] flex-shrink-0">
        {/* Row 1 - Percentage indicators */}
        <div className="flex flex-row gap-1 items-center">
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px]">
            <span className="text-red-500">
              ⬇ {item.auditLog?.percentage1 || "25.96"}%
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] sm:text-[11px]">
            <span className="text-green-500">
              ⬆ {item.auditLog?.percentage2 || "100"}%
            </span>
          </div>
        </div>

        {/* Row 2 - Status badges */}
        <div className="flex flex-row gap-1 flex-wrap">
          <div className="flex items-center gap-1 bg-green-500/20 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] text-green-500">
            ⬆ Paid
          </div>
        </div>
      </div>

      {/* Action Column - Fixed width matching header */}
      <div className="flex justify-center items-center w-[120px] sm:w-[130px] lg:w-[150px] flex-shrink-0">
        <button className="bg-[#007AFF] hover:bg-[#007AFF]/80 px-4 sm:px-5 lg:px-6 py-1.5 lg:py-2 rounded-full font-bold text-[11px] sm:text-[12px] lg:text-[13px] text-white transition-all whitespace-nowrap">
          Buy
        </button>
      </div>
    </div>
  );
}
