const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  console.table(`MongoDB Connected ${conn.connection.host}`
  .cyan.inverse)
}

module.exports = connectDB