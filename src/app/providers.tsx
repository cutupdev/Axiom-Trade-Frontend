"use client";
import React, { ReactNode, useState } from "react";
import { PageProvider } from "@/contexts/PageContext";
import UserContext from "@/contexts/usercontext";
import { SolanaWalletProvider } from "@/contexts/SolanaWalletProvider";
import { WebSocketProvider } from "@/contexts/WebSocketProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import LoadingModal from "@/components/others/LoadingModal";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  const [tokenList, setTokenList] = useState<any>([]);
  const [tokenFilterList, setTokenFilterList] = useState<any>([]);
  const [selectedTokenList, setSelectedTokenList] = useState<any>([]);
  const [swapTokenList, setSwapTokenList] = useState<any>([]);
  const [currentAmount, setCurrentAmount] = useState<number>(0)
  const [loadingState, setLoadingState] = useState<boolean>(false);

  return (
    <SolanaWalletProvider>
      <WebSocketProvider>
        <UserContext.Provider value={{ tokenList, setTokenList, loadingState, setLoadingState, tokenFilterList, setTokenFilterList, selectedTokenList, setSelectedTokenList, currentAmount, setCurrentAmount, swapTokenList, setSwapTokenList, }}>
          <QueryClientProvider client={queryClient}>

            <PageProvider>
              <div className="flex flex-col h-screen w-full overflow-hidden">
                <Header />
                <main className="flex-1 w-full overflow-auto">
                  {children}
                </main>
                <Footer />
              </div>
              {loadingState && <LoadingModal />}
              <ToastContainer style={{ fontSize: 14 }} />
            </PageProvider>

          </QueryClientProvider>
        </UserContext.Provider>
      </WebSocketProvider>
    </SolanaWalletProvider>
  );
}
