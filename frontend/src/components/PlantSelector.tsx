'use client'

import { useState } from 'react'

interface UserPreferences {
  location: string
  sunlight: string
  gardenType: string
  budget: string
  experience: string
}

interface PlantSelectorProps {
  onSubmit: (preferences: UserPreferences) => void
}

export default function PlantSelector({ onSubmit }: PlantSelectorProps) {
  const [formData, setFormData] = useState<UserPreferences>({
    location: '',
    sunlight: '',
    gardenType: '',
    budget: '',
    experience: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (field: keyof UserPreferences, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-10 border border-white/20 transform transition-all duration-500 hover:shadow-3xl hover:bg-white/90 relative overflow-hidden">
        {/* Glassmorphism background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>

        <div className="text-center mb-12 relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-600 via-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
            <span className="text-3xl text-white">🌱</span>
          </div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent mb-4">
            Tell us about your garden space
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            We'll find the perfect plants for your unique environment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
        {/* Location */}
        <div className="group">
          <label className="block text-base font-bold text-gray-800 mb-4 group-focus-within:text-green-600 transition-colors duration-300">
            📍 Your Location (City, State or ZIP)
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="e.g., Portland, OR or 97201"
              className="w-full p-5 pl-14 bg-white/60 backdrop-blur-sm border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-green-600/30 focus:border-green-600 focus:bg-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/70 text-gray-800 placeholder-gray-500 shadow-lg"
              required
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 group-focus-within:text-green-600 transition-colors duration-300">
              📍
            </div>
          </div>
        </div>

        {/* Sunlight */}
        <div className="group">
          <label className="block text-base font-bold text-gray-800 mb-4 group-focus-within:text-green-600 transition-colors duration-300">
            ☀️ Sunlight Conditions
          </label>
          <div className="relative">
            <select
              value={formData.sunlight}
              onChange={(e) => handleChange('sunlight', e.target.value)}
              className="w-full p-5 pl-14 bg-white/60 backdrop-blur border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-green-600/30 focus:border-green-600 focus:bg-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/70 text-gray-800 shadow-lg appearance-none"
              required
            >
              <option value="">Select sunlight conditions</option>
              <option value="full-sun">Full Sun (6+ hours)</option>
              <option value="partial-sun">Partial Sun (4-6 hours)</option>
              <option value="partial-shade">Partial Shade (2-4 hours)</option>
              <option value="full-shade">Full Shade (less than 2 hours)</option>
            </select>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 group-focus-within:text-green-600 transition-colors duration-300 pointer-events-none">
              ☀️
            </div>
          </div>
        </div>

        {/* Garden Type */}
        <div className="group">
          <label className="block text-base font-bold text-gray-800 mb-4 group-focus-within:text-green-600 transition-colors duration-300">
            🏡 Garden Type
          </label>
          <div className="relative">
            <select
              value={formData.gardenType}
              onChange={(e) => handleChange('gardenType', e.target.value)}
              className="w-full p-5 pl-14 bg-white/60 backdrop-blur border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-green-600/30 focus:border-green-600 focus:bg-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/70 text-gray-800 shadow-lg appearance-none"
              required
            >
              <option value="">Select garden type</option>
              <option value="front-yard">Front Yard</option>
              <option value="backyard">Backyard</option>
              <option value="containers">Container Garden</option>
              <option value="balcony">Balcony/Patio</option>
              <option value="indoor">Indoor Plants</option>
            </select>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 group-focus-within:text-green-600 transition-colors duration-300 pointer-events-none">
              🏡
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="group">
          <label className="block text-base font-bold text-gray-800 mb-4 group-focus-within:text-green-600 transition-colors duration-300">
            💰 Budget Range
          </label>
          <div className="relative">
            <select
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full p-5 pl-14 bg-white/60 backdrop-blur border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-green-600/30 focus:border-green-600 focus:bg-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/70 text-gray-800 shadow-lg appearance-none"
              required
            >
              <option value="">Select budget range</option>
              <option value="under-100">Under $100</option>
              <option value="100-300">$100 - $300</option>
              <option value="300-500">$300 - $500</option>
              <option value="500-1000">$500 - $1,000</option>
              <option value="over-1000">Over $1,000</option>
            </select>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 group-focus-within:text-green-600 transition-colors duration-300 pointer-events-none">
              💰
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="group">
          <label className="block text-base font-bold text-gray-800 mb-4 group-focus-within:text-green-600 transition-colors duration-300">
            🌱 Gardening Experience
          </label>
          <div className="relative">
            <select
              value={formData.experience}
              onChange={(e) => handleChange('experience', e.target.value)}
              className="w-full p-5 pl-14 bg-white/60 backdrop-blur border-2 border-white/30 rounded-2xl focus:ring-4 focus:ring-green-600/30 focus:border-green-600 focus:bg-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/70 text-gray-800 shadow-lg appearance-none"
              required
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner (just starting)</option>
              <option value="intermediate">Intermediate (some experience)</option>
              <option value="advanced">Advanced (experienced gardener)</option>
              <option value="professional">Professional (landscape designer)</option>
            </select>
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 group-focus-within:text-green-600 transition-colors duration-300 pointer-events-none">
              🌱
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 via-teal-400 to-teal-500 text-white py-6 px-10 rounded-2xl hover:from-green-700 hover:via-teal-500 hover:to-teal-600 transition-all duration-500 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 active:translate-y-0 relative overflow-hidden group"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            🌿 Find My Perfect Plants
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
        </form>
      </div>
    </div>
  )
}