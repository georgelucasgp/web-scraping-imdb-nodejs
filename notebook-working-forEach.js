import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // default is true
    const page = await browser.newPage();

    await page.goto('https://www.imdb.com/search/title/?release_date=2022&sort=num_votes,desc&page=2&ref_=adv_nxt', {
        waitUntil: 'domcontentloaded',
    });

    let movies = [];

    while (movies.length < 200) {
        await page.waitForTimeout(3000);
        const title = await page.$$eval('h3.lister-item-header a', (links) => links.map((link) => link.innerText));
        const description = await page.$$eval('p:nth-child(4)', (links) => links.map((link) => link.innerText));
        const genres = await page.$$eval('p:nth-child(2) > span.genre', (links) => links.map((link) => link.innerText));
        const stars = await page.$$eval('div > div.inline-block.ratings-imdb-rating > strong', (links) =>
            links.map((link) => link.innerText)
        );
        const votes = await page.$$eval('p.sort-num_votes-visible > span:nth-child(2)', (links) =>
            links.map((link) => link.innerText)
        );
        const year = await page.$$eval('h3 > span.lister-item-year.text-muted.unbold', (links) =>
            links.map((link) => link.innerText.replace(/\D/g, '').trim())
        );
        for (let i in title) {
            movies.push({
                title: title[i],
                description: description[i],
                genres: genres[i],
                stars: stars[i],
                votes: votes[i],
                year: year[i],
            });
        }
        await page.waitForSelector('#main > div > div.desc > a.lister-page-next.next-page');
        await page.click('#main > div > div.desc > a.lister-page-next.next-page');
    }

    console.log(movies);
    console.log(movies.length);

    // await browser.close();
})();
