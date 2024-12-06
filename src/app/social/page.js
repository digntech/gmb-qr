'use client'

import { useState } from 'react'
import { SocialQRCodeGenerator } from '@/components/social-qr-generator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { Facebook } from 'lucide-react'
import { FacebookFilled, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

export default function page() {
  const [activeTab, setActiveTab] = useState('facebook')

  return (
  <>
    <Navbar />
    <div className="container-fluid in-h-80 bg-gradient-to-br from-indigo-100 to-white mx-auto px-4 py-8">
        
      <h1 className="text-3xl font-bold text-center mb-8">Social Media QR Code Generator</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="facebook"><FacebookOutlined/> Facebook</TabsTrigger>
          <TabsTrigger value="instagram"><InstagramOutlined/>Instagram</TabsTrigger>
        </TabsList>
        <TabsContent value="facebook">
          <SocialQRCodeGenerator
            platform="Facebook"
            placeholder="Enter your Facebook page URL"
            urlPrefix="https://www.facebook.com/"
          />
        </TabsContent>
        <TabsContent value="instagram">
          <SocialQRCodeGenerator
            platform="Instagram"
            placeholder="Enter your Instagram username"
            urlPrefix="https://www.instagram.com/"
          />
        </TabsContent>
      </Tabs>
    </div>
    <Footer/>
    </>
  )
}

