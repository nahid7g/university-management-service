/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
  } catch (error) {
    // console.error(error)
  }
}

main()

app.listen(config.port, () => {
  // console.log(`Server is running on port ${config.port}`)
})
