import puppeteer from 'puppeteer';
(async () => {
    const browser = await puppeteer.launch({ headless: true }); // default is true
    const page = await browser.newPage();

    await page.goto('https://www.imdb.com/search/title/?release_date=2022&sort=num_votes,desc&page=2&ref_=adv_nxt', {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0,
    });

    const movies = await page.evaluate(() => {
        const moviesContentList = document.querySelectorAll('div.lister-item-content');

        const moviesList = Array.from(moviesContentList).map((movieContent) => ({
            title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
            description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
            genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
            stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0].innerText,
            votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
            year: movieContent
                .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
                .innerText.replace(/[{()}–-]/g, ''),
        }));
        return moviesList;
    });

    console.log(movies);

    // await browser.close();
})();
