import Waitlist from '@/components/Waitlist';

export default function WaitlistPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-display font-bold mb-8 text-senshi-accent">Senshi Waitlist</h1>
      <p className="text-senshi-light mb-8">You&apos;re on the waitlist. We&apos;ll notify you when you&apos;re approved.</p>
      <Waitlist />
    </div>
  );
}