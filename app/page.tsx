import HeroSection from "@/components/hero-section/hero-section";
import Features from "@/components/feature";
import ChartSection from "@/components/chart-section";
import Testimonials from "@/components/Testimonials";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{/* Blur effect of left top corner */}
			<div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[450px] bg-[var(--primary-700)] rounded-[70px] blur-[180px]"></div>
			{/* Hero Section */}
			<HeroSection />
			{/* User Services Experience */}
			<Features />
			{/* Transaction Matrics Section */}
			<ChartSection/>
			{/* Testimonials Section */}
			<Testimonials/>
			{/* Subscription Section */}
			<Subscription/>
			{/* Footer */}
			<Footer/>
		</section>
	);
}
