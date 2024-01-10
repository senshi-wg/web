import { Code } from "@nextui-org/code";
import { CopyIcon } from "../assets";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
      <div className="flex flex-col items-start gap-8 w-full md:w-1/2">
        <h1 className="text-6xl font-bold text-stroked text-[var(--primary-50)]">
          Your Gateway To SeamLess
          <span className="text-transparent"> In-DApp </span>Asset Transfers
        </h1>
        <div className="w-1/2 h-[3px] bg-[var(--primary-700)]"></div>
        <p className="text-[var(--primary-700)]">Streamline your cross-chain transactions between Ethereum and Solana with ease. Experience seamless token swaps and asset management in a user-friendly ecosystem.</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col md:items-end self-end relative">
        <div className="p-4 w-[20rem] flex flex-col items-start bg-[var(--primary-900)] rounded-2xl z-10">
          <div className="flex items-center justify-center gap-1">
            <span className="block h-[12px] w-[12px] bg-[var(--primary-50)] rounded-full"></span>
            <span className="block h-[12px] w-[12px] bg-[var(--primary-50)] rounded-full"></span>
            <span className="block h-[12px] w-[12px] bg-[var(--primary-50)] rounded-full"></span>
          </div>
          <span className="mt-8 text-[var(--primary-50)]">Install Catalyst</span>
          <Code className="mt-2 w-full text-[var(--primary-50)] flex items-center justify-between">npx create-catalyst-dapp<CopyIcon /></Code>
        </div>
        <div className="absolute right-0 h-[120px] w-[120px] bg-[var(--primary-50)] blur-[110px] -z-0"></div>
      </div>
    </div>
  )
}
