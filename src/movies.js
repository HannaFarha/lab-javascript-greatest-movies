// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const v =moviesArray.map(function(material) { 
        return material.director; 
      }); return v}
     
function howManyMovies(moviesArray) {
        

    filteredMovies = moviesArray.filter(function(eachMovie) {
        if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')) {
            return true 
        } 
    });
    return filteredMovies.length}

function scoresAverage(moviesArray) { 
    if (!moviesArray.length) {
        return 0;
      }
    
      let totalAverage = moviesArray.reduce((a, b) => {
       
        if (b.score) {
          return a + b.score;
        } else {
          return a;
        }
      }, 0);
    
      return Number((totalAverage / moviesArray.length).toFixed(2));}


    //console.log(movies[1].score)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const v= moviesArray.filter(function(a){ return a.genre.includes("Drama")});

return scoresAverage(v);}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {  
    let moviesArr = JSON.parse(JSON.stringify(moviesArray)); 
    moviesArr.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (b.year > a.year) {
        return -1;
      } else {
        if (a.title > b.title) {
          return 1;
        } else if (b.title > a.title) {
          return -1;
        }
        return 0;
      }
    });
  
    return moviesArr; // return the sorted array
  }




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const moviesArr = JSON.parse(JSON.stringify(moviesArray)); 
sortedMoviesArr = moviesArr
  .sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  .map(eachMovie => eachMovie.title)
  .slice(0, 20);

return sortedMoviesArr // return the new array
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
