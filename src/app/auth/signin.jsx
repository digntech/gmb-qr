import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    await signIn('email', { email, callbackUrl: '/' });
  };

  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl: '/' });
  };

  const handlePhoneSignIn = async (e) => {
    e.preventDefault();
    // Implement phone OTP logic here
    // This would typically involve sending an OTP to the phone number
    // and then verifying it in a separate step
    console.log('Phone sign in not implemented yet');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Sign In / Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Sign in with Email
            </Button>
          </form>

          <div className="my-4 text-center">or</div>

          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full">
            Sign in with Google
          </Button>

          <div className="my-4 text-center">or</div>

          <form onSubmit={handlePhoneSignIn} className="space-y-4">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Sign in with Phone
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

