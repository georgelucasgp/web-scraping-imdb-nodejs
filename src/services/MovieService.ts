import { IMovies } from '../dto/MoviesDTO.js';
import MovieRepository from '../repositories/MovieRepository';

class MovieService {
    private movieRepository: MovieRepository;
    constructor() {
        this.movieRepository = new MovieRepository();
    }

    async create(data: IMovies[]) {
        const movies = await this.movieRepository.create(data);
        return movies;
    }
}

export default MovieService;
