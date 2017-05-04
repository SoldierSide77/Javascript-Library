var myLibrary = function(){};

myLibrary.prototype.init = function(){  //anything in init runs on page load
  this.$jumbo=$(".jumbotron ul"); //global variable to refer to the <UL> element in the jumbotron.
  this._bindEvents();
};

//Instance of my library object, using the myLibrary prototype.
var DansLibrary = new myLibrary();

myLibrary.prototype._bindEvents = function(){
  //  $(.addBook).on("click", $.proxy(this._addBook, this));  //button removed
  $("#addButton").on("click", $.proxy(this._addMultiple, this));  //the lines below need to match the id's of the buttons, like this one does.
  $("#btn-removeBookByTitle").on("click", $.proxy(this._removeBookByTitle, this));
  $("#btn-removeBookByAuthor").on("click", $.proxy(this._removeBookByAuthor, this));
  $("#btn-getRandomBook").on("click", $.proxy(this._getRandomBook, this));
  $("#btn-getBookByTitle").on("click", $.proxy(this._getBookByTitle, this));
  $("#btn-getBooksByAuthor").on("click", $.proxy(this._getBooksByAuthor, this));
  $("#btn-addBooks").on("click", $.proxy(this._addBooks, this));
  $("#btn-getAuthors").on("click", $.proxy(this._getAuthors, this));
  $("#btn-getRandomAuthorName").on("click", $.proxy(this._getRandomAuthorName, this));
  $("#btn-getSeries").on("click", $.proxy(this._getSeries, this));
  $("#btn-getSeriesInOrder").on("click", $.proxy(this._getSeriesInOrder, this));
};


//Add multiple books. Inject dynamic inputs.
myLibrary.prototype._addMultiple = function(){
  intBooks++;
  var bookList=$("#addMulti>ul");  //assign bookList to refer to the list of books in the Add New Book(s) section.
  //add inputs for each additional book they want to add.
  bookList.append('<li>'+
  '<label for="title" class="lMargin2">Title:</label><input type="text" id="titleIn" class="form-control long-input">'+
  '<label for="author">Author:</label><input type="text" id="authorIn" class="form-control">'+
  '<label for="pages">Number of Pages:</label><input type="text" id="pagesIn" class="form-control short-input">'+
  '<label for="Date">Published Date:</label><input type="text" id="dateIn" class="form-control short-md-input"></li>');
}

function newBook(author, title, numberOfPages, publishedDate, series, seriesOrder){
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.publishedDate = publishedDate;
  this.series = series;
  this.seriesOrder = seriesOrder;
}

//my book objects
var myNewBook1 = new newBook("John Sandford", "Shock Wave", 427, new Date("01/26/2009"), "Virgil Flowers", 3);
var myNewBook2 = new newBook("William Golding", "Lord of the Flies", 443, new Date("10/04/1959"), "", 0);
var myNewBook3 = new newBook("John Sandford", "Heat Lightning", 361, new Date("10/02/2007"), "Virgil Flowers", 1);
var myNewBook4 = new newBook("John Sandford", "Bad Blood", 396, new Date("12/16/2008"), "Virgil Flowers", 2);
var myNewBook5 = new newBook("Stephen King", "The Gunslinger", 601, new Date("07/24/1983"), "The Dark Tower", 1);
var myNewBook6 = new newBook("Stephen King", "The Waste Lands", 721, new Date("03/04/1992"), "The Dark Tower", 3);
var myNewBook7 = new newBook("Chuck Palahniuk", "Fight Club", 426, new Date("08/28/1996"), "", 0);
var myNewBook8 = new newBook("Stephen King", "Wizard and Glass", 787, new Date("11/04/1997"), "The Dark Tower", 4);
var myNewBook9 = new newBook("Stephen King", "The Drawing of the Three", 541, new Date("03/06/1987"), "The Dark Tower", 2);
var myNewBook10 = new newBook("J.R.R Tolkien", "The Hobbit", 640, new Date("01/09/1951"), "", 0);

//Create a global counter to keep track of how many times the user has clicked addButton.
var intBooks = 0;

myLibrary.prototype.myArray = [];

//Create a bookshelf that contains all the books that exist.
myLibrary.prototype.myBookShelf = [myNewBook1, myNewBook2, myNewBook3, myNewBook4, myNewBook5, myNewBook6, myNewBook7, myNewBook8, myNewBook9, myNewBook10];

//Purpose: Add a book object to your books array.
//Return: boolean true if it is not already added, false if it is already added.
//Call like:    DansLibrary.addBook(myNewBook1);
myLibrary.prototype._addBook = function(myNewBook){
  var display=$(".jumbotron ul>li");

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
//Call like:    DansLibrary.removeBookByTitle("Shock Wave");
myLibrary.prototype._removeBookByTitle = function(title){
  var display=$(".jumbotron ul>li");  //assign 'display' to refer to the list of titles in the jumbotron.
  var title=$("#lowerInput").val();
  // var intRemoved = false;

  for(var i = 0; i < this.myArray.length; i++){
    if(this.myArray[i].title.toLowerCase() == title.toLowerCase()){
      display[i].remove();  //remove the passed title from the jumbotron.
      this.myArray.splice([i],1); //remove the passed title from my library object.
    }
  }
  this.myArray; //return localStorage later - change this to the name of your localstorage object.
}


//Purpose: Remove a specific book from your books array by the author name.
//Return: boolean true if the book(s) were removed, false if no books match.
//Call like:    DansLibrary.removeBookByAuthor("king");
myLibrary.prototype._removeBookByAuthor = function(authorName){
  var intRemoved = 0;
  if(this.myArray.length > 0){
    for(var i = 0; i < this.myArray.length; i++){
      if(this.myArray[i].author.toLowerCase() == authorName.toLowerCase()){
        this.myArray.splice([i],1);
        intRemoved++;
        i--;    //when removing books, array.length decreases. Decrease i to compensate.
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
//Call like:    DansLibrary.getRandomBook();
myLibrary.prototype._getRandomBook = function(){
  if(this.myArray.length > 0){
    var myRandom = Math.floor(Math.random() * this.myArray.length);
    return this.myArray[myRandom];
  }else {
    return null;
  }
}


//Purpose: Return all books that completely or partially matches the string title passed into the function.
//Return: array of book objects if you find books with matching titles, empty array if no books are found.
//call like:    DansLibrary.getBookByTitle("the");
myLibrary.prototype._getBookByTitle = function(title){
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


//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed to the function.
//Return: array of books if you find books with matching authors, empty array if no books match.
//Call like:    DansLibrary.getBooksByAuthor("sandford");
myLibrary.prototype._getBooksByAuthor = function(authorName){
  var authorArray = [];
  for(var i = 0; i < this.myArray.length; i++){
    var regExpAuthor = new RegExp(authorName.toLowerCase());
    if(regExpAuthor.test(this.myArray[i].author.toLowerCase()) == true){
      authorArray.push(this.myArray[i]);
    }
  }
  return authorArray;
}



//Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
//Return: number - number of books successfully added, 0 if no books were added.
// Call like:   DansLibrary.addBooks(DansLibrary.myBookShelf);
myLibrary.prototype._addBooks = function(books){
  var bookToAdd = this._getBooksToAdd();

  for(var i = 0; i<bookToAdd.length; i++){
    this._addbook()
  }


  var i = this.myArray.length;
  this.myArray = this.myArray.concat(books);  //add array myBookshelf to this.myArray
  var j = this.myArray.length;
  return j - i;   //return the number of books added.
}



//Get the values of the book the user wants to add and verify the data is valid.
myLibrary.prototype._getBooksToAdd = function(){
  var booksToAdd = [];

  $.each($("#addMultiList>li>input"), function(Index, val){
      var bookProperty =$(this).val();
      if(bookProperty != NaN && bookProperty ==""){
        booksToAdd.push(bookProperty);
      }
  });
  return booksToAdd;
}


//Purpose: Find the distinct authors’ names from all books in your library.
//Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist.
//Call like:    DansLibrary.getAuthors();
myLibrary.prototype._getAuthors = function(){
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


//Purpose: Retrieves a random author name from your books collection. Uses getAuthors function to retrieve the distint list of authors.
//Return: string author name, null if no books exist.
//Call like: DansLibrary.getRandomAuthorName();
myLibrary.prototype._getRandomAuthorName = function(){
  var authorsArray1 = [];
  authorsArray1 = this.getAuthors();  //use the getAuthors function to get the names of all authors in the library.

  if(DansLibrary.myArray.length > 0){
    var myRandom = Math.floor(Math.random() * authorsArray1.length);
    return authorsArray1[myRandom];
  }else {
    return null;
  }
}

//Extra credit ******************************************************************************************************

//Purpose: Retrieves a distinct list of the names of all series in the the library.
//Return: array of strings - the names of all distinct series, empty array if no books exist or if no series exist.
//Call like: DansLibrary.getSeries();
myLibrary.prototype._getSeries = function(){
  var seriesArray = [];
  var blnSeriesMatch = false;
  for(var i = 0; i < this.myArray.length; i++){   //loop through each book in the library to get its series.
    blnSeriesMatch = false;
    if(seriesArray.length > 0){
      for(var j = 0; j < seriesArray.length; j++){  //loop through all the series names that have already been added.
        if(seriesArray[j].toLowerCase() == this.myArray[i].series.toLowerCase()){   //check if the series name would be a duplicate.
          blnSeriesMatch = true;  //a duplicate was found. Don't add this series.
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
//Call like:    DansLibrary.getSeriesInOrder("The Dark Tower");
myLibrary.prototype._getSeriesInOrder = function(seriesName){
    var seriesArray = [];

    if(DansLibrary.myArray.length > 0){
      for(var i = 0; i < this.myArray.length; i++){
        if(this.myArray[i].series == seriesName){
          seriesArray.push(this.myArray[i]);
        }
      }
      seriesArray.sort(function(a, b){
        return a.seriesOrder - b.seriesOrder;
      });
    }
    for(var j = 0; j < seriesArray.length; j++){
      console.log(seriesArray[j].seriesOrder + ". " + seriesArray[j].title);
    }
    return seriesArray;
}


//Run the init function on load;
DansLibrary.init();
