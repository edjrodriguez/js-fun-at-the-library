function shelfBook(bookTitle, shelf) {
  if (shelf.length < 3){
  return shelf.unshift(bookTitle);
 }
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookTitle) {
    return shelf.splice(i, 1)
    }
  }
};

function listTitles(bookShelf) {
  var onShelf = []
  for (var i = 0; i < bookShelf.length; i ++) {
  onShelf.push(bookShelf[i].title)
  } return onShelf.join(", ");
};

function searchShelf(bookShelf, title) {
  var available = null;
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title.includes(title)) {
    return available = true;
  } else {
    available = false;
    }
  }
  return available;
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
