const express = require('express')
const { getStrains } = require('../controllers/strains')

const Strain = require('../models/Strain')
const router = express.Router()

router 
  .route('/')
  .get(getStrains)