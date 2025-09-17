'use client'

import { useMemo } from 'react'
import PlantCard from './PlantCard'
import { getRecommendedPlants } from '@/utils/plantRecommendations'

interface UserPreferences {
  location: string
  sunlight: string
  gardenType: string
  budget: string
  experience: string
}

interface PlantResultsProps {
  preferences: UserPreferences
  onStartOver: () => void
}

export default function PlantResults({ preferences, onStartOver }: PlantResultsProps) {
  const recommendedPlants = useMemo(() => {
    return getRecommendedPlants(preferences)
  }, [preferences])

  const formatPreference = (key: string, value: string) => {
    const formatMap: Record<string, Record<string, string>> = {
      sunlight: {
        'full-sun': 'Full Sun (6+ hours)',
        'partial-sun': 'Partial Sun (4-6 hours)',
        'partial-shade': 'Partial Shade (2-4 hours)',
        'full-shade': 'Full Shade (<2 hours)'
      },
      gardenType: {
        'front-yard': 'Front Yard',
        'backyard': 'Backyard',
        'containers': 'Container Garden',
        'balcony': 'Balcony/Patio',
        'indoor': 'Indoor Plants'
      },
      budget: {
        'under-100': 'Under $100',
        '100-300': '$100 - $300',
        '300-500': '$300 - $500',
        '500-1000': '$500 - $1,000',
        'over-1000': 'Over $1,000'
      },
      experience: {
        'beginner': 'Beginner',
        'intermediate': 'Intermediate',
        'advanced': 'Advanced',
        'professional': 'Professional'
      }
    }
    return formatMap[key]?.[value] || value
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Results Header */}
      <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-2xl p-10 mb-16 border border-white/30 transform transition-all duration-500 animate-fadeIn relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-teal-50/30 rounded-3xl"></div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-nature-green via-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-soft">
                <span className="text-2xl text-white">🌿</span>
              </div>
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-nature-green via-teal-500 to-teal-600 bg-clip-text text-transparent">
                Your Personalized Plant Recommendations
              </h2>
            </div>
            <p className="text-xl text-gray-700 font-medium">
              Based on your preferences, we found <span className="font-bold text-nature-green text-2xl">{recommendedPlants.length} perfect plants</span> for your space!
            </p>
          </div>
          <button
            onClick={onStartOver}
            className="px-6 py-3 text-nature-green border-2 border-nature-green rounded-xl hover:bg-nature-green hover:text-white transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-lg"
          >
            🔄 Start Over
          </button>
        </div>

        {/* Preferences Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
          <h3 className="font-semibold text-gray-800 mb-4 text-center">Your Garden Profile</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📍</div>
              <span className="block font-medium text-gray-700 text-sm mb-1">Location</span>
              <p className="text-gray-600 text-sm">{preferences.location}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">☀️</div>
              <span className="block font-medium text-gray-700 text-sm mb-1">Sunlight</span>
              <p className="text-gray-600 text-sm">{formatPreference('sunlight', preferences.sunlight)}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🏡</div>
              <span className="block font-medium text-gray-700 text-sm mb-1">Garden</span>
              <p className="text-gray-600 text-sm">{formatPreference('gardenType', preferences.gardenType)}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">💰</div>
              <span className="block font-medium text-gray-700 text-sm mb-1">Budget</span>
              <p className="text-gray-600 text-sm">{formatPreference('budget', preferences.budget)}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🌱</div>
              <span className="block font-medium text-gray-700 text-sm mb-1">Experience</span>
              <p className="text-gray-600 text-sm">{formatPreference('experience', preferences.experience)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {recommendedPlants.length > 0 ? (
        <>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              🌺 Recommended Plants for Your Space
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedPlants.map((plant, index) => (
                <div
                  key={plant.id}
                  className="transform transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <PlantCard plant={plant} />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-nature-green via-leaf-green to-green-600 text-white rounded-2xl p-10 text-center shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🌱</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Ready to Start Planting?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with local growers and landscape professionals to bring your sustainable garden to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-nature-green px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                🏪 Find Local Growers
              </button>
              <button className="bg-green-800/80 backdrop-blur text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-900/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 border-white/20">
                👨‍🌾 Get Professional Help
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-12 text-center shadow-lg">
          <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold text-amber-800 mb-4">
            No Perfect Matches Found
          </h3>
          <p className="text-amber-700 mb-8 text-lg max-w-lg mx-auto">
            We couldn't find plants that match all your criteria. Try adjusting your preferences or expanding your budget range for more options.
          </p>
          <button
            onClick={onStartOver}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            🔧 Adjust Preferences
          </button>
        </div>
      )}
    </div>
  )
}