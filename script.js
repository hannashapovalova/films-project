'use strict';



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.conut < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.conut >= 10 && personalMovieDB.conut < 30) {
    alert('Вы классический зритель');
  } else if(personalMovieDB.conut >= 30) {
    alert('Вы киноман');
  } else { 
    alert('Произошла ошибка');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();


  