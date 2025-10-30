"use client"

import React, { useEffect, useContext, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { RiArrowRightSLine, RiArrowDownSLine, RiMoreLine } from 'react-icons/ri'
import Image from 'next/image'
import btcIcon from '@/../public/images/BTC.svg'
import UserContext from '@/contexts/usercontext'


const PerpetualsPage = () => {
  const [activeTab, setActiveTab] = useState('positions')
  const [orderType, setOrderType] = useState('market')
  const [tradeType, setTradeType] = useState('long')
  const [leverage, setLeverage] = useState(20)
  const [buyAmount, setBuyAmount] = useState('')
  const [tpSlEnabled, setTpSlEnabled] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [tpPrice, setTpPrice] = useState('')
  const [slPrice, setSlPrice] = useState('')
  const [tpPercent, setTpPercent] = useState('')
  const [slPercent, setSlPercent] = useState('')
  const { setLoadingState } = useContext<any>(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false)
    }, 1000)
  }, [])

  const marketData = {
    price: '117,090',
    change: '-0.22%',
    oraclePrice: '117,043',
    volume24h: '$2.65B',
    openInterest: '$4.08B',
    funding: '0.00125%',
    countdown: '00:31:50'
  }

  const orderBookData = {
    asks: [
      { price: '117,104', amount: '233,752', total: '6,578,985' },
      { price: '117,103', amount: '156,022', total: '6,345,233' },
      { price: '117,102', amount: '362,918', total: '6,189,210' },
      { price: '117,101', amount: '229,667', total: '5,826,293' },
      { price: '117,100', amount: '380,947', total: '5,596,626' },
      { price: '117,099', amount: '40,508', total: '5,215,679' },
      { price: '117,098', amount: '307,045', total: '5,175,171' },
      { price: '117,097', amount: '138,525', total: '4,868,125' },
      { price: '117,096', amount: '301,966', total: '4,729,601' },
      { price: '117,095', amount: '980,018', total: '4,427,635' },
      { price: '117,094', amount: '188,621', total: '3,447,617' },
      { price: '117,093', amount: '658,668', total: '3,258,996' },
      { price: '117,092', amount: '2,600,328', total: '2,600,328' }
    ],
    bids: [
      { price: '117,091', amount: '42,397', total: '42,397' },
      { price: '117,090', amount: '950', total: '43,347' },
      { price: '117,089', amount: '13', total: '43,360' },
      { price: '117,088', amount: '99,962', total: '143,321' },
      { price: '117,087', amount: '144,742', total: '288,063' },
      { price: '117,086', amount: '217,657', total: '505,720' },
      { price: '117,085', amount: '13', total: '505,733' },
      { price: '117,084', amount: '10,052', total: '515,785' },
      { price: '117,083', amount: '13', total: '515,798' },
      { price: '117,082', amount: '13', total: '515,811' },
      { price: '117,081', amount: '419,793', total: '935,603' },
      { price: '117,080', amount: '77,238', total: '1,012,841' },
      { price: '117,079', amount: '292,888', total: '1,305,729' }
    ]
  }

  return (
    <div className="relative flex flex-row flex-1 bg-black w-full min-h-0 overflow-hidden">
      <div className="flex flex-1 min-h-0 overflow-auto">
        {/* Mobile Layout */}
        <div className="flex sm:hidden flex-col w-full h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex flex-col border-b border-gray-700">
            <div className="flex flex-row justify-between items-center px-3 py-2">
              <button
                className="flex items-center gap-2"
                type="button"
                aria-label="Select trading pair"
              >
                <Image
                  alt="BTC"
                  width={24}
                  height={24}
                  src={btcIcon}
                  className="rounded-full"
                />
                <span className="font-medium text-white text-base">BTC</span>
                <FaAngleDown className="text-gray-400 text-sm" />
              </button>
              <div className="flex flex-col items-end">
                <span className="font-medium text-white text-lg">
                  {marketData.price}
                </span>
                <span className="font-normal text-red-500 text-xs">
                  {marketData.change}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center px-3 py-2 text-xs">
              <div className="flex flex-col">
                <span className="text-gray-400">24h Volume</span>
                <span className="text-white">{marketData.volume24h}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Open Interest</span>
                <span className="text-white">{marketData.openInterest}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400">Funding</span>
                <span className="text-green-500">{marketData.funding}</span>
              </div>
            </div>
          </div>

          {/* Mobile Chart */}


          {/* Mobile Trading Panel */}
          <div className="flex flex-col p-3 border-b border-gray-700">
            {/* Long/Short Toggle */}
            <div className="flex flex-row gap-2 mb-3">
              <button
                onClick={() => setTradeType("long")}
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  tradeType === "long"
                    ? "bg-green-500 text-black"
                    : "bg-gray-800 text-gray-400"
                }`}
                type="button"
              >
                Long
              </button>
              <button
                onClick={() => setTradeType("short")}
                className={`flex-1 py-2 rounded-lg font-medium text-sm ${
                  tradeType === "short"
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
                type="button"
              >
                Short
              </button>
            </div>

            {/* Market/Limit Tabs */}
            <div className="flex flex-row gap-4 mb-3">
              <button
                onClick={() => setOrderType("market")}
                className={`pb-1 ${
                  orderType === "market"
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                type="button"
              >
                Market
              </button>
              <button
                onClick={() => setOrderType("limit")}
                className={`pb-1 ${
                  orderType === "limit"
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                type="button"
              >
                Limit
              </button>
              <div className="flex-1"></div>
              <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">
                Leverage: {leverage}x
              </div>
            </div>

            {/* Amount Input */}
            <div className="flex flex-col gap-2 mb-3">
              <label className="text-gray-400 text-xs">Amount (USDC)</label>
              <input
                type="text"
                value={buyAmount}
                onChange={(e) => setBuyAmount(e.target.value)}
                placeholder="0.00"
                className="bg-gray-800 px-3 py-2 border border-gray-700 rounded outline-none text-white"
              />
            </div>

            {/* Percentage Slider */}
            <div className="flex flex-row gap-2 mb-4">
              <button
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-1 rounded text-xs text-gray-300"
                type="button"
              >
                25%
              </button>
              <button
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-1 rounded text-xs text-gray-300"
                type="button"
              >
                50%
              </button>
              <button
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-1 rounded text-xs text-gray-300"
                type="button"
              >
                75%
              </button>
              <button
                className="flex-1 bg-gray-800 hover:bg-gray-700 py-1 rounded text-xs text-gray-300"
                type="button"
              >
                100%
              </button>
            </div>

            {/* TP/SL Toggle */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">TP/SL</span>
              <button
                onClick={() => setTpSlEnabled(!tpSlEnabled)}
                className={`relative w-10 h-6 rounded-full transition-colors ${
                  tpSlEnabled ? "bg-blue-500" : "bg-gray-700"
                }`}
                type="button"
                aria-label="Toggle take profit and stop loss"
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    tpSlEnabled ? "transform translate-x-4" : ""
                  }`}
                ></div>
              </button>
            </div>

            {/* TP/SL Inputs */}
            {tpSlEnabled && (
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-gray-400 text-xs">TP Price</label>
                    <input
                      type="text"
                      value={tpPrice}
                      onChange={(e) => setTpPrice(e.target.value)}
                      placeholder="0.00"
                      className="bg-gray-800 px-2 py-1 border border-gray-700 rounded outline-none w-full text-white text-sm"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-gray-400 text-xs">SL Price</label>
                    <input
                      type="text"
                      value={slPrice}
                      onChange={(e) => setSlPrice(e.target.value)}
                      placeholder="0.00"
                      className="bg-gray-800 px-2 py-1 border border-gray-700 rounded outline-none w-full text-white text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Place Order Button */}
            <button
              className={`w-full py-3 rounded-lg font-bold text-base ${
                tradeType === "long"
                  ? "bg-green-500 hover:bg-green-600 text-black"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
              type="button"
            >
              {tradeType === "long" ? "Buy/Long" : "Sell/Short"}
            </button>

            {/* Available Margin */}
            <div className="flex justify-between items-center mt-3 text-xs">
              <span className="text-gray-400">Available Margin</span>
              <span className="text-blue-400">0.00 USDC</span>
            </div>
          </div>

          {/* Mobile Order Book Section */}
          <div className="flex flex-col border-b border-gray-700">
            <div className="flex flex-row px-3 py-2 border-b border-gray-700">
              <button
                className="flex-1 pb-1 border-b-2 border-white text-white text-sm"
                type="button"
              >
                Order Book
              </button>
              <button
                className="flex-1 pb-1 text-gray-400 text-sm"
                type="button"
              >
                Trades
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto">
              <div className="flex flex-col px-3 py-1">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Price</span>
                  <span>Amount</span>
                  <span>Total</span>
                </div>
                {/* Asks */}
                {orderBookData.asks.slice(0, 5).map((ask, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-xs py-0.5"
                  >
                    <span className="text-red-500">{ask.price}</span>
                    <span className="text-white">{ask.amount}</span>
                    <span className="text-gray-400">{ask.total}</span>
                  </div>
                ))}
                {/* Current Price */}
                <div className="flex justify-center py-2 my-1 border-y border-gray-700">
                  <span className="font-medium text-white text-lg">
                    {marketData.price}
                  </span>
                </div>
                {/* Bids */}
                {orderBookData.bids.slice(0, 5).map((bid, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-xs py-0.5"
                  >
                    <span className="text-green-500">{bid.price}</span>
                    <span className="text-white">{bid.amount}</span>
                    <span className="text-gray-400">{bid.total}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Positions/Orders Section */}
          <div className="flex flex-col">
            <div className="flex flex-row px-3 py-2 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("positions")}
                className={`flex-1 pb-1 text-sm ${
                  activeTab === "positions"
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                type="button"
              >
                Positions
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex-1 pb-1 text-sm ${
                  activeTab === "orders"
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                type="button"
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab("trades")}
                className={`flex-1 pb-1 text-sm ${
                  activeTab === "trades"
                    ? "border-b-2 border-white text-white"
                    : "text-gray-400"
                }`}
                type="button"
              >
                Trades
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="text-gray-400 text-sm">No open {activeTab}</span>
            </div>  
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="flex flex-row flex-1 min-h-0">
            <div className="flex flex-col w-full h-full">
              {/* Main Header */}
              <div className="flex flex-row flex-1 justify-start items-center gap-4 px-4 border-gray-700 border-b min-h-16 max-h-16">
                <div className="flex flex-row justify-start items-center gap-2">
                  <div className="relative flex">
                    <button
                      className="group flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="button"
                      aria-label="Select trading pair"
                    >
                      <Image
                        alt="BTC"
                        width={32}
                        height={32}
                        src={btcIcon}
                        className="rounded-full"
                      />
                      <span className="font-medium text-white text-lg leading-6 tracking-[-0.02em]">
                        BTC
                      </span>
                      <FaAngleDown className="text-gray-400 group-hover:text-white text-xl transition-transform duration-150" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-0.5 px-1">
                  <div className="flex flex-row items-center gap-1">
                    <span className="font-medium text-white text-sm leading-5">
                      <div className="flex flex-row justify-start items-center gap-1">
                        <span className="font-medium text-white text-lg leading-6 tracking-[-0.02em]">
                          {marketData.price}
                        </span>
                        <span className="font-normal text-red-500 text-xs leading-4">
                          {marketData.change}
                        </span>
                      </div>
                    </span>
                  </div>
                </div>

                <span className="contents">
                  <div className="flex flex-col justify-start items-start gap-0.5 px-1">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Oracle Price
                    </span>
                    <div className="flex flex-row items-center gap-1">
                      <span className="font-medium text-white text-sm leading-5">
                        {marketData.oraclePrice}
                      </span>
                    </div>
                  </div>
                </span>

                <div className="flex flex-col justify-start items-start gap-0.5 px-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">
                    24h Volume
                  </span>
                  <div className="flex flex-row items-center gap-1">
                    <span className="font-medium text-white text-sm leading-5">
                      {marketData.volume24h}
                    </span>
                  </div>
                </div>

                <span className="contents">
                  <div className="flex flex-col justify-start items-start gap-0.5 px-1">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Open Interest
                    </span>
                    <div className="flex flex-row items-center gap-1">
                      <span className="font-medium text-white text-sm leading-5">
                        {marketData.openInterest}
                      </span>
                    </div>
                  </div>
                </span>

                <span className="contents">
                  <div className="flex flex-col justify-start items-start gap-0.5 px-1">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Funding / Countdown
                    </span>
                    <div className="flex flex-row items-center gap-1">
                      <span className="font-medium text-white text-sm leading-5">
                        <div className="flex flex-row justify-start items-center gap-2">
                          <span className="text-green-500">
                            {marketData.funding}
                          </span>
                          <span className="font-normal text-white leading-4">
                            {marketData.countdown}
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </span>
              </div>

              {/* Chart Area */}
              <div className="flex flex-col flex-1 border-gray-700 border-r min-w-0 min-h-0">
                <div className="flex flex-col justify-center items-center bg-gray-900 w-full h-full">
                  <div className="w-full h-full">
                    <iframe
                      id="tradingview_chart"
                      src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BTCUSD&interval=1&widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%7D&timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&locale=en&uid=tradingview_chart&clientId=0&userId=0&chartsStorageVer=1.0&autoSaveDelay=0.5&debug=false&timezone=Europe%2FBudapest&theme=dark"
                      title="BTC Price Chart"
                      frameBorder="0"
                      allowTransparency={true}
                      scrolling="no"
                      allowFullScreen
                      className="block w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Order Book Panel */}
            <div className="relative flex border-gray-700 border-l w-80 min-h-0 transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]">
              <button
                className="top-1/2 left-0 z-10 absolute bg-gray-800 hover:bg-gray-700 py-1 border border-gray-700 rounded transition-all -translate-x-1/2 -translate-y-1/2 duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]"
                type="button"
                aria-label="Toggle order book panel"
              >
                <RiArrowRightSLine className="text-gray-400 text-xs" />
              </button>

              <div className="flex flex-1 opacity-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]">
                <div className="relative flex flex-col w-full h-full transition-all translate-x-0 duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]">
                  <div className="flex flex-col flex-1 justify-start opacity-100 border-gray-700 border-r h-full overflow-hidden transition-all translate-x-0 duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]">
                    <div className="flex flex-row flex-shrink-0 justify-start items-center pr-4 pl-2 border-gray-700 border-b min-h-8 max-h-8">
                      <div className="flex flex-row flex-1 justify-start items-center gap-4">
                        <button
                          className="group group relative flex flex-row justify-start items-center gap-1 px-2 rounded h-7 text-nowrap transition-colors"
                          type="button"
                        >
                          <div className="flex flex-row flex-1 justify-start items-center gap-1 pt-0.5 border-white border-b-2 h-8">
                            <span className="font-medium text-white text-sm">
                              Order Book
                            </span>
                          </div>
                        </button>
                        <button
                          className="group group relative flex flex-row justify-start items-center gap-1 hover:bg-gray-700/40 px-2 rounded h-7 text-nowrap transition-colors"
                          type="button"
                        >
                          <div className="flex flex-row flex-1 justify-start items-center gap-1 h-8">
                            <span className="font-medium text-gray-400 text-sm">
                              Trades
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 h-full overflow-hidden">
                      <div className="flex flex-col flex-1 h-full overflow-hidden">
                        <div className="flex flex-row justify-start items-center gap-2 px-2 w-full min-h-7 max-h-7 text-[10px]">
                          <div className="flex flex-row flex-1 justify-start items-center">
                            <span className="font-normal text-gray-600">
                              Price
                            </span>
                          </div>
                          <div className="flex flex-row flex-1 justify-end items-center">
                            <span className="font-normal text-gray-600">
                              Amount (USD)
                            </span>
                          </div>
                          <div className="flex flex-row flex-1 justify-end items-center">
                            <span className="font-normal text-gray-600">
                              Total (USD)
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col flex-1 overflow-hidden font-mono">
                          <div className="flex flex-col justify-start gap-2 py-0.5 max-h-[calc((100vh-325px)/2)] overflow-y-scroll no-scrollbar">
                            {orderBookData.asks.map((ask, index) => (
                              <div
                                key={index}
                                className="relative flex flex-row justify-start items-center gap-4 px-4 w-full min-h-5.5 max-h-5.5"
                              >
                                <div
                                  className="top-0 left-0 absolute bg-gradient-to-r from-purple-500/0 to-red-500/100 opacity-15 h-5"
                                  style={{
                                    width: `${Math.min(100, (index + 1) * 7)}%`,
                                  }}
                                ></div>
                                <div className="flex flex-row flex-1 justify-start items-center gap-4 max-w-25">
                                  <span className="font-normal text-red-500 text-xs leading-4">
                                    {ask.price}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center -ml-5">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {ask.amount}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center max-w-30">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {ask.total}
                                  </span>
                                </div>
                              </div>
                            ))}
                            {orderBookData.asks.map((ask, index) => (
                              <div
                                key={index}
                                className="relative flex flex-row justify-start items-center gap-4 px-4 w-full min-h-5.5 max-h-5.5"
                              >
                                <div
                                  className="top-0 left-0 absolute bg-gradient-to-r from-purple-500/0 to-red-500/100 opacity-15 h-5"
                                  style={{
                                    width: `${Math.min(100, (index + 1) * 7)}%`,
                                  }}
                                ></div>
                                <div className="flex flex-row flex-1 justify-start items-center gap-4 max-w-25">
                                  <span className="font-normal text-red-500 text-xs leading-4">
                                    {ask.price}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center -ml-5">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {ask.amount}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center max-w-30">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {ask.total}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="relative flex flex-row justify-center items-center gap-4 bg-gray-700/50 px-4 w-full min-h-6 max-h-6">
                            <div className="flex flex-row items-center">
                              <span className="font-normal text-white text-xs leading-4">
                                Spread:
                              </span>
                              <div className="relative ml-1">
                                <button
                                  className="flex items-center gap-1 bg-transparent hover:bg-gray-800 px-2 py-0.5 border hover:border-gray-700 border-transparent rounded outline-none font-normal text-white text-xs leading-4 cursor-pointer"
                                  type="button"
                                >
                                  1<RiArrowDownSLine className="text-xs" />
                                </button>
                              </div>
                            </div>
                            <span className="font-medium text-white text-xs leading-4">
                              0.009%
                            </span>
                          </div>

                          <div className="flex flex-col gap-2 py-0.5 max-h-[calc((100vh-325px)/2)] overflow-y-auto no-scrollbar">
                            {orderBookData.bids.map((bid, index) => (
                              <div
                                key={index}
                                className="relative flex flex-row justify-start items-center gap-4 px-4 w-full min-h-5.5 max-h-5.5"
                              >
                                <div
                                  className="top-0 left-0 absolute bg-gradient-to-r from-cyan-500/0 to-green-500/100 opacity-15 h-5"
                                  style={{
                                    width: `${Math.min(100, (index + 1) * 7)}%`,
                                  }}
                                ></div>
                                <div className="flex flex-row flex-1 justify-start items-center gap-4 max-w-25">
                                  <span className="font-normal text-green-500 text-xs leading-4">
                                    {bid.price}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center -ml-5">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {bid.amount}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center max-w-30">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {bid.total}
                                  </span>
                                </div>
                              </div>
                            ))}
                            {orderBookData.bids.map((bid, index) => (
                              <div
                                key={index}
                                className="relative flex flex-row justify-start items-center gap-4 px-4 w-full min-h-5.5 max-h-5.5"
                              >
                                <div
                                  className="top-0 left-0 absolute bg-gradient-to-r from-cyan-500/0 to-green-500/100 opacity-15 h-5"
                                  style={{
                                    width: `${Math.min(100, (index + 1) * 7)}%`,
                                  }}
                                ></div>
                                <div className="flex flex-row flex-1 justify-start items-center gap-4 max-w-25">
                                  <span className="font-normal text-green-500 text-xs leading-4">
                                    {bid.price}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center -ml-5">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {bid.amount}
                                  </span>
                                </div>
                                <div className="flex flex-row flex-1 justify-end items-center max-w-30">
                                  <span className="font-normal text-white text-xs leading-4">
                                    {bid.total}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resize Handle */}
          <div className="group relative flex flex-row justify-center items-center bg-gray-700 hover:bg-gray-600 w-full h-1 transition-all duration-150 ease-in-out hover:cursor-ns-resize">
            <RiMoreLine className="text-gray-400 group-hover:text-gray-300/80 text-sm transition-all duration-150 ease-in-out" />
            <div className="-top-1.5 -bottom-1.5 absolute inset-0 cursor-ns-resize"></div>
          </div>

          {/* Bottom Panel */}
          <div
            className="flex flex-col border-gray-700 border-r w-full min-w-0 overflow-hidden"
            style={{ height: "140px" }}
          >
            <div className="flex flex-row flex-1 justify-start items-center pr-4 pl-2 border-gray-700 border-b min-h-9 max-h-9">
              <div className="flex flex-row flex-1 justify-start items-center gap-4">
                <button
                  onClick={() => setActiveTab("positions")}
                  className={`group relative text-nowrap flex flex-row px-2 gap-1 justify-start items-center group transition-colors rounded h-7 ${
                    activeTab === "positions" ? "text-white" : "text-gray-400"
                  }`}
                  type="button"
                >
                  <div
                    className={`${
                      activeTab === "positions"
                        ? "border-white border-b-2 pt-0.5"
                        : ""
                    } flex flex-row flex-1 h-9 gap-1 justify-start items-center`}
                  >
                    <span className="font-medium text-sm">Positions</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`group relative text-nowrap flex flex-row px-2 gap-1 justify-start items-center group hover:bg-gray-700/40 transition-colors rounded h-7 ${
                    activeTab === "orders" ? "text-white" : "text-gray-400"
                  }`}
                  type="button"
                >
                  <div
                    className={`${
                      activeTab === "orders"
                        ? "border-white border-b-2 pt-0.5"
                        : ""
                    } flex flex-row flex-1 h-9 gap-1 justify-start items-center`}
                  >
                    <span className="font-medium text-sm">Open Orders</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab("trades")}
                  className={`group relative text-nowrap flex flex-row px-2 gap-1 justify-start items-center group hover:bg-gray-700/40 transition-colors rounded h-7 ${
                    activeTab === "trades" ? "text-white" : "text-gray-400"
                  }`}
                  type="button"
                >
                  <div
                    className={`${
                      activeTab === "trades"
                        ? "border-white border-b-2 pt-0.5"
                        : ""
                    } flex flex-row flex-1 h-9 gap-1 justify-start items-center`}
                  >
                    <span className="font-medium text-sm">Trades</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-col flex-1 overflow-x-auto">
              <div
                className="flex flex-col flex-1 min-w-250 min-h-7 max-h-7"
                style={{ minWidth: "1010px" }}
              >
                <div
                  className="flex flex-row flex-1 justify-start items-center px-4 border-gray-700 border-b min-h-7 max-h-7"
                  style={{ paddingRight: "26px" }}
                >
                  <div className="flex flex-row flex-[0.8] justify-start items-center hover:text-white cursor-pointer">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Asset
                    </span>
                  </div>
                  <div className="flex flex-row flex-[1.2] justify-start items-center hover:text-white cursor-pointer">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Position
                    </span>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-start items-center hover:text-white cursor-pointer">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Position Value
                    </span>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-start items-center hover:text-white cursor-pointer">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Entry Price
                    </span>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-start items-center hover:text-white cursor-pointer">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Mark Price
                    </span>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-start items-center px-1 hover:text-white cursor-pointer">
                    <span className="border-gray-400/30 hover:border-gray-400/50 border-b border-dashed font-normal text-gray-400 text-xs leading-4">
                      <span className="hidden sm:inline">Liquidation</span>
                      <span className="sm:hidden inline">Liq.</span> Price
                    </span>
                  </div>
                  <div className="flex flex-row flex-[1.5] justify-start items-center px-1 hover:text-white cursor-pointer">
                    <span className="border-gray-400/30 hover:border-gray-400/50 border-b border-dashed font-normal text-gray-400 text-xs leading-4">
                      Margin Used (PNL) ↓
                    </span>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-start items-center">
                    <div className="items-center grid grid-cols-[1fr,auto,1fr] w-full">
                      <span className="pr-1 font-normal text-gray-400 text-xs text-right leading-4">
                        TP
                      </span>
                      <span className="px-1 font-normal text-gray-400 text-xs leading-4">
                        /
                      </span>
                      <span className="pl-1 font-normal text-gray-400 text-xs text-left leading-4">
                        SL
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row flex-[0.8] justify-end items-center">
                    <span className="font-normal text-gray-400 text-xs leading-4">
                      Close
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col flex-1 min-w-250 overflow-y-auto"
                style={{ minWidth: "1010px" }}
              >
                <div className="flex justify-center items-center h-full">
                  <span className="hidden sm:block text-gray-400 text-sm">
                    No open positions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Trading Panel */}
        <div className="hidden lg:flex flex-col min-w-80 max-w-80 min-h-0 overflow-hidden">
          <div className="relative flex flex-col w-full">
            <div className="flex flex-col">
              <div className="flex flex-row flex-1 justify-center items-center p-3 border-gray-900 border-b min-h-16 max-h-16">
                <div className="flex flex-row flex-1 justify-center items-center gap-1 p-1 border border-gray-700/50 rounded-lg min-h-10 max-h-10">
                  <button
                    onClick={() => setTradeType('long')}
                    className={`flex flex-row flex-1 min-h-8 max-h-8 p-1 justify-center items-center rounded-lg ${tradeType === 'long'
                      ? 'bg-green-500 text-black font-bold'
                      : 'bg-transparent text-gray-400 font-medium hover:bg-gray-700/40'
                      }`}
                  >
                    <span className="text-xs leading-4">Long</span>
                  </button>
                  <button
                    onClick={() => setTradeType('short')}
                    className={`flex flex-row flex-1 min-h-8 max-h-8 p-1 justify-center items-center rounded-lg ${tradeType === 'short'
                      ? 'bg-red-500 text-white font-bold'
                      : 'bg-transparent text-gray-400 font-medium hover:bg-gray-700/40'
                      }`}
                  >
                    <span className="text-xs leading-4">Short</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-row flex-1 justify-start items-center gap-4 px-4 border-gray-700/50 border-b h-6">
                <div className="flex flex-row flex-1 justify-start items-center gap-2">
                  <button
                    onClick={() => setOrderType('market')}
                    className={`group relative text-nowrap flex flex-row px-2 gap-1 justify-start items-center group hover:bg-gray-700/40 transition-colors rounded h-6 ${orderType === 'market' ? 'text-white' : 'text-gray-400'
                      }`}
                  >
                    <div className={`${orderType === 'market' ? 'border-white border-b-2 pt-0.5' : ''} h-8 flex flex-row flex-1 gap-1 justify-start items-center`}>
                      <span className="font-medium text-xs">Market</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setOrderType('limit')}
                    className={`group relative text-nowrap flex flex-row px-2 gap-1 justify-start items-center group hover:bg-gray-700/40 transition-colors rounded h-6 ${orderType === 'limit' ? 'text-white' : 'text-gray-400'
                      }`}
                  >
                    <div className={`${orderType === 'limit' ? 'border-white border-b-2 pt-0.5' : ''} h-8 flex flex-row flex-1 gap-1 justify-start items-center`}>
                      <span className="font-medium text-xs">Limit</span>
                    </div>
                  </button>
                </div>
                <button className="flex items-center bg-gray-700/50 hover:bg-gray-600/60 active:bg-gray-600/60 disabled:opacity-50 px-2 border border-gray-700/50 rounded-sm h-5 text-nowrap transition-colors duration-150 ease-in-out disabled:cursor-not-allowed">
                  <span className="font-medium text-[10px] text-gray-200">Leverage: {leverage}x</span>
                </button>
              </div>

              <div className="flex flex-col p-4 pb-6 min-h-1">
                <div className="flex flex-col flex-1 justify-start items-center gap-1">
                  <div className="flex flex-col justify-start items-center gap-2 w-full">
                    <div className="flex flex-col justify-between items-center bg-[#22242d50] p-2 border border-gray-700 rounded-lg w-full h-16 transition-all duration-150 ease-in-out hover:cursor-text">
                      <div className="flex flex-row justify-start items-center w-full">
                        <div className="flex flex-row flex-1 justify-start items-center h-full">
                          <span className="font-normal text-gray-400 text-xs leading-4">Buy Amount</span>
                        </div>
                        <div className="flex flex-row justify-center items-center h-full">
                          <span className="font-normal text-gray-400 text-xs leading-4">BTC</span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full">
                        <div className="flex flex-row flex-1 justify-start items-center min-w-0">
                          <input
                            className="bg-transparent disabled:opacity-50 focus:outline-none w-full min-w-0 font-normal text-white placeholder:text-gray-400 text-lg placeholder:text-lg leading-6 placeholder:leading-4 disabled:cursor-not-allowed"
                            placeholder="0.0 USDC"
                            value={buyAmount}
                            onChange={(e) => setBuyAmount(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-row flex-shrink-0 justify-end items-center gap-1 ml-2">
                          <Image alt="0" width={16} height={16} src={btcIcon} className="rounded-full" />
                          <span className="max-w-25 font-normal text-white text-lg truncate leading-6 whitespace-nowrap">0</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row justify-start items-center px-3 pt-3 pb-8 w-full">
                      <div className="relative flex flex-row flex-1 justify-between items-center bg-gray-700 rounded-full h-0.5">
                        <div className="absolute bg-blue-500 rounded-full h-full" style={{ width: `${sliderValue}%` }}></div>
                        <input
                          title="Slider"
                          min="0"
                          max="100"
                          className="peer -top-3 right-[-8px] absolute opacity-0 w-[calc(100%-12px)] h-11 cursor-pointer"
                          type="range"
                          value={sliderValue}
                          onChange={(e) => setSliderValue(Number(e.target.value))}
                          style={{ touchAction: 'none' }}
                        />
                        <div className="top-1/2 z-10 absolute bg-blue-500 rounded-full w-3 peer-active:w-5 peer-hover:w-4 h-3 peer-active:h-5 peer-hover:h-4 transition-[width,height] pointer-events-none" style={{ left: `${sliderValue}%`, transform: 'translate(-50%, -50%)' }}></div>
                        <div className="relative bg-blue-500 rounded-full w-0.5 h-1 pointer-events-none">
                          <span className="top-3 left-1/2 absolute font-normal text-gray-400 text-xs leading-4 -translate-x-1/2 pointer-events-none select-none">0%</span>
                        </div>
                        <div className="relative bg-gray-400 rounded-full w-0.5 h-1 pointer-events-none">
                          <span className="top-3 left-1/2 absolute font-normal text-gray-400 text-xs leading-4 -translate-x-1/2 pointer-events-none select-none">25%</span>
                        </div>
                        <div className="relative bg-gray-400 rounded-full w-0.5 h-1 pointer-events-none">
                          <span className="top-3 left-1/2 absolute font-normal text-gray-400 text-xs leading-4 -translate-x-1/2 pointer-events-none select-none">50%</span>
                        </div>
                        <div className="relative bg-gray-400 rounded-full w-0.5 h-1 pointer-events-none">
                          <span className="top-3 left-1/2 absolute font-normal text-gray-400 text-xs leading-4 -translate-x-1/2 pointer-events-none select-none">75%</span>
                        </div>
                        <div className="relative bg-gray-400 rounded-full w-0.5 h-1 pointer-events-none">
                          <span className="top-3 left-1/2 absolute font-normal text-gray-400 text-xs leading-4 -translate-x-1/2 pointer-events-none select-none">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`flex flex-col gap-2 w-full justify-start items-start duration-300 object-cover overflow-hidden ${tpSlEnabled ? 'h-44' : 'h-10'}`}>
                    <div className="flex flex-row justify-between items-center gap-4 pt-3 w-full h-6">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex-1">
                          <div onClick={() => setTpSlEnabled(!tpSlEnabled)} className="inline-flex flex-row justify-start items-center gap-2 h-4 cursor-pointer">
                            <div className="flex flex-row justify-center items-center p-0.5 border border-gray-600 rounded w-4 h-4 cursor-pointer">
                              <div className={`w-2.5 h-2.5 rounded-sm ${tpSlEnabled ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                            </div>
                            <span className="font-medium text-gray-400 text-xs text-nowrap">TP/SL</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end items-center gap-1 w-full">
                        <span className="text-gray-400 text-xs">Est. Liq. Price:</span>
                        <span className="text-gray-400 text-xs">--</span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 pt-3 w-full">
                      <div className="flex flex-row justify-center items-center gap-2 w-full h-full">
                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <span className="font-medium text-gray-600 text-xs leading-4">TP Price</span>
                          <input
                            className="bg-transparent disabled:opacity-50 px-3 py-2 border-[1px] border-gray-900 rounded-md focus:outline-none w-full min-w-0 font-normal text-white placeholder:text-gray-400 text-sm placeholder:text-sm leading-4 placeholder:leading-4 disabled:cursor-not-allowed"
                            placeholder="Enter TP price"
                            value={tpPrice}
                            onChange={(e) => setTpPrice(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1 w-[100px]">
                          <span className="font-medium text-gray-600 text-xs leading-4">TP %</span>
                          <input
                            className="bg-transparent disabled:opacity-50 px-3 py-2 border-[1px] border-gray-900 rounded-md focus:outline-none w-full min-w-0 font-normal text-white placeholder:text-gray-400 text-sm placeholder:text-sm leading-4 placeholder:leading-4 disabled:cursor-not-allowed"
                            placeholder="0.0"
                            value={tpPercent}
                            onChange={(e) => setTpPercent(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-2 w-full h-full">
                        <div className="flex flex-col justify-start items-start gap-1 w-full">
                          <span className="font-medium text-gray-600 text-xs leading-4">SL Price</span>
                          <input
                            className="bg-transparent disabled:opacity-50 px-3 py-2 border-[1px] border-gray-900 rounded-md focus:outline-none w-full min-w-0 font-normal text-white placeholder:text-gray-400 text-sm placeholder:text-sm leading-4 placeholder:leading-4 disabled:cursor-not-allowed"
                            placeholder="Enter SL price"
                            value={slPrice}
                            onChange={(e) => setSlPrice(e.target.value)}
                          />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1 w-[100px]">
                          <span className="font-medium text-gray-600 text-xs leading-4">SL %</span>
                          <input
                            className="bg-transparent disabled:opacity-50 px-3 py-2 border-[1px] border-gray-900 rounded-md focus:outline-none w-full min-w-0 font-normal text-white placeholder:text-gray-400 text-sm placeholder:text-sm leading-4 placeholder:leading-4 disabled:cursor-not-allowed"
                            placeholder="0.0"
                            value={slPercent}
                            onChange={(e) => setSlPercent(e.target.value)}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="flex flex-row flex-1 justify-center items-center px-4 pb-5 border-gray-700 border-b min-h-1">
                <button className="flex flex-row flex-1 justify-center items-center bg-green-500 hover:bg-green-500/90 p-1 rounded-full min-h-9 max-h-9">
                  <span className="font-bold text-black text-sm leading-5">Add More Funds</span>
                </button>
              </div>
            </div>

            <div className="relative flex flex-col flex-1 justify-start items-center p-4 pb-5 overflow-hidden">
              <div className="flex flex-row justify-start items-center w-full h-6">
                <div className="flex flex-1 justify-start items-center gap-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">Available Margin</span>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <button className="bg-blue-500/10 hover:bg-blue-500/12 disabled:opacity-50 px-1 border border-gray-700/50 rounded h-6 font-normal text-secondary text-xs leading-4 transition-colors duration-150 ease-in-out disabled:cursor-not-allowed">
                    <span className="font-medium text-blue-400 text-xs leading-4">0.00 USDC</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full h-6">
                <div className="bg-gray-700/50 w-full h-px"></div>
              </div>
              <div className="flex flex-row justify-start items-center w-full h-6">
                <div className="flex flex-1 justify-start items-center gap-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">Perps Account Value</span>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">0.00 USDC</span>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-full h-6">
                <div className="flex flex-1 justify-start items-center gap-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">Current Position</span>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <span className="font-normal text-gray-400 text-xs leading-4">--</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerpetualsPage
