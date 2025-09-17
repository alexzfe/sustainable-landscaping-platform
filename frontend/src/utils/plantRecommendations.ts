import { Plant, MOCK_PLANTS } from '@/data/plants'

interface UserPreferences {
  location: string
  sunlight: string
  gardenType: string
  budget: string
  experience: string
}

export function getRecommendedPlants(preferences: UserPreferences): Plant[] {
  return MOCK_PLANTS.filter(plant => {
    // Filter by sunlight requirements
    if (!plant.sunlight.includes(preferences.sunlight as any)) {
      return false
    }

    // Filter by garden type
    if (!plant.gardenTypes.includes(preferences.gardenType as any)) {
      return false
    }

    // Filter by experience level (beginners get easier plants)
    if (preferences.experience === 'beginner' && plant.difficulty === 'advanced') {
      return false
    }

    // Filter by budget (rough approximation)
    const budgetOrder = ['under-100', '100-300', '300-500', '500-1000', 'over-1000']
    const userBudgetIndex = budgetOrder.indexOf(preferences.budget)
    const plantBudgetIndex = budgetOrder.indexOf(plant.priceRange)

    if (plantBudgetIndex > userBudgetIndex) {
      return false
    }

    // Basic region matching (simplified for demo)
    if (preferences.location.toLowerCase().includes('california') ||
        preferences.location.toLowerCase().includes('ca')) {
      return plant.regions.includes('West Coast') || plant.regions.includes('Southwest')
    }

    if (preferences.location.toLowerCase().includes('florida') ||
        preferences.location.toLowerCase().includes('fl')) {
      return plant.regions.includes('Southeast')
    }

    // Default: include all plants that match other criteria
    return true
  })
  .sort((a, b) => {
    // Prioritize native plants
    if (a.type === 'native' && b.type !== 'native') return -1
    if (b.type === 'native' && a.type !== 'native') return 1

    // Then prioritize by difficulty matching experience
    const experienceOrder = { 'beginner': 0, 'intermediate': 1, 'advanced': 2 }
    const userExpLevel = experienceOrder[preferences.experience as keyof typeof experienceOrder] || 0
    const aDiffLevel = experienceOrder[a.difficulty]
    const bDiffLevel = experienceOrder[b.difficulty]

    const aMatch = Math.abs(aDiffLevel - userExpLevel)
    const bMatch = Math.abs(bDiffLevel - userExpLevel)

    return aMatch - bMatch
  })
  .slice(0, 6) // Return top 6 recommendations
}

export function getPlantTypeColor(type: Plant['type']): string {
  switch (type) {
    case 'native':
      return 'bg-green-100 text-green-800'
    case 'adapted':
      return 'bg-blue-100 text-blue-800'
    case 'ornamental':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function getDifficultyColor(difficulty: Plant['difficulty']): string {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800'
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'advanced':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}