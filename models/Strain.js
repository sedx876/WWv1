const mongoose = require('mongoose')
const slugify = require('slugify')

const StrainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  slug: String,
  race: {
    type: [String],
    required: true,
    enum: [
      'Indica',
      'Sativa',
      'Hybrid'
    ]
  },
  description: {
    type: String,
    required: [true, 'Please enter a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  thc: String,
  cbd: String,
  image: String,
  goodFor: {
    type: [String],
    required: true,
    enum: [
      'Depression',
      'Insomnia',
      'Pain',
      'Stress',
      'Cramps',
      'Lack of Appetite',
      'Nausea',
      'Headache',
      'Fatigue',
      'Eye Pressure',
      'Inflammation',
      'Spasticity',
      'Seizures',
      'Muscle Spasms',
      'Tremors',
      'PTSD',
      'Anxiety',
      'Libido',
      'ADD/ADHD'
    ]
  },
  posEffects: {
    type: [String],
    required: true,
    enum: [
      'Relaxed',
      'Hungry',
      'Euphoric',
      'Happy',
      'Creative',
      'Energetic',
      'Talkative',
      'Uplifted',
      'Tingly',
      'Sleepy',
      'Focused',
      'Giggly',
      'Aroused',
      'Enhanced Sensory Experiences'
    ]
  },
  negEffects: {
    type: [String],
    enum: [
      'Dizzy',
      'Dry Mouth',
      'Paranoid',
      'Dry Eyes',
      'Anxious',
      'Reduced Coordination and Balance',
      'Cognitive Impairment',
      'Hallucinations',
      'Mood Alterations',
      'Altered Blood Pressure',
      'Increased Heart Rate',
      'Nausea',
      'Cough/Sore Throat'
    ]
  },
  flavors: {
    type: [String],
    enum: [
      'Earthy',
      'Chemical',
      'Pine',
      'Spicy',
      'Herbal',
      'Pungent',
      'Peppery',
      'Flowery',
      'Citrus',
      'Orange',
      'Sweet',
      'Skunk',
      'Grape',
      'Minty',
      'Woody',
      'Cheese',
      'Diesel',
      'Tropical',
      'Grapefruit',
      'Nutty',
      'Lemon',
      'Berry',
      'Blueberry',
      'Ammonia',
      'Apple',
      'Rose',
      'Butter',
      'Honey',
      'Tea',
      'Lime',
      'Lavender',
      'Strawberry',
      'Mint',
      'Chestnut',
      'Tree Fruit',
      'Pear',
      'Apricot',
      'Peach',
      'Bleu Cheese',
      'Menthol',
      'Coffee',
      'Tar',
      'Mango',
      'Pineapple',
      'Sage',
      'Vanilla',
      'Plum',
      'Tobacco',
      'Violet'
    ]
  }
})

module.exports = mongoose.model('Strain', StrainSchema)