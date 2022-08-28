'use strict';

const numberOfFilms = + prompt('Скільки фільмів Ви уже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутіх фільмів?', ''),
      b = prompt('Як оцінете цей фільм?', ''),
      c = prompt('Один з останніх переглянутіх фільмів?', ''),
      d = prompt('Як оцінете цей фільм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 


