'use strict';



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const filmNameFirst = prompt('Один из последних просмотренных фильмов?', '');
const filmRateFirst = +prompt('На сколько оцените его?', '');
const filmNameSecond = prompt('Один из последних просмотренных фильмов?', '');
const filmRateSecond = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmNameFirst] = filmRateFirst;
personalMovieDB.movies[filmNameSecond] = filmRateSecond;

console.log(personalMovieDB);



  