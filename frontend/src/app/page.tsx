'use client'

import { useState } from 'react'
import PlantSelector from '@/components/PlantSelector'
import PlantResults from '@/components/PlantResults'

interface UserPreferences {
  location: string
  sunlight: string
  gardenType: string
  budget: string
  experience: string
}

export default function Home() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handlePreferencesSubmit = (prefs: UserPreferences) => {
    setPreferences(prefs)
    setShowResults(true)
  }

  const handleStartOver = () => {
    setPreferences(null)
    setShowResults(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-teal-100 to-teal-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.05)_0%,transparent_50%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-teal-500 rounded-3xl mb-8 shadow-2xl animate-bounce">
            <span className="text-4xl text-white">🌿</span>
          </div>
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-600 via-green-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
            Sustainable Landscaping Platform
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover the perfect plants for your space with our intelligent plant selection tool.
            <br />
            <span className="text-green-600 font-semibold">Create beautiful, sustainable landscapes that support local ecosystems.</span>
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center mt-8 space-x-4">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </header>

        {!showResults ? (
          <PlantSelector onSubmit={handlePreferencesSubmit} />
        ) : (
          <PlantResults
            preferences={preferences!}
            onStartOver={handleStartOver}
          />
        )}
      </div>
    </main>
  )
}