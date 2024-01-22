import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useWallet, WalletProvider as BaseWalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { MoongateWalletAdapter } from "@moongate/moongate-adapter";

interface IWalletContext {
  connect: (walletName: string) => Promise<void>;
  disconnect: () => void;
  publicKey: PublicKey | null;
  connected: boolean;
}

const WalletContext = createContext<IWalletContext | null>(null);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const wallet = useWallet();

  const connect = useCallback(async (walletName: string) => {
    const adapter = wallet.wallets.find(w => w.name.toLowerCase() === walletName.toLowerCase());
    if (adapter) {
      await wallet.select(adapter.name);
      await wallet.connect();
    } else {
      throw new Error(`${walletName} wallet not found`);
    }
  }, [wallet]);

  const disconnect = useCallback(async () => {
    await wallet.disconnect();
  }, [wallet]);

  return (
    <WalletContext.Provider value={{ 
      connect, 
      disconnect, 
      publicKey: wallet.publicKey, 
      connected: wallet.connected 
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWalletContext must be used within a WalletProvider');
  return context;
};

export const WithWalletProvider: React.FC<{children: ReactNode, network: WalletAdapterNetwork}> = ({ children, network }) => (
  <BaseWalletProvider wallets={[new PhantomWalletAdapter(), new BackpackWalletAdapter(), new MoongateWalletAdapter({ position: "top-right" }),]} autoConnect network={network}>
    <WalletProvider>{children}</WalletProvider>
  </BaseWalletProvider>
);
