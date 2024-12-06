'use client'

import { useState } from 'react'
import QRCode from 'qrcode'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SocialQRCodeGenerator({ platform, placeholder, urlPrefix }) {
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [error, setError] = useState('')

  const generateQRCode = async () => {
    setError('')
    if (!input) {
      setError(`Please enter your ${platform} page URL or username`)
      return
    }

    try {
      const url = input.startsWith('http') ? input : `${urlPrefix}${input}`
      const qrCodeDataUrl = await QRCode.toDataURL(url)
      setQrCode(qrCodeDataUrl)
    } catch (err) {
      setError('Failed to generate QR code. Please try again.')
      console.error(err)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <Input
            type="text"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={generateQRCode} className="w-full">
            Generate QR Code
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {qrCode && (
            <div className="flex flex-col items-center space-y-2">
              <img src={qrCode} alt={`QR Code for ${platform}`} className="w-48 h-48" />
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = qrCode
                  link.download = `${platform.toLowerCase()}-qr-code.png`
                  link.click()
                }}
              >
                Download QR Code
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

