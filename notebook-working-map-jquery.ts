// import puppeteer from 'puppeteer';
// import MovieService from './services/MovieService';
// const movies: any = [];
// const url = 'https://www.imdb.com/search/title/?release_date=2022&sort=num_votes,desc&page=2&ref_=adv_nxt';

// async function execute() {
//     const browser = await puppeteer.launch({ headless: false }); // default is true
//     const page = await browser.newPage();

//     await page.goto(url, {
//         waitUntil: 'domcontentloaded',
//     });

//     while (movies.length < 150) {
//         await page.waitForTimeout(3000);
//         const resultEvaluateMovies = await page.evaluate(() => {
//             const movieContentList = $('div.lister-item-content');

//             const resultArrayMovies = Array.from(movieContentList).map((movieContent) => ({
//                 title: $(movieContent).find('h3.lister-item-header a').text(),
//                 description: $(movieContent).find('p:nth-child(4)').text(),
//                 genres: $(movieContent).find('p:nth-child(2) > span.genre').text(),
//                 stars: $(movieContent).find('div > div.inline-block.ratings-imdb-rating > strong').text(),
//                 votes: $(movieContent).find('p.sort-num_votes-visible > span:nth-child(2)').text(),
//                 year: $(movieContent)
//                     .find('h3 > span.lister-item-year.text-muted.unbold')
//                     .text()
//                     .replace(/\D/g, '')
//                     .trim(),
//             }));

//             return resultArrayMovies;
//         });

//         movies.push(...resultEvaluateMovies);

//         await page.waitForSelector('#main > div > div.desc > a.lister-page-next.next-page');
//         await page.click('#main > div > div.desc > a.lister-page-next.next-page');
//         console.log(movies);
//     }

//     const moviesService = new MovieService();
//     await moviesService.create(movies);

//     // await browser.close();
// }
// execute();
