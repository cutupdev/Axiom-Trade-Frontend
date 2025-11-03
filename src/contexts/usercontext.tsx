"use client"
import { createContext } from 'react'

const UserContext = createContext({
  tokenList: [],
  setTokenList: (value: any) => { },
  tokenFilterList: [],
  setTokenFilterList: (value: any) => { },
  selectedTokenList: [],
  setSelectedTokenList: (value: any) => { },
  currentAmount: 0,
  setCurrentAmount: (value: number) => { },
  loadingState: false,
  setLoadingState: (value: boolean) => { },
  swapTokenList: [],
  setSwapTokenList: (value: any) => { },
})

export default UserContext