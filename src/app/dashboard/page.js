'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/sidebar'
import { ReviewList } from '@/components/review-list'
import { ReviewDetail } from '@/components/review-detail'
import { MobileNav } from '@/components/mobile-nav'

export default function Dashboard() {
  const [selectedReview, setSelectedReview] = useState(null)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4 md:p-6 overflow-auto pb-16 md:pb-6 md:ml-64">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800">Review Dashboard</h1>
        {selectedReview ? (
          <ReviewDetail review={selectedReview} onBack={() => setSelectedReview(null)} />
        ) : (
          <ReviewList onSelectReview={setSelectedReview} />
        )}
      </main>
      <MobileNav />
    </div>
  )
}

