import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    (<section
      className=" py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">QR Code Solutions for Every Need</h1>
        <p className="text-xl mb-8">Create, customize, and manage QR codes with our powerful tools</p>
        <Button size="lg" variant="outline">Get Started</Button>
      </div>
    </section>)
  );
}

