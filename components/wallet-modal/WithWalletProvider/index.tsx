import React, { ReactNode, useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletProvider as BaseWalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { MoongateWalletAdapter } from "@moongate/moongate-adapter";
import WalletProvider from '../WalletContext';

export const WithWalletProvider: React.FC<{ children: ReactNode, network: WalletAdapterNetwork }> = ({ children, network }) => {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter({ network }),
      new BackpackWalletAdapter({ network }),
      new MoongateWalletAdapter({ position: "top-right" })
    ],
    [network]
  );

  return (
    <BaseWalletProvider wallets={wallets} autoConnect>
      <WalletProvider>{children}</WalletProvider>
    </BaseWalletProvider>
  );
};
