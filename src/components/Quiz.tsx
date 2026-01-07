'use client'

import { useState } from 'react'

interface Question {
  id: number
  text: string
  options: { text: string; value: number }[]
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Sua mente demora a desligar quando você tenta dormir?',
    options: [
      { text: 'Sempre', value: 4 },
      { text: 'Frequentemente', value: 3 },
      { text: 'Às vezes', value: 2 },
      { text: 'Raramente', value: 1 },
      { text: 'Nunca', value: 0 },
    ],
  },
  {
    id: 2,
    text: 'Você se sente sobrecarregado com responsabilidades diárias?',
    options: [
      { text: 'Sempre', value: 4 },
      { text: 'Frequentemente', value: 3 },
      { text: 'Às vezes', value: 2 },
      { text: 'Raramente', value: 1 },
      { text: 'Nunca', value: 0 },
    ],
  },
  {
    id: 3,
    text: 'Você evita situações sociais por causa do seu humor?',
    options: [
      { text: 'Sempre', value: 4 },
      { text: 'Frequentemente', value: 3 },
      { text: 'Às vezes', value: 2 },
      { text: 'Raramente', value: 1 },
      { text: 'Nunca', value: 0 },
    ],
  },
  {
    id: 4,
    text: 'Você sente falta de energia para atividades que costumava gostar?',
    options: [
      { text: 'Sempre', value: 4 },
      { text: 'Frequentemente', value: 3 },
      { text: 'Às vezes', value: 2 },
      { text: 'Raramente', value: 1 },
      { text: 'Nunca', value: 0 },
    ],
  },
  {
    id: 5,
    text: 'Você se preocupa excessivamente com o futuro?',
    options: [
      { text: 'Sempre', value: 4 },
      { text: 'Frequentemente', value: 3 },
      { text: 'Às vezes', value: 2 },
      { text: 'Raramente', value: 1 },
      { text: 'Nunca', value: 0 },
    ],
  },
]

interface QuizProps {
  onComplete: () => void
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Quiz completo, calcular score e salvar
      const totalScore = newAnswers.reduce((sum, val) => sum + val, 0)
      localStorage.setItem('quizScore', totalScore.toString())
      onComplete()
    }
  }

  const question = questions[currentQuestion]

  return (
    <div className="card">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-6 text-center">
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left p-4 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary hover:bg-opacity-10 transition-colors"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}