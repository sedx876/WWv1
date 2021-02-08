const path = require('path')
const Strain = require('../models/Strain')
const asyncHandler = require('../middleware/async')

//GET All Strains
//GET/api/v1/strains
exports.getStrains = async (req, res, next) => {
  try{
    const strains = await Strain.find()
    res 
      .status(200)
      .json({ success: true, count: strains.length, data: strains })
  }catch (err){
    res.status(400).json({ success: false })
  }
}

//GET Single Strain
//GET /api/v1/strains/:id
exports.getStrain = async (req, res, next) => {
  try{
    const strain = await Strain.findById(req.params.id)
    if (!strain){
      return res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: strain})
  }catch (err){
    res.status(400).json({ success: false })
  }
}