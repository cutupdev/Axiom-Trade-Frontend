"use client";
import axios from "axios";
import { FC, useContext, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { ArrowLine, ExitIcon, WalletIcon } from "../SvgIcon";
import UserContext from "@/contexts/usercontext";
import {
  errorAlert
} from "@/components/Toast";

const ConnectButton: FC = () => {
  const { tokenList, setTokenList, setLoadingState, currentAmount, setTokenFilterList } = useContext<any>(UserContext);
  const { setVisible } = useWalletModal();
  const { publicKey, disconnect } = useWallet();

  const getTokenList = async (address: string) => {
    setLoadingState(true)
    try {
      const response = await axios.post(`http://localhost:3003/getTokens`, { walletAddress: address })
      setTokenList(response.data.data)


    } catch (err) {
      console.log("ERROR : ", err)
      errorAlert(err)
    }
    setLoadingState(false)
  }

  useEffect(() => {
    if (publicKey?.toBase58() !== "" && publicKey?.toBase58() !== undefined) {
      getTokenList(publicKey.toBase58())
    }
  }, [publicKey])

  const filterData = async () => {
    const filteredData = await tokenList.filter((data: { balanceByToke: number; }) => data.balanceByToke > currentAmount);
    setTokenFilterList(filteredData)
  }

  useEffect(() => {
    if (tokenList !== undefined) {
      filterData()
    }
  }, [tokenList, currentAmount])

  return (
    <div className="group relative bg-[#526fff] shadow-btn-inner px-2 py-2 border-[0.75px] border-white rounded-lg w-[140px] lg:w-[180px] text-primary-100 tracking-[0.32px] cursor-pointer">
      {publicKey ? (
        <>
          <div className="flex justify-center items-center text-[12px] lg:text-[16px]">
            {publicKey.toBase58().slice(0, 4)}....
            {publicKey.toBase58().slice(-4)}
            <div className="w-3 h-3 rotate-90">
              <ArrowLine />
            </div>
          </div>
          <div className="hidden group-hover:block top-10 right-0 absolute w-[200px]">
            <ul className="bg-gray-600 mt-2 border-[0.75px] border-gray-600 rounded-lg">
              <li>
                <button
                  className="flex items-center gap-2 text-white tracking-[-0.32px]"
                  onClick={() => setVisible(true)}
                >
                  <WalletIcon /> Change Wallet
                </button>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 text-white tracking-[-0.32px]"
                  onClick={disconnect}
                >
                  <ExitIcon /> Disconnect
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div
          className="flex justify-center items-center gap-1 text-[12px] lg:text-[16px]"
          onClick={() => setVisible(true)}
        >
          Connect wallet <ArrowLine />
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
