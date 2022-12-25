import { IMovies } from '../dto/MoviesDTO';

export default function parseMoviesObject(movieContentNondeList: any) {
    const resultMoviesObject = Array.from(movieContentNondeList).map<IMovies>((movieContent: any) => ({
        title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
        description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
        genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
        stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0].innerText,
        votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
        year: movieContent
            .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
            .innerText.replace(/\D/g, '')
            .trim(),
    }));

    return resultMoviesObject;
}
