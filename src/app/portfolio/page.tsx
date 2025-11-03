"use client"

import React from 'react'
import Portfolio from '@/components/portfolio'

export default function page() {
  return (
    <main className="flex flex-col justify-between items-center bg-black w-full min-h-[calc(100vh-98px)]">
      <Portfolio />
    </main>
  )
}
