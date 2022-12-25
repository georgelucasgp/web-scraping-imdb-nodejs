import puppeteer from 'puppeteer';
import { IMovies } from '../dto/MoviesDTO';

import MovieService from './MovieService';
// import parseMoviesObject from './parseMoviesObject';

const MOVIES_NUMBER_IN_ARRAY = 150;
const movies: IMovies[] = [];
const url = 'https://www.imdb.com/search/title/?release_date=2022&sort=num_votes,desc&page=2&ref_=adv_nxt';

export default async function execute() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    while (movies.length < MOVIES_NUMBER_IN_ARRAY) {
        const resultMoviesList = await page.evaluate(() => {
            const movieContentNondeList = document.querySelectorAll('div.lister-item-content');
            const resultMoviesObject = Array.from(movieContentNondeList).map<IMovies>((movieContent: any) => ({
                title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
                description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
                genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
                stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0]
                    .innerText,
                votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
                year: movieContent
                    .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
                    .innerText.replace(/\D/g, '')
                    .trim(),
            }));

            return resultMoviesObject;
        });

        movies.push(...resultMoviesList);

        await page.waitForSelector('#main > div > div.desc > a.lister-page-next.next-page');
        await page.click('#main > div > div.desc > a.lister-page-next.next-page');
    }

    const movieService = new MovieService();
    await movieService.create(movies);
}
