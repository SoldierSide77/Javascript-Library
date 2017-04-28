 function newBook(author, title, numberOfPages, publishedDate, series, seriesOrder){   //Constructor function
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.publishedDate = publishedDate;
  this.series = series;
  this.seriesOrder = seriesOrder;
}

var myLibrary = function(){};

//my book objects
var myNewBook1 = new newBook("John Sandford", "Shock Wave", 427, new Date("01/26/2009"), "Virgil Flowers", 3);
var myNewBook2  = new newBook("William Golding", "Lord of the Flies", 443, new Date("10/04/1959"), "", 0);
var myNewBook3 = new newBook("John Sandford", "Heat Lightning", 361, new Date("10/02/2007"), "Virgil Flowers", 1);
var myNewBook4 = new newBook("John Sandford", "Bad Blood", 396, new Date("12/16/2008"), "Virgil Flowers", 2);
var myNewBook5 = new newBook("Stephen King", "The Gunslinger", 601, new Date("07/24/1983"), "The Dark Tower", 1);
var myNewBook6  = new newBook("Stephen King", "The Waste Lands", 721, new Date("03/04/1992"), "The Dark Tower", 3);
var myNewBook7  = new newBook("Chuck Palahniuk", "Fight Club", 426, new Date("08/28/1996"), "", 0);
var myNewBook8 = new newBook("Stephen King", "Wizard and Glass", 787, new Date("11/04/1997"), "The Dark Tower", 4);
var myNewBook9 = new newBook("Stephen King", "The Drawing of the Three", 541, new Date("03/06/1987"), "The Dark Tower", 2);
var myNewBook10  = new newBook("J.R.R Tolkein", "The Hobbit", 640, new Date("01/09/1951"), "", 0);

//Instance of my library object, using the myLibrary prototype.
var testLibrary = new myLibrary();

myLibrary.prototype.myArray = [];

myLibrary.prototype.myBookShelf = [];
testLibrary.myBookShelf = [myNewBook1, myNewBook2, myNewBook3, myNewBook4, myNewBook5, myNewBook6, myNewBook7, myNewBook8, myNewBook9, myNewBook10];
//console.log(testLibrary.myBookShelf);

// myLibrary.prototype.bookshelf = [];
//
//
// //Purpose: add all books in the library to myArray
// myLibrary.prototype.createBookshelf = function(){
// debugger;
//   //  this.bookshelf.push(myNewBook1);
// var bookshelf=[];
// for(int x = 0; x < ; x++)
// {
//   this.push(this.myNewBook+x)
// }

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
// testLibrary.addBook(myNewBook1);


//Purpose: Remove book from from the books array by its title.
//Return: boolean true if the book(s) were removed, false if no books match.
myLibrary.prototype.removeBookByTitle = function(title){
  var intRemoved = false;
  if(this.myArray.length > 0){
    for(var i = 0; i < this.myArray.length; i++){
      if(this.myArray[i].title.toLowerCase() == title.toLowerCase()){
        this.myArray.splice([i],1);
        intRemoved = true;
      }
      if(intRemoved == true){
        console.log(title + " removed from the library.");
        return true;
      } else {
        console.log("Error: " + title + " not found in library.");
        return false;
      }
    }
  } else { //array was empty; no match possible.
    console.log("Error: " + title + " not found in library.");
    return false;
  }
  //An alternate way to code this function, that defaults to "title not found" and returns false if the searched title wasn't located.
  // var intRemoved = false;
  // if(this.myArray.length > 0){
  //   for(var i = 0; i < this.myArray.length; i++){
  //     if(this.myArray[i].title == title){
  //       this.myArray.splice([i],1);
  //       console.log(title + " removed from the library.");
  //       return true;
  //     }
  //   }
  // }
  // console.log("Error: " + title + " not found in library.");
  // return false;
}
//testLibrary.removeBookByTitle("prey");


//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match.
myLibrary.prototype.removeBookByAuthor = function(authorName){
  var intRemoved = 0;
  if(this.myArray.length > 0){
    for(var i = 0; i < this.myArray.length; i++){
      console.log(this.myArray[i].title);
      if(this.myArray[i].author.toLowerCase() == authorName.toLowerCase()){
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
//testLibrary.removeBookByAuthor("king")


//Purpose: Return a random book object from your books array.
//Return: book object if you find a book, null if there are no books.
myLibrary.prototype.getRandomBook = function(){
  if(testLibrary.myArray.length > 0){
    var myRandom = Math.floor(Math.random() * testLibrary.myArray.length);
    return testLibrary.myArray[myRandom];
  }else {
    return null;
  }
}
//testLibrary.getRandomBook();


//Purpose: Return all books that completely or partially matches the string title passed into the function.
//Return: array of book objects if you find books with matching titles, empty array if no books are found.
myLibrary.prototype.getBookByTitle = function(title){
  var titleArray = [];
  for(var i = 0; i < this.myArray.length; i++){
    var searchTitle = this.myArray[i].title;
    var regexpTitle = new RegExp(title.toLowerCase());
    if(regexpTitle.test(searchTitle.toLowerCase()) == true){
      titleArray.push(this.myArray[i]);
    }
  }
  return titleArray;
}
//testLibrary.getBookByTitle("prey");


//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
//Return: array of books if you find books with matching authors, empty array if no books match.
myLibrary.prototype.getBooksByAuthor = function(authorName){
  var authorArray = [];
  for(var i = 0; i < this.myArray.length; i++){
    var regExpAuthor = new RegExp(authorName.toLowerCase());
    if(regExpAuthor.test(this.myArray[i].author.toLowerCase()) == true){
      authorArray.push(this.myArray[i]);
    }
  }
  return authorArray;
}
//testLibrary.getBooksByAuthor("sandford");


//Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
//Return: number - number of books successfully added, 0 if no books were added.
myLibrary.prototype.addBooks = function(books){
  for(var i = 0; i < books.length; i++){
    this.myArray.push(books[i]);
  }
  if(this.myArray.length > 0){
    console.log(this.myArray.length + " books added to library.");
    return this.myArray.length;
  } else {
    console.log("Error: 0 books added to library. Please check your request and try again.");
    return 0;
  }
}

// testLibrary.addBooks([myNewBook1, myNewBook2, myNewBook3, myNewBook4, myNewBook5, myNewBook6, myNewBook7, myNewBook8, myNewBook9, myNewBook10, myNewBook11, myNewBook12, myNewBook13,
// myNewBook14, myNewBook15, myNewBook16, myNewBook17, myNewBook18, myNewBook19, myNewBook20, myNewBook21, myNewBook21]);
testLibrary.addBooks(this.myBookShelf);

//Purpose: Find the distinct authors’ names from all books in your library.
//Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist.
myLibrary.prototype.getAuthors = function(){
  var authorsArray = [];
  var blnAuthorMatch = false;
  for(var i = 0; i < this.myArray.length; i++){   //loop through each book in the library to get its author.
    blnAuthorMatch = false;
    if(authorsArray.length > 0){
      for(var j = 0; j < authorsArray.length; j++){   //loop through all the author names that have already been added.
        if(authorsArray[j].toLowerCase() == this.myArray[i].author.toLowerCase()){   //check if the author name would be a duplicate.
          blnAuthorMatch = true;  //a duplicate was found. Don't add this author.
        }
      }
      if(blnAuthorMatch == false){
        authorsArray.push(this.myArray[i].author);  //if the author isn't already in the list, add the author.
      }
    } else {
    authorsArray.push(this.myArray[i].author);  //if the list of authors is empty, add the author.
    }
  }
  if(authorsArray.length > 0){
    console.log(authorsArray.length + " authors found in the library.");
  }
  return authorsArray;
}


//Purpose: Retrieves a random author name from your books collection.
//Return: string author name, null if no books exist.
myLibrary.prototype.getRandomAuthorName = function(){
  var authorsArray1 = [];
  authorsArray1 = this.getAuthors();  //use the getAuthors function to get the names of all authors in the library.

  if(testLibrary.myArray.length > 0){
    var myRandom = Math.floor(Math.random() * authorsArray1.length);
    return authorsArray1[myRandom];
  }else {
    return null;
  }
}

//Extra credit ******************************************************************************************************

//Purpose: Retrieves a distinct list of the names of all series in the the library.
//Return: array of strings the names of all distinct series, empty array if no books exist or if no series exist.
myLibrary.prototype.getSeries = function(){
  var seriesArray = [];
  var blnSeriesMatch = false;
  for(var i = 0; i < this.myArray.length; i++){   //loop through each book in the library to get its series.
    blnSeriesMatch = false;
    if(seriesArray.length > 0){
      for(var j = 0; j < seriesArray.length; j++){  //loop through all the series names that have already been added.
        console.log(seriesArray[j]);
        console.log(this.myArray[i].series);
        console.log(seriesArray[j].toLowerCase() == this.myArray[i].series.toLowerCase());
        if(seriesArray[j].toLowerCase() == this.myArray[i].series.toLowerCase()){   //check if the series name would be a duplicate.
          blnSeriesMatch = true;  //a duplicate was found. Don't add this series.
          console.log("blnSeriesMatch: " + blnSeriesMatch);
        }
      }
      if(blnSeriesMatch == false){  //don't add if series name is "" or was already added.
        if(this.myArray[i].series != ""){
          seriesArray.push(this.myArray[i].series);   //if the series isn't already in the list, add the author.
        }
      }
    } else {
      if(this.myArray[i].series != ""){   //don't add if series name is ""
        seriesArray.push(this.myArray[i].series);   //if the list of series is empty, add the author.
      }
    }
  }
  if(seriesArray.length > 0){
    console.log(seriesArray.length + " series found in the library.");
  }
  return seriesArray;
}


//Purpose: Retrieves all books in the series name passed into the function, in series order.
//Return: array of book objects, empty array if series doesn't exist.
myLibrary.prototype.getSeriesInOrder = function(seriesName){
    var seriesArray = [];
    // var orderArray = [];

    if(testLibrary.myArray.length > 0){
      for(var i = 0; i < this.myArray.length; i++){
        if(this.myArray[i].series == seriesName){
          seriesArray.push(this.myArray[i]);
          // orderArray.push(this.myArray[i].seriesOrder);
        }
      }
      seriesArray.sort(function(a, b){
        return a.seriesOrder - b.seriesOrder;
      });
      console.log(seriesArray);
    }
    for(var j = 0; j < seriesArray.length; j++){
      console.log(seriesArray[j].seriesOrder + ". " + seriesArray[j].title);
    }
    return seriesArray;
}

// testLibrary.getSeriesInOrder("The Dark Tower");
