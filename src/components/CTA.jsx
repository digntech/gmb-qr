import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    (<section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied users and start creating QR codes today!</p>
        <Button size="lg" variant="secondary">Sign Up Now</Button>
      </div>
    </section>)
  );
}

