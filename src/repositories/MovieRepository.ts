import { IMovie } from '../dto/MoviesDTO';
import { MovieModel } from '../models/MovieModel';

class MovieRepository {
    async create(data: IMovie) {
        const movies = await MovieModel.create(data);
        return movies;
    }
}

export default MovieRepository;
