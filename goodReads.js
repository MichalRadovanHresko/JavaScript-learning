// Define object here 💖

// Define addBooks() function here 💖

// Define showGoodreadsInfo() function here 💖
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "Can't hurt me",
      author: "David Goggins"
    }
  ],

  wantToRead: [
    {
      title: "siska",
      author: "GoGoManTV"
    }
  ]
}

const addNewBooks = (books, ...additionalBookObjects) => {
  return [...books,...additionalBookObjects]
}

goodreadsInfo.currentlyReading = addNewBooks (
    goodreadsInfo.currentlyReading,
    { title: "The Two Towers", author: "J.R.R. Tolkien" },
    { title: "The MOM Test", author: "Rob Fitzpatrick" }
);
goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead, {
  title: "Looking for Alaska",
  author: "John Green",
});
const showGoodreadsInfo = (info) => {
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    console.log(`${book.title} by ${book.author}`);
  }

  console.log();
  console.log("Want to Read:");
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);