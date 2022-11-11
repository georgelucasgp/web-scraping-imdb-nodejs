import { mongoose } from "../database";

const MovieSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    genres: String,
    stars: String,
    votes: String,
    year: String,
  },
  {
    versionKey: false,
  }
);

export const MovieModel = mongoose.model("movies", MovieSchema);
