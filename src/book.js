function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  return character = {
      name: name,
      age: age,
      pronouns: pronouns,
    }
};

function saveReview(readerReview, reviews) {
  if(reviews.includes(readerReview)){
  } else {
    return reviews.push(readerReview);
  }
};

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount;
};

function writeBook (bookTitle, bookCharacter, genre) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
};

function editBook(bookTitle) {
bookTitle.pageCount = bookTitle.pageCount * .75;
  return bookTitle.pageCount
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
