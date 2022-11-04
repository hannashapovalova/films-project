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
    

    if (filmName != null && filmRate != null && filmName != ' ' && filmRate != ' ' && filmName.length < 50) {
        personalMovieDB.movies[filmName] = filmRate;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.conut < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.conut >= 10 && personalMovieDB.conut < 30) {
    alert('Вы классический зритель');
} else if(personalMovieDB.conut >= 30) {
    alert('Вы киноман');
} else { 
    alert('Произошла ошибка');
}

console.log(personalMovieDB);



  