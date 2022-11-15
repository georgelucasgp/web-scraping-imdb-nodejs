import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();

    await page.goto('https://www.imdb.com/search/title/?release_date=2022&sort=num_votes,desc&page=2&ref_=adv_nxt', {
        waitUntil: 'domcontentloaded',
    });
    let movies = [];
    while (movies.length < 500) {
        await page.waitForTimeout(3000);
        const resultEvaluateMovies = await page.evaluate(() => {
            const movieContentList = document.querySelectorAll('div.lister-item-content');

            const resultArrayMovies = Array.from(movieContentList).map((movieContent) => ({
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

            return resultArrayMovies;
        });

        movies.push(...resultEvaluateMovies);

        await page.waitForSelector('#main > div > div.desc > a.lister-page-next.next-page');
        await page.click('#main > div > div.desc > a.lister-page-next.next-page');
    }

    console.log(movies);
    console.log(movies.length);

    // await browser.close();
})();