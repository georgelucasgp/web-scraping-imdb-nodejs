import { IMovies } from '../dto/MoviesDTO';
import { MovieModel } from '../models/MovieModel';

class MovieRepository {
    async create(data: IMovies[]) {
        const movies = await MovieModel.create(data);
        return movies;
    }
}

export default MovieRepository;
