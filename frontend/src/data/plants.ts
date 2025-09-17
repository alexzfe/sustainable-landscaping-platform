export interface Plant {
  id: string
  name: string
  scientificName: string
  type: 'native' | 'adapted' | 'ornamental'
  sunlight: ('full-sun' | 'partial-sun' | 'partial-shade' | 'full-shade')[]
  gardenTypes: ('front-yard' | 'backyard' | 'containers' | 'balcony' | 'indoor')[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  priceRange: 'under-100' | '100-300' | '300-500' | '500-1000' | 'over-1000'
  regions: string[]
  benefits: string[]
  description: string
  careInstructions: string
  matureSize: string
  bloomTime?: string
  imageUrl: string
}

export const MOCK_PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Purple Coneflower',
    scientificName: 'Echinacea purpurea',
    type: 'native',
    sunlight: ['full-sun', 'partial-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['Midwest', 'Northeast', 'Southeast'],
    benefits: ['Attracts pollinators', 'Drought tolerant', 'Medicinal properties', 'Long blooming'],
    description: 'A hardy native perennial with striking purple-pink flowers and prominent orange centers.',
    careInstructions: 'Water regularly first year, then drought tolerant. Deadhead for continuous blooms.',
    matureSize: '2-4 feet tall, 1.5 feet wide',
    bloomTime: 'Summer to Fall',
    imageUrl: '/images/purple-coneflower.jpg'
  },
  {
    id: '2',
    name: 'Black-Eyed Susan',
    scientificName: 'Rudbeckia hirta',
    type: 'native',
    sunlight: ['full-sun', 'partial-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['Midwest', 'Northeast', 'Southeast', 'Southwest'],
    benefits: ['Attracts butterflies', 'Drought tolerant', 'Long blooming', 'Self-seeding'],
    description: 'Cheerful yellow flowers with dark centers that bloom from summer through fall.',
    careInstructions: 'Very low maintenance. Tolerates poor soil and drought once established.',
    matureSize: '1-3 feet tall, 1-2 feet wide',
    bloomTime: 'Summer to Fall',
    imageUrl: '/images/black-eyed-susan.jpg'
  },
  {
    id: '3',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    type: 'adapted',
    sunlight: ['full-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers', 'balcony'],
    difficulty: 'intermediate',
    priceRange: 'under-100',
    regions: ['West Coast', 'Southwest', 'Mediterranean climates'],
    benefits: ['Aromatic', 'Attracts bees', 'Drought tolerant', 'Culinary use'],
    description: 'Fragrant herb with purple flower spikes and silvery foliage.',
    careInstructions: 'Requires well-draining soil. Prune after flowering. Avoid overwatering.',
    matureSize: '1-2 feet tall and wide',
    bloomTime: 'Late spring to summer',
    imageUrl: '/images/lavender.jpg'
  },
  {
    id: '4',
    name: 'Hosta',
    scientificName: 'Hosta spp.',
    type: 'ornamental',
    sunlight: ['partial-shade', 'full-shade'],
    gardenTypes: ['backyard', 'containers'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['Northeast', 'Midwest', 'Northwest'],
    benefits: ['Shade tolerant', 'Low maintenance', 'Attractive foliage', 'Long-lived'],
    description: 'Popular shade perennial with large, heart-shaped leaves in various colors.',
    careInstructions: 'Keep soil consistently moist. Divide every 3-5 years for best growth.',
    matureSize: '6 inches to 4 feet, depending on variety',
    bloomTime: 'Summer',
    imageUrl: '/images/hosta.jpg'
  },
  {
    id: '5',
    name: 'Japanese Maple',
    scientificName: 'Acer palmatum',
    type: 'ornamental',
    sunlight: ['partial-sun', 'partial-shade'],
    gardenTypes: ['front-yard', 'backyard', 'containers'],
    difficulty: 'intermediate',
    priceRange: '300-500',
    regions: ['Northeast', 'Northwest', 'Midwest'],
    benefits: ['Four-season interest', 'Compact size', 'Beautiful fall color', 'Architectural form'],
    description: 'Elegant small tree with delicate leaves and stunning fall color.',
    careInstructions: 'Protect from harsh winds. Water regularly but ensure good drainage.',
    matureSize: '6-25 feet tall, depending on variety',
    bloomTime: 'Spring (inconspicuous)',
    imageUrl: '/images/japanese-maple.jpg'
  },
  {
    id: '6',
    name: 'Snake Plant',
    scientificName: 'Sansevieria trifasciata',
    type: 'ornamental',
    sunlight: ['partial-shade', 'full-shade'],
    gardenTypes: ['indoor', 'containers'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['All (indoor)'],
    benefits: ['Air purifying', 'Low maintenance', 'Drought tolerant', 'Low light tolerant'],
    description: 'Architectural succulent with upright, sword-like leaves.',
    careInstructions: 'Water sparingly. Allow soil to dry between waterings. Low light OK.',
    matureSize: '1-4 feet tall',
    imageUrl: '/images/snake-plant.jpg'
  },
  {
    id: '7',
    name: 'California Poppy',
    scientificName: 'Eschscholzia californica',
    type: 'native',
    sunlight: ['full-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['West Coast', 'Southwest'],
    benefits: ['Drought tolerant', 'Self-seeding', 'Attracts beneficial insects', 'Easy from seed'],
    description: 'Bright orange cup-shaped flowers that close at night and in cloudy weather.',
    careInstructions: 'Sow seeds in fall or early spring. Requires minimal water once established.',
    matureSize: '8-12 inches tall and wide',
    bloomTime: 'Spring to fall',
    imageUrl: '/images/california-poppy.jpg'
  },
  {
    id: '8',
    name: 'Sedum Varieties',
    scientificName: 'Sedum spp.',
    type: 'adapted',
    sunlight: ['full-sun', 'partial-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers', 'balcony'],
    difficulty: 'beginner',
    priceRange: 'under-100',
    regions: ['All regions'],
    benefits: ['Extremely drought tolerant', 'Attracts pollinators', 'Low maintenance', 'Succulent storage'],
    description: 'Diverse group of succulent plants with fleshy leaves and colorful flowers.',
    careInstructions: 'Plant in well-draining soil. Water sparingly. Very drought tolerant.',
    matureSize: '3 inches to 2 feet, depending on variety',
    bloomTime: 'Late summer to fall',
    imageUrl: '/images/sedum.jpg'
  },
  {
    id: '9',
    name: 'Ferns (Native Varieties)',
    scientificName: 'Various species',
    type: 'native',
    sunlight: ['partial-shade', 'full-shade'],
    gardenTypes: ['backyard', 'containers'],
    difficulty: 'intermediate',
    priceRange: 'under-100',
    regions: ['Northeast', 'Northwest', 'Southeast'],
    benefits: ['Shade loving', 'Air purifying', 'Natural woodland look', 'Low maintenance'],
    description: 'Elegant perennials with delicate fronds that thrive in shaded areas.',
    careInstructions: 'Keep soil consistently moist. Provide humidity. Protect from direct sun.',
    matureSize: '6 inches to 6 feet, depending on species',
    imageUrl: '/images/native-ferns.jpg'
  },
  {
    id: '10',
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    type: 'adapted',
    sunlight: ['full-sun'],
    gardenTypes: ['front-yard', 'backyard', 'containers', 'balcony'],
    difficulty: 'intermediate',
    priceRange: 'under-100',
    regions: ['West Coast', 'Southwest', 'Southeast'],
    benefits: ['Culinary herb', 'Aromatic', 'Drought tolerant', 'Evergreen'],
    description: 'Aromatic evergreen herb with needle-like leaves and small blue flowers.',
    careInstructions: 'Requires well-draining soil. Water deeply but infrequently once established.',
    matureSize: '2-6 feet tall and wide',
    bloomTime: 'Winter to spring',
    imageUrl: '/images/rosemary.jpg'
  }
]