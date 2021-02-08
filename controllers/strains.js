const path = require('path')
const Strain = require('../models/Strain')
const asyncHandler = require('../middleware/async')

//Get All Strains
//GET/api/v1/strains
exports.getStrains = asyncHandler(async (req, res, next) => {
  res.status(200).json(res)
})