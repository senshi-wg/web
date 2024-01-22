import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { PublicKey } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useWallet, WalletProvider as BaseWalletProvider, Wallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { MoongateWalletAdapter } from '@moongate/moongate-adapter';

interface IWalletContext {
  connect: (walletName: string) => Promise<void>;
  disconnect: () => void;
  publicKey: PublicKey | null;
  connected: boolean;
}

const WalletContext = createContext<IWalletContext | null>(null);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const wallet = useWallet();

  const connect = useCallback(async (walletName: string) => {
    const adapter: Wallet | undefined = wallet.wallets.find(w => w.adapter.name.toLowerCase() === walletName.toLowerCase());
    if (adapter) {
      await wallet.select(adapter.adapter.name);
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

export const useWalletContext = (): IWalletContext => {
  const context = useContext(WalletContext);
  if (!context) throw new Error('useWalletContext must be used within a WalletProvider');
  return context;
};

export default WalletProvider;
