"use client"

import React from 'react'
import RewardPage from '@/components/rewards'

export default function page() {
  return (
    <main className="flex flex-col justify-between items-center bg-black w-full min-h-[calc(100vh-98px)]">
      <RewardPage />
    </main>
  )
}
