"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WithWalletProvider } from '@/components/wallet-modal/WithWalletProvider';
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const network = WalletAdapterNetwork.Mainnet;

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <WithWalletProvider network={network}>
          {children}
        </WithWalletProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
