'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Quiz from '@/components/Quiz'

export default function Home() {
  const router = useRouter()
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleQuizComplete = () => {
    setQuizCompleted(true)
    // Salvar no localStorage que o quiz foi completado
    localStorage.setItem('quizCompleted', 'true')
    router.push('/checkin')
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Bem-vindo ao PULSE
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Vamos começar com um quiz rápido para entender seu estado emocional atual.
        </p>
        {!quizCompleted && <Quiz onComplete={handleQuizComplete} />}
      </div>
    </main>
  )
}