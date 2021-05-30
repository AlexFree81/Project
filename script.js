"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//console.log(numberOfFilms);

/*
const personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = {};
personalMovieDB.private = false;*/


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};


const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцениваите его?', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцениваите его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
