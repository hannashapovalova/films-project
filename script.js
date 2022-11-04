'use strict';



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



const filmNameSecond = prompt('Один из последних просмотренных фильмов?', '');
const filmRateSecond = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[filmNameSecond] = filmRateSecond;


for (let i = 0; i < 2; i++) {
    const filmNameFirst = prompt('Один из последних просмотренных фильмов?', '');
    const filmRateFirst = +prompt('На сколько оцените его?', '');
    personalMovieDB.movies[filmNameFirst] = filmRateFirst;

}

console.log(personalMovieDB);



  