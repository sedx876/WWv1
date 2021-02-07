const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const Strain = require('./models/Strain')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
const strains = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/strains.json`, 'utf-8')
)

const importData = async () => {
  try {
    await Strain.create(strains)
    console.table('Data Imported...'.green.inverse)
  }catch (err){
    console.error(err)
  }
}

const deleteData = async () => {
  try {
  await Strain.deleteMany()
  console.table('Data Destroyed...'.red.inverse)
  }catch (err){
    console.error(err)
  }
}

if (process.argv[2] === '-i'){
  importData()
}else if (process.argv[2] === '-d'){
  deleteData()
}