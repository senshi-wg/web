// providers.tsx

"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WalletProvider } from '@/components/wallet-modal/WalletContext';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

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
        <WalletProvider network={network}>
          {children}
        </WalletProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
