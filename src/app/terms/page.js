import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  const sections = [
    {
      title: "1. Account Verification with Google OAuth",
      content: [
        "Users must authenticate through Google OAuth to access certain features of EssyQR.",
        "You are responsible for maintaining the confidentiality of your Google account credentials."
      ]
    },
    {
      title: "2. Permitted Use",
      content: [
        "EssyQR is intended for generating, managing, and using QR-based solutions.",
        "You agree not to misuse the service for unlawful activities or to infringe on the rights of others."
      ]
    },
    {
      title: "3. User Responsibilities",
      content: [
        "Provide accurate information during account registration and Google OAuth authentication.",
        "You are responsible for all activities conducted through your account."
      ]
    },
    {
      title: "4. Service Availability",
      content: [
        "We aim to provide uninterrupted access to EssyQR. However, we do not guarantee uptime and are not liable for any interruptions."
      ]
    },
    {
      title: "5. Termination of Services",
      content: [
        "EssyQR reserves the right to terminate accounts that violate these terms or engage in abusive practices."
      ]
    },
    {
      title: "6. Disclaimer of Warranties",
      content: [
        "EssyQR is provided on an \"as-is\" basis. We do not guarantee that the service will be free from errors or meet all your requirements."
      ]
    },
    {
      title: "7. Governing Law",
      content: [
        "These terms are governed by and construed under the laws of India, and any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kolkata, India."
      ]
    },
    {
      title: "8. Contact Information",
      content: [
        "For any questions or concerns, please reach out to us at digitalwebsandy@gmail.com."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">EssyQR Terms of Service</CardTitle>
            <p className="text-sm text-gray-500">Effective Date: June 15, 2024</p>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Welcome to EssyQR. By accessing or using our services, you agree to the following terms and conditions.
            </p>
            {sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <ul className="list-disc pl-5 space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                {index < sections.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
            <p className="mt-6 font-semibold">
              By continuing to use EssyQR, you acknowledge that you have read, understood, and agreed to these Terms of Service.
            </p>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} EssyQR. All rights reserved.</p>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

