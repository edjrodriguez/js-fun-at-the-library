function createLibrary (libraryName) {
  return {
    name:libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction:[],
    }
  }
};

// this addBook function will add to only 3 specific shelves: fantasy, nonFiction, fiction.  Not a dynamic function.

// function addBook (libraryName, bookTitle) {
//   if (bookTitle.genre.includes("fantasy")){
//     return libraryName = libraryName.shelves.fantasy.unshift(bookTitle)
//   } else if (bookTitle.genre.includes("nonFiction")) {
//     return libraryName = libraryName.shelves.nonFiction.unshift(bookTitle)
//   } else if (bookTitle.genre.includes("fiction")) {
//     return libraryName = libraryName.shelves.fiction.unshift(bookTitle)
//   }
// };


// this addBook function is  dynamic and will create a shelf of any genre that a book hapens to be.  No need to specify genres in this function.
function addBook (libraryName, bookTitle){
  libraryName.shelves[bookTitle.genre].push(bookTitle)
}

function checkoutBook(libraryName, bookTitle, genre) {
  var result = `You have now checked out ${bookTitle} from the ${libraryName.name}`;
  var error = `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`;

  for(var i = 0; i < libraryName.shelves[genre].length; i++){
    if(libraryName.shelves[genre][i].title.includes(bookTitle)) {
     libraryName.shelves[genre].splice(i, 1);
   }
          return result;
        }
        return error;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
