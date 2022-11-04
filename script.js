'use strict';



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const filmName = prompt('Один из последних просмотренных фильмов?', '');
    const filmRate = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[filmName] = filmRate;
}

console.log(personalMovieDB);



  