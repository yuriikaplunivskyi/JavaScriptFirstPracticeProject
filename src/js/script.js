'use strict';

const numberOfFilms = + prompt('Скільки фільмів Ви уже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутіх фільмів?', ''),
          b = prompt('Як оцінете цей фільм?', '');

    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Переглянуто досить таки мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви типовий глядач");
} else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман!");
} else {
    console.log("Здається виникла помилка");
}

console.log(personalMovieDB); 


