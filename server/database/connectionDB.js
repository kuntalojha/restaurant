import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to the MongoDB database using the connection string from the
 * `MONGO_URL` environment variable.
 *
 * If the connection is successful, it logs a success message to the console.
 * If the connection fails, it logs an error message to the console and
 * terminates the process with a non-zero exit code.
 *
 * @function connectDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    // Connect to the MongoDB database using the connection string from the
    // `MONGO_URL` environment variable.
    await mongoose.connect(process.env.MONGO_URL);

    // Log a success message to the console if the connection is successful.
    console.log('MongoDB database Connected.');
  } catch (error) {
    // Log an error message to the console if the connection fails.
    console.error('Database connection error:', error);
    // Terminate the process with a non-zero exit code if the connection fails.
    process.exit(1);
  }
};

export default connectDB;
