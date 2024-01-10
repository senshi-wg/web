import { Button } from "@nextui-org/button";
import Image from "next/image";
import SDK from "@/images/Rectangle23.png"
import CrossChain from "@/images/Rectangle22.1.png"
import ProductMobile from "@/images/Rectangle22.png"
import SolanaMobile from "@/images/Rectangle22.2.png"
import React from "react";

export default function Features() {

  interface FeatureCard {
    image: React.ReactNode;
    text: string;
  }

  const featureCards: FeatureCard[] = [
    {
      image: <Image src={ProductMobile} alt="..." />,
      text: "Transfer in-app assets between Ethereum and Solana with ease and efficiency."
    },
    {
      image: <Image src={CrossChain} alt="..." />,
      text: "Enjoy a streamlined, intuitive interface that makes cross-chain interactions a breeze.",
    },
    {
      image: <Image src={SolanaMobile} alt="..." />,
      text: "Experience quick transaction processing times, making your cross-chain interactions smoother than ever.",
    }
  ]

  return (
    <section className="mt-32 flex flex-col items-center gap-4">
      <div>
        <div className="h-[3px] w-20 bg-[var(--primary-700)]"></div>
        <h1 className="text-[var(--primary-700)] text-center font-bold">Features</h1>
      </div>
      <h1 className="max-w-[23rem] text-3xl text-center font-bold text-[var(--primary-700)]">Empowering Seamless Cross-Chain Experience</h1>
      <Button radius="full" className="bg-[var(--primary-700)]">Learn More</Button>
      <div className="w-full mt-8 flex items-start flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          {
            featureCards.map((featureCard) => {
              return (
                <div className="flex items-center gap-4">
                  {featureCard.image}
                  <p className="text-[var(--primary-700)]">{featureCard.text}</p>
                </div>
              )
            })
          }
        </div>
        <div className="w-full md:w-1/2">
          <Image src={SDK} alt="..." />
          <h3 className="mt-3 text-2xl font-bold text-[var(--primary-700)]">Developer-Friendly SDK</h3>
          <p className="mt-3 text-[var(--primary-700)]">Integrate Catalyst's capabilities into your DApp with our easy-to-use SDK, designed to minimize development time and maximize functionality.</p>
        </div>
      </div>
    </section>
  )
}
