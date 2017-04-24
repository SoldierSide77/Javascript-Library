function newBook(author, title, numberOfPages, publishedDate, series, seriesOrder){   //Constructor function - main prototype to inherit
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.publishedDate = publishedDate;
  this.series = series;
  this.seriesOrder = seriesOrder;
}

var myLibrary = function(){

};

var myNewBook1 = new newBook("John Sandford", "Rules of Prey", 301, new Date("07/24/1989", "Lucas Davenport", 1));
var myNewBook2 = new newBook("John Sandford", "Shadow Prey", 349, new Date("02/28/1990"), "Lucas Davenport", 2);
var myNewBook3 = new newBook("John Sandford", "Eyes of Prey", 441, new Date("10/21/1990"), "Lucas Davenport", 3);
var myNewBook4 = new newBook("Stephen King", "The Gunslinger", 601, new Date("07/24/1983"), "The Dark Tower", 1);
var myNewBook4 = new newBook("Stephen King", "The Drawing of the Three", 541, new Date("03/06/1987"), "The Dark Tower", 2);
var myNewBook4 = new newBook("Stephen King", "Christine", 601, new Date("07/24/1989"), "", 0);


myLibrary.prototype.myArray = new Array();

function addBook(book){   //this function is the same as the function myLibrary.prototype.addBook = function(myNewBook). Don't use this method.
}

myLibrary.prototype.addBook = function(myNewBook){

}

myLibrary.prototype.removeBookByTitle = function(title){

}

myLibrary.prototype.removeBookByAuthor = function(authorName){

}

myLibrary.prototype.getRandomBook = function(){

}

myLibrary.prototype.getBookByTitle = function(title){

}

myLibrary.prototype.getBooksByAuthor = function(authorName){

}

myLibrary.prototype.addBooks = function(books){

}

myLibrary.prototype.getAuthors = function(getAuthors){

}

myLibrary.prototype.getRandomAuthorName = function(){

}

var exampleLibrary = new myLibrary();
