'use client'

import { Plant } from '@/data/plants'
import { getPlantTypeColor, getDifficultyColor } from '@/utils/plantRecommendations'

interface PlantCardProps {
  plant: Plant
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <div className="backdrop-blur-lg bg-white/90 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-white/30 group transform hover:-translate-y-2 hover:scale-[1.02]">
      {/* Plant Image Placeholder */}
      <div className="h-64 bg-gradient-to-br from-teal-100 via-teal-100 to-green-200 flex items-center justify-center relative overflow-hidden">
        <div className="text-8xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-float">🌿</div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating particles effect */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-teal-400 rounded-full opacity-60 animate-pulse-soft"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-teal-400 rounded-full opacity-80 animate-pulse-soft" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-green-400 rounded-full opacity-70 animate-pulse-soft" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="p-8">
        {/* Plant Name and Type */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-nature-green group-hover:to-teal-500 transition-all duration-300">{plant.name}</h3>
          <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm ${getPlantTypeColor(plant.type)} transform transition-all duration-300 group-hover:scale-110`}>
            {plant.type === 'native' ? '🌱 Native' : plant.type === 'adapted' ? '🔄 Adapted' : '🌸 Ornamental'}
          </span>
        </div>

        <p className="text-base text-gray-600 italic mb-5 font-semibold">{plant.scientificName}</p>

        {/* Description */}
        <p className="text-gray-700 text-base mb-6 leading-relaxed line-clamp-3 font-medium">{plant.description}</p>

        {/* Key Details */}
        <div className="space-y-4 mb-6 bg-gradient-to-br from-gray-50/80 to-teal-50/60 backdrop-blur rounded-2xl p-5 border border-white/50">
          <div className="flex justify-between text-base">
            <span className="text-gray-700 font-bold flex items-center gap-2">📏 Size:</span>
            <span className="text-gray-900 font-bold">{plant.matureSize}</span>
          </div>
          {plant.bloomTime && (
            <div className="flex justify-between text-base">
              <span className="text-gray-700 font-bold flex items-center gap-2">🌸 Blooms:</span>
              <span className="text-gray-900 font-bold">{plant.bloomTime}</span>
            </div>
          )}
          <div className="flex justify-between text-base items-center">
            <span className="text-gray-700 font-bold flex items-center gap-2">🎯 Difficulty:</span>
            <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-md ${getDifficultyColor(plant.difficulty)} transform transition-all duration-300 hover:scale-105`}>
              {plant.difficulty}
            </span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            ✨ Benefits:
          </h4>
          <div className="flex flex-wrap gap-3">
            {plant.benefits.slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-2xl font-bold border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-105 shadow-sm"
              >
                {benefit}
              </span>
            ))}
            {plant.benefits.length > 3 && (
              <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm rounded-2xl font-bold border border-gray-300 shadow-sm">
                +{plant.benefits.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Care Instructions */}
        <div className="pt-6 border-t-2 border-gradient-to-r from-emerald-200 to-teal-200">
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            🧑‍🌾 Care Tips:
          </h4>
          <p className="text-base text-gray-700 leading-relaxed font-medium">{plant.careInstructions}</p>
        </div>
      </div>
    </div>
  )
}