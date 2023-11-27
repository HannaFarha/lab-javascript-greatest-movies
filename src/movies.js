// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const v =moviesArray.map(function(material) { 
        return material.director; 
      }); return v}
     
   
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count =0;
    var myArr=moviesArray.filter((elm,g,a)=>{
        if (elm.genre.indexOf("Drama") && elm.director=="Steven Spielberg"){return true }
       else {return false}
    });console.log(myArr);
    
if (moviesArray.length==0 || moviesArray.director !== "Steven Spielberg" ){return 0}
}
console.log(howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
   
    if (moviesArray.length==0 ){return 0}
    return  moviesArray.reduce((a, b) =>  a.score * b.score ,0);
    }console.log(scoresAverage(movies))
    //console.log(movies[1].score)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
