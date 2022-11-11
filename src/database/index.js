// Using ES6 imports
import mongoose from "mongoose";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

mongoose.connect(process.env.DATABASE_URL);

export { mongoose };
