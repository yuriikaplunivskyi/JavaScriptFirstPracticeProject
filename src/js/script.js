/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


let numberOfFilms ;

function start() {
    numberOfFilms = +prompt('Скільки фільмів Ви уже переглянули?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів Ви уже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};






function rememberMyFilm() {
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
}
rememberMyFilm();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Переглянуто досить таки мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Ви типовий глядач");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман!");
    } else {
        console.log("Здається виникла помилка");
    }
}
detectPersonalLevel();

function showMyBD (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyBD (personalMovieDB.privat);



