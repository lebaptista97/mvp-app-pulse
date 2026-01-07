'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CheckIn from '@/components/CheckIn'

export default function CheckInPage() {
  const router = useRouter()

  const handleCheckInComplete = () => {
    router.push('/result')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Check-in Diário
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Como você está se sentindo hoje? Responda rapidamente para gerar seu Score Emocional Diário.
        </p>
        <CheckIn onComplete={handleCheckInComplete} />
      </div>
    </main>
  )
}