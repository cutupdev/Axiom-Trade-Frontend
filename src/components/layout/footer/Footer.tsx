"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiCompassDiscoverLine,
  RiListSettingsFill,
  RiEyeLine,
  RiSearchLine,
} from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import Image from "next/image";
import { SocialLinks } from "@/config/ConfigData";
import solIcon from "@/../public/images/sol.png";
import { FaAngleDown, FaBitcoin, FaEthereum } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { CiWavePulse1 } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { BiBandAid, BiGasPump } from "react-icons/bi";
import { PiDatabaseDuotone } from "react-icons/pi";
import { TfiLayoutTabWindow } from "react-icons/tfi";
import { TiDocumentText } from "react-icons/ti";

import MeteoraImg from "@/../public/images/meteora.svg";
import PumpfunImg from "@/../public/images/pump.svg";
import BonkImg from "@/../public/images/bonk.svg";
import SolIcon from "@/../public/images/sol.png";
import WebSocketStatus from "@/components/others/WebSocketStatus";

const Footer: FC = () => {
  const pathname = usePathname();

  const mobileNav = [
    {
      href: "/discover",
      label: "Explore",
      icon: RiCompassDiscoverLine,
      isActive: pathname === "/" || pathname?.startsWith("/discover"),
    },
    {
      href: "/discover",
      label: "Search",
      icon: RiSearchLine,
      isActive: pathname?.startsWith("/search"),
    },
    {
      href: "/vision",
      label: "Vision",
      icon: RiEyeLine,
      isActive: pathname?.startsWith("/vision"),
    },
    {
      href: "/perpetuals",
      label: "Perpetuals",
      icon: FiBarChart2,
      isActive: pathname?.startsWith("/perpetuals"),
    },
    {
      href: "/rewards",
      label: "Earn",
      icon: FiBarChart2,
      isActive: pathname?.startsWith("/rewards"),
    },
    {
      href: "/portfolio",
      label: "Account",
      icon: MdOutlineAccountBalanceWallet,
      isActive: pathname?.startsWith("/portfolio"),
    },
  ];
  return (
    <footer className="lg:relative fixed bottom-0 inset-x-0 z-40 flex flex-row items-center justify-center border-t-[1px] border-t-gray-900 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur min-h-[40px] py-1 pb-[env(safe-area-inset-bottom)]">
      

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-center w-full max-w-full">
          <div className="flex flex-row justify-start items-center gap-2 lg:gap-3 h-[24px] min-w-0 flex-1">
            <div className="flex flex-row justify-center items-center gap-1 bg-[#526fff]/30 px-2 rounded-md h-[24px] text-[#526fff] flex-shrink-0">
              <RiListSettingsFill className="text-[16px]" />
              <span className="text-[12px] whitespace-nowrap">PRESET 1</span>
            </div>

            <div className="group flex flex-row justify-center items-center gap-[8px] hover:bg-primaryStroke/35 px-2 border border-gray-900 rounded-full h-[24px] transition-colors duration-125 cursor-pointer flex-shrink-0">
              <div className="flex flex-row justify-center items-center gap-[4px]">
                <LuWallet className="text-[14px] text-white transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[12px] text-white transition-colors duration-150 ease-in-out cursor-pointer">
                  1
                </span>
              </div>
              <div className="flex flex-row justify-center items-center gap-[4px]">
                <Image
                  className="w-[12px] h-[12px]"
                  src={solIcon}
                  alt="solIcon"
                />
                <span className="font-medium text-[12px] text-white transition-colors duration-150 ease-in-out cursor-pointer">
                  1
                </span>
              </div>
              <FaAngleDown className="text-[12px] text-white transition-colors duration-150 ease-in-out cursor-pointer" />
            </div>

            {/* Navigation Links - Hidden on smaller desktop screens */}
            <div className="hidden xl:flex flex-row justify-center items-center gap-2 xl:gap-4 px-3 border-r-[1px] border-r-gray-900 border-l-[1px] border-l-gray-900 h-6 flex-shrink-0">
              <div className="flex flex-row justify-center items-center gap-1 px-1 text-gray-600 hover:text-white transition-colors duration-150">
                <MdOutlineAccountBalanceWallet className="text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <div className="relative flex flex-col">
                  <div className="-top-0 -right-2 absolute flex flex-col bg-red-600 rounded-full w-1.5 h-1.5"></div>
                  <span className="font-medium text-[12px]">Wallet</span>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 px-1 text-gray-600 hover:text-white transition-colors duration-150">
                <FaXTwitter className="text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <div className="relative flex flex-col">
                  <div className="-top-0 -right-2 absolute flex flex-col bg-red-600 rounded-full w-1.5 h-1.5"></div>
                  <span className="font-medium text-[12px] whitespace-nowrap">Twitter</span>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 px-1 text-gray-600 hover:text-white transition-colors duration-150">
                <RiCompassDiscoverLine className="text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <div className="relative flex flex-col">
                  <div className="-top-0 -right-2 absolute flex flex-col bg-red-600 rounded-full w-1.5 h-1.5"></div>
                  <span className="font-medium text-[12px] whitespace-nowrap">Discover</span>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 px-1 text-gray-600 hover:text-white transition-colors duration-150">
                <CiWavePulse1 className="text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <div className="relative flex flex-col">
                  <div className="-top-0 -right-2 absolute flex flex-col bg-red-600 rounded-full w-1.5 h-1.5"></div>
                  <span className="font-medium text-[12px] whitespace-nowrap">Pulse</span>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 px-1 text-gray-600 hover:text-white transition-colors duration-150">
                <FiBarChart2 className="text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <div className="relative flex flex-col">
                  <span className="font-medium text-[12px] whitespace-nowrap">PnL</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-[3px] px-1 border-[1px] border-green-300 rounded-full h-6 cursor-pointer flex-shrink-0">
              <Image
                className="w-[11px] h-[11px]"
                src={MeteoraImg}
                alt="MeteoraImg"
              />
              <Image
                className="w-[11px] h-[11px]"
                src={PumpfunImg}
                alt="PumpfunImg"
              />
              <Image
                className="w-[11px] h-[11px]"
                src={BonkImg}
                alt="BonkImg"
              />
            </div>

            <div className="flex flex-row justify-center items-center gap-2 lg:gap-3 px-2 lg:px-3 border-l-[1px] border-l-gray-900 h-6 flex-shrink-0">
              <div className="flex flex-row justify-center items-center gap-1 h-6 text-[#f7931a] flex-shrink-0">
                <FaBitcoin className="text-[12px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[11px] lg:text-[12px] whitespace-nowrap">
                  $116.3K
                </span>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 h-6 text-[#497493] flex-shrink-0">
                <FaEthereum className="text-[12px] lg:text-[14px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[11px] lg:text-[12px] whitespace-nowrap">
                  $4.48K
                </span>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 h-6 text-[#14f195] flex-shrink-0">
                <Image
                  src={SolIcon}
                  alt="SolIcon"
                  width={12}
                  height={12}
                  className="transition-colors duration-150 ease-in-out cursor-pointer"
                />
                <span className="font-medium text-[11px] lg:text-[12px] whitespace-nowrap">
                  $239.45
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end items-center gap-2 lg:gap-3 h-6 min-w-0 flex-1">
            {/* Stats - Hidden on smaller desktop screens */}
            <div className="hidden xl:flex flex-row justify-center items-center gap-2 font-medium text-[12px] text-gray-600 flex-shrink-0">
              <div className="flex flex-row justify-center items-center gap-1 hover:text-white cursor-pointer transition-colors duration-150">
                <BiBandAid className="text-[12px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[12px] whitespace-nowrap">$97.8K</span>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 hover:text-white cursor-pointer transition-colors duration-150">
                <BiGasPump className="text-[12px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[12px] whitespace-nowrap">0.01</span>
              </div>

              <div className="flex flex-row justify-center items-center gap-1 hover:text-white cursor-pointer transition-colors duration-150">
                <PiDatabaseDuotone className="text-[12px] transition-colors duration-150 ease-in-out cursor-pointer" />
                <span className="font-medium text-[12px] whitespace-nowrap">0.01</span>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 lg:gap-3 px-2 border-r-[1px] border-r-gray-900 border-l-[1px] border-l-gray-900 h-6 flex-shrink-0">
              <WebSocketStatus />
              <TfiLayoutTabWindow className="text-[12px] text-gray-600 hover:text-white transition-colors duration-150 ease-in-out cursor-pointer" />
            </div>

            <div className="flex flex-row justify-center items-center gap-2 lg:gap-3 px-2 h-6 text-gray-600 flex-shrink-0">
              {SocialLinks.map((social) => (
                <div
                  key={social.name}
                  onClick={() => window.open(social.url, "_blank")}
                  className="flex flex-row justify-center items-center gap-1 hover:text-white cursor-pointer transition-colors duration-150"
                >
                  {social.icon}
                </div>
              ))}
              <div className="hidden lg:flex flex-row gap-1 hover:text-white cursor-pointer transition-colors duration-150">
                <TiDocumentText className="text-[14px]" />
                <span className="font-medium text-[12px] whitespace-nowrap">DOCS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
