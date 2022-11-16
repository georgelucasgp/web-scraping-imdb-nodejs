// title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
// description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
// genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
// stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0]
//     .innerText,
// votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
// year: movieContent
//     .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
//     .innerText.replace(/\D/g, '')
//     .trim(),

//     let list = Array.from(movieContentList).map((movieContent) => ({
//       title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
//       description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
//       genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
//       stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0]
//           .innerText,
//       votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
//       year: movieContent
//           .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
//           .innerText.replace(/\D/g, '')
//           .trim(),
//   }));

//       const test = await page.evaluate(() => {

//         const movieContentList = document.querySelectorAll('div.lister-item-content');
//         movieContentList.forEach((movieContent) => {
//             movies.push({
//                 title: movieContent.querySelectorAll('h3.lister-item-header a')[0].innerText,
//                 description: movieContent.querySelectorAll('p:nth-child(4)')[0].innerText,
//                 genres: movieContent.querySelectorAll('p:nth-child(2) > span.genre')[0].innerText,
//                 stars: movieContent.querySelectorAll('div > div.inline-block.ratings-imdb-rating > strong')[0]
//                     .innerText,
//                 votes: movieContent.querySelectorAll('p.sort-num_votes-visible > span:nth-child(2)')[0].innerText,
//                 year: movieContent
//                     .querySelectorAll(' h3 > span.lister-item-year.text-muted.unbold')[0]
//                     .innerText.replace(/\D/g, '')
//                     .trim(),
//             });
//         });
//     });

//     console.log(movies);
//     console.log(test);
