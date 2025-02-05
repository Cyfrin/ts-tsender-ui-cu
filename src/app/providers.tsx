'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useState, useEffect } from 'react'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, } from '@rainbow-me/rainbowkit';
import config from "@/rainbowKitConfig"
import '@rainbow-me/rainbowkit/styles.css';


export function Providers(props: {
  children: ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
