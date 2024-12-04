"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";



function page() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                   


                    <DotLottieReact
                        src="https://lottie.host/cf9126dd-f3e6-4157-bfd4-011981816cf9/MuBD3zlvN1.lottie"
                        loop
                        autoplay
                        width={500}
                    />

                    
                    <CardTitle className="text-2xl text-center">
                        Your Response Has Been Recorded.
                    </CardTitle>
                    
                </CardHeader>
                <CardContent className="space-y-4">
                <h3 style={{ fontStyle: "italic", textAlign: "center" }}>
We appolgise for any kind of Inconvinience caused
                    </h3>
                   <p className="text-center">We appreciate you taking the time to share your experience. Your
                   feedback helps us improve our services. You can close this page now.</p>
                </CardContent>
            </Card>
        </div>
    );
}

export default page;


