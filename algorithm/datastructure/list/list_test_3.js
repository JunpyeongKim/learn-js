/**
 * Created by 1000938 on 2015. 3. 6..
 */

'use strict';

function crateArr(file) {
    var arr = read(file).split('\n');

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        } else {
            console.log(list.getElement());
        }
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    } else {
        console.log(movie + " is not available.");
    }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();

for (var i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

console.log("Available movies: ");
displayList(movieList);

var name = "jp";
var movie = "Star Wars";

checkOut(name, movie, movieList, customers);

console.log("Customer Rentals: ");
displayList(customers);

console.log("Movies Now Available: ");
displayList(movieList);cd