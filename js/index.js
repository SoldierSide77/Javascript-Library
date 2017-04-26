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
//Instance of my library object, using the myLibrary prototype.
var testLibrary = new myLibrary();

var myNewBook1 = new newBook("John Sandford", "Rules of Prey", 301, new Date("07/24/1989"), "Lucas Davenport", 1);
var myNewBook2 = new newBook("John Sandford", "Shadow Prey", 349, new Date("02/28/1990"), "Lucas Davenport", 2);
var myNewBook3 = new newBook("John Sandford", "Eyes of Prey", 441, new Date("10/21/1990"), "Lucas Davenport", 3);
var myNewBook4 = new newBook("John Sandford", "Heat Lightning", 361, new Date("10/02/2007"), "Virgil Flowers", 1);
var myNewBook5 = new newBook("John Sandford", "Bad Blood", 396, new Date("12/16/2008"), "Virgil Flowers", 2);
var myNewBook6 = new newBook("John Sandford", "Shock Wave", 427, new Date("01/26/2009"), "Virgil Flowers", 3);
var myNewBook7 = new newBook("Stephen King", "The Gunslinger", 601, new Date("07/24/1983"), "The Dark Tower", 1);
var myNewBook8 = new newBook("Stephen King", "The Drawing of the Three", 541, new Date("03/06/1987"), "The Dark Tower", 2);
var myNewBook9 = new newBook("Stephen King", "Wizard and Glass", 787, new Date("11/04/1997"), "The Dark Tower", 4);
var myNewBook10 = new newBook("Stephen King", "Wolves of the Calla", 569, new Date("11/04/2005"), "The Dark Tower", 5);
var myNewBook11 = new newBook("Stephen King", "The Waste Lands", 721, new Date("03/04/1992"), "The Dark Tower", 3);
var myNewBook12 = new newBook("Stephen King", "Song of Susannah", 647, new Date("08/14/2006"), "The Dark Tower", 6);
var myNewBook13 = new newBook("Stephen King", "The Wind Through the Keyhole", 335, new Date("05/06/2012"), "The Dark Tower", 8);
var myNewBook14 = new newBook("Stephen King", "Christine", 601, new Date("07/24/1989"), "", 0);
var myNewBook15 = new newBook("Chuck Palahniuk", "Fight Club", 426, new Date("08/28/1996"), "", 0);
var myNewBook16 = new newBook("James Rollins", "The Seventh Plague", 426, new Date("12/13/2016"), "Sigma Force", 12);
var myNewBook17 = new newBook("Stephen King", "The Dark Tower", 876, new Date("09/30/2007"), "The Dark Tower", 7);

myLibrary.prototype.myArray = new Array();

//Purpose: Add a book object to your books array.
//Return: boolean true if it is not already added, false if it is already added.
myLibrary.prototype.addBook = function(myNewBook){
    if(this.myArray.length == 0){   //array is empty; add the book.
        this.myArray.push(myNewBook);
        console.log(myNewBook.title + " has been added to the library.");
        return true;
    } else {
      var blnMatch = false;
      for(var i = 0; i < this.myArray.length; i++){
        if(this.myArray[i].title == myNewBook.title){
          blnMatch = true;
        }
      }
      if(blnMatch == true){   //the title has already been added. Abort.
        console.log("Error: " + myNewBook.title + " already exists in the library. Title not added.");
        return false;
      } else {  //title has not yet been added; add the book.
        this.myArray.push(myNewBook);
        console.log(myNewBook.title + " has been added to the library.");
        return true;
      }
    }
}


//Purpose: Remove book from from the books array by its title.
//Return: boolean true if the book(s) were removed, false if no books match.
myLibrary.prototype.removeBookByTitle = function(title){
  var intRemoved = 0;
  if(this.myArray.length > 0){
    for(var i = 0; i < this.myArray.length; i++){
      if(this.myArray[i].title == title){
        this.myArray.splice([i],1);
        intRemoved++;

//        console.log(title + " removed from library.");
//        return true;
      }
      // else {
      //   console.log("Error: " + title + " not found in library.");
      //   return false;
      // }
      if(intRemoved == true){

      } else {

      }



    }
  } else { //array was empty; no match possible.
    console.log("Error: " + title + " not found in library.");
    return false;
  }
}


//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match.
myLibrary.prototype.removeBookByAuthor = function(authorName){
  var intRemoved = 0;
  if(this.myArray.length > 0){
    for(var i = 0; i < this.myArray.length; i++){
      console.log(this.myArray[i].title);
      if(this.myArray[i].author == authorName){
        this.myArray.splice([i],1);
        intRemoved++;
        i--;
      }
    }
  }

  if (intRemoved > 0){
    console.log(intRemoved + " books by " + authorName + " removed from library.");
    return true;
  } else {
    console.log("Error: No books found by " + authorName + " in library.");
    return false;
  }
}


//Purpose: Return a random book object from your books array.
//Return: book object if you find a book, null if there are no books.
myLibrary.prototype.getRandomBook = function(){

}


//Purpose: Return all books that completely or partially matches the string title passed into the function.
//Return: array of book objects if you find books with matching titles, empty array if no books are found.
myLibrary.prototype.getBookByTitle = function(title){

}


//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
//Return: array of books if you find books with match authors, empty array if no books match.
myLibrary.prototype.getBooksByAuthor = function(authorName){

}


//Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
//Return: number number of books successfully added, 0 if no books were added.
myLibrary.prototype.addBooks = function(books){

}


//Purpose: Find the distinct authors’ names from all books in your library.
//Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist.
myLibrary.prototype.getAuthors = function(getAuthors){

}


//Purpose: Retrieves a random author name from your books collection.
//Return: string author name, null if no books exist.
myLibrary.prototype.getRandomAuthorName = function(){

}
