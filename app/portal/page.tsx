import React from 'react'
import Image, { StaticImageData } from 'next/image';
import BackPack from "@/images/backpack.png";
import Phantom from "@/images/phantom.png";
import Ethereum from "@/images/ethereum.png";
import { WalletIcon } from '@/components/assets';
import { Button } from '@nextui-org/button';
import { ExChangeIcon } from '@/components/assets';
import { ConnectKitButton } from 'connectkit';

export default function page() {

    interface Wallet {
        text: string,
        image: StaticImageData,
        walletName?: string
    }

    const Wallets: Wallet[] = [
        {
            text: "BackPack",
            image: BackPack,
            walletName: "backpack"
        },
        {
            text: "Phantom",
            image: Phantom,
            walletName: "phantom"
        },
        {
            text: "Ethereum",
            image: Ethereum,
            walletName: "moongate"
        }
    ];

    return (
        <>
            <h1 className='text-4xl text-center'>USDC Tansfer</h1>
            <div className='mt-5 w-[600px] flex flex-col items-center'>
                {/* From */}
                <div className='w-full'>
                    <div className="flex items-center justify-between">
                        <strong className='text-[var(--secondary-900)]'>From</strong>
                        <ConnectKitButton />
                    </div>
                    <div className='mt-4 p-2 w-full h-[11rem] bg-[var(--primary-900)] grid grid-cols-4 grid-rows-2 rounded-md overflow-hidden gap-2'>
                        <div className='bg-[var(--primary-800)] row-span-2 flex flex-col items-center justify-center gap-2 rounded-md'>
                            <span className=' opacity-70'>Network</span>
                            <Image
                                src={Ethereum}
                                alt="..."
                                height={50}
                            />
                            <span>Ethereum</span>
                        </div>
                        <div className='bg-[var(--primary-800)] pl-2 col-span-3 flex flex-col items-start justify-center rounded-md'>
                            <span className='opacity-70'>Asset</span>
                            <span className='flex items-center gap-2'>
                                <Image
                                    src={BackPack}
                                    alt="..."
                                    height={20}
                                />
                                <span>USDC</span>
                                <span className='text-[13px] opacity-70'>(Ethereum)</span>
                            </span>
                        </div>
                        <div className='col-span-3 flex items-center'>
                            <div className='pl-2 h-full w-[75%] bg-[var(--primary-800)] flex flex-col items-start justify-center rounded-md'>
                                <span className=' opacity-70'>Amount</span>
                                <span className='opacity-60'>0.00</span>
                            </div>
                            <div className='w-[25%] flex flex-col items-start justify-center gap-1 pl-2'>
                                <span>Balance</span>
                                <span>--</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Exchange Icon */}
                <Button isIconOnly className='mt-4 p-2 bg-[var(--primary-900)] rounded-full'>
                    <ExChangeIcon />
                </Button>
                {/* To */}
                <div className='w-full'>
                    <div className="flex items-center justify-between">
                    <ConnectKitButton />
                    </div>
                    <div className='mt-4 p-2 w-full h-[11rem] bg-[var(--primary-900)] grid grid-cols-4 grid-rows-2 rounded-md overflow-hidden gap-2'>
                        <div className='bg-[var(--primary-800)] row-span-2 flex flex-col items-center justify-center gap-2 rounded-md'>
                            <span className=' opacity-70'>Network</span>
                            <Image
                                src={Ethereum}
                                alt="..."
                                height={50}
                            />
                            <span>Ethereum</span>
                        </div>
                        <div className='bg-[var(--primary-800)] pl-2 col-span-3 flex flex-col items-start justify-center rounded-md'>
                            <span className='opacity-70'>Asset</span>
                            <span className='flex items-center gap-2'>
                                <Image
                                    src={BackPack}
                                    alt="..."
                                    height={20}
                                />
                                <span>USDC</span>
                                <span className='text-[13px] opacity-70'>(Ethereum)</span>
                            </span>
                        </div>
                        <div className='col-span-3 flex items-center'>
                            <div className='pl-2 h-full w-[75%] bg-[var(--primary-800)] flex flex-col items-start justify-center rounded-md'>
                                <span className=' opacity-70'>Amount</span>
                                <span className='opacity-60'>0.00</span>
                            </div>
                            <div className='w-[25%] flex flex-col items-start justify-center gap-1 pl-2'>
                                <span>Balance</span>
                                <span>--</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
