class Librarian {
  constructor(firstName, library) {
    this.name = firstName;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if ((patronName) && (morning) == (patronName && true)){
      return `Good morning, ${patronName}!`;
    } else ((patronName) && (morning) == (patronName && false))
    return `Hello, ${patronName}!`;
  }

  // findBook(onBookShelf, book) {
  //   var onBookShelf = `Yes, we have ${book}`;
  //   var checkedOut = `Sorry, we do not have ${book}`;
  //
  //   for (var i = 0; i < onBookShelf.length; i++){
  //     if (onBookShelf.library == (book)
  //     return onBookShelf;
    // } else {
    //   return checkedOut;
  
  };




//
//     if(patronName && timeOFDay === patronName && true) {
//     return `Good morning, ${patronName}!`;
//   } else if(patronName && timeOFDay === patronName && false) {
//     return `Hello, ${patronName}!`;
//   }
// }

module.exports = Librarian;
