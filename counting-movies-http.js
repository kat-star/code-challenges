// Counting Movies
// Write an HTTP GET to retrieve information from a movie database concerning how many movies have a particular string in their title
// input: search term string
// output: integer value found in the total field in the returned JSON object

const https = require('https');

function getNumberOfMovies(substr) {
  https.get(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (resp) => {
      let data = "";

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        console.log(JSON.parse(data).total);
      });
    }
  ).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}
