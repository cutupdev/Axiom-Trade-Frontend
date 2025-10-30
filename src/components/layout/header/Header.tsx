'use client'

import { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import UserContext from "@/contexts/usercontext";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { FaAngleDown, FaRegStar, FaBars, FaTimes } from "react-icons/fa";
import { LuUserCog, LuWallet } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import Image from "next/image";
import solIcon from "@/../public/images/sol.png"
import USDCIcon from "@/../public/images/usdc-perps.svg"
import { usePathname, useRouter } from "next/navigation";
import { MenuList } from "@/config/ConfigData";

const Header: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setLoadingState } = useContext<any>(UserContext);

  const handleClickOutside = (e: string) => {
    setLoadingState(true);
    setIsMobileMenuOpen(false);
    router.push(e);
  };

  useEffect(() => {
  }, [pathname]);

  return (
    <>
      <header className="hidden lg:flex flex-col border-gray-900 border-b-[1px] w-full relative">
        <div className="flex flex-col items-center w-full">
          
          {/* Secondary Header - Small icons row */}
          <div className="flex flex-row items-center gap-2 px-3 sm:px-6 w-full h-[24px] bg-[#0A0A0A] border-t border-[#333333]">
            <button
              onClick={() => router.push('/settings')}
              className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
              title="Settings"
            >
              <IoSettingsOutline className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-3 bg-[#333333]"></div>

            <button
              onClick={() => router.push('/watchlist')}
              className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
              title="Watchlist"
            >
              <FaRegStar className="w-4 h-4" />
            </button>

            <button
              onClick={() => router.push('/positions')}
              className="text-[#A0A0A0] hover:text-white transition-colors cursor-pointer"
              title="Active Positions"
            >
              <HiOutlineChartBar className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-3 bg-[#333333]"></div>
          </div>
        </div>
      </header>

    </>
  );
};

export default Header;
