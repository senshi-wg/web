import HeroSection from "@/components/hero-section/hero-section";
import Features from "@/components/feature";
import TransactionMatrics from "@/components/chart-section";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* Hero Section */}
			<HeroSection />
			{/* User Services Experience */}
			<Features />
			{/* Transaction Matrics Section */}
			<TransactionMatrics/>
		</section>
	);
}
