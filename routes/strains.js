const express = require('express')
const { getStrains, 
        getStrain } = require('../controllers/strains')

const Strain = require('../models/Strain')
const router = express.Router()

router 
  .route('/')
  .get(getStrains)


router 
  .route('/:id')
  .get(getStrain)
  
module.exports = router