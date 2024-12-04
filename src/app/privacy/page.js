import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "When you sign in via Google OAuth, we collect basic profile information such as your name, email address, and Google account ID.",
        "We do not access or store any sensitive Google account data such as your password."
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To verify your identity and provide secure access to your EssyQR account.",
        "To improve the services we offer and ensure a personalized user experience."
      ]
    },
    {
      title: "3. Data Storage and Security",
      content: [
        "Your information is encrypted and stored securely in compliance with industry standards.",
        "We never share your data with third parties without your explicit consent unless required by law."
      ]
    },
    {
      title: "4. Third-Party Services",
      content: [
        "EssyQR uses Google OAuth solely for authentication. This integration adheres to Google's Privacy and API policies.",
        "You can revoke EssyQR's access to your Google account at any time through your Google account settings."
      ]
    },
    {
      title: "5. Your Rights",
      content: [
        "You can request access to the data we have on you or request its deletion.",
        "If you have concerns about your data, please contact us at digitalwebsandy@gmail.com."
      ]
    },
    {
      title: "6. Updates to This Policy",
      content: [
        "We reserve the right to update this Privacy Policy. Changes will be reflected on this page, and you will be notified of significant updates."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">EssyQR Privacy Policy</CardTitle>
            <p className="text-sm text-gray-500">Effective Date: June 15, 2024</p>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              At EssyQR, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, store, and protect your personal information, especially when using Google OAuth for verification purposes.
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

