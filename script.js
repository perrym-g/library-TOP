const myLibrary = [];

function Book(title, author, publishDate, read) {
  this.title = title;
  this.author = author;
  this.publishDate = publishDate;
  this.read = read;
}

function addBookToLibrary(title, author, publishDate, read) {
  book = new Book(title, author, publishDate, read);
  myLibrary.push(book);
}

function displayBooks() {
  // loop through array
  // for each book create a card on the page
  reset();
  const display = document.getElementById("display");
  myLibrary.forEach((book, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.setAttribute("id", `${i}`);

    const title = document.createElement("h3");
    title.appendChild(document.createTextNode(`${book.title}`));

    const author = document.createElement("h4");
    author.appendChild(document.createTextNode(`${book.author}`));

    const publishDate = document.createElement("p");
    publishDate.appendChild(document.createTextNode(`${book.publishDate}`));

    const read = document.createElement("input");
    read.setAttribute("type", "checkbox");
    read.setAttribute("name", "readbook");

    const label = document.createElement("label");
    label.htmlFor = "readbook";
    label.innerHTML = "Read?";
    read.checked = book.read;
    console.log(book.read);
    // console.log(i);
    console.log("butts and farts");

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = "Delete";

    read.addEventListener("change", () => {
      book.readStatus();
      console.log(book);
    });

    deleteBtn.addEventListener("click", () => {
      let index = div.getAttribute("id");
      console.log(index);
      myLibrary.splice(i, 1);
      displayBooks();
    });

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(publishDate);
    div.appendChild(label);
    div.appendChild(read);
    div.appendChild(deleteBtn);
    display.appendChild(div);
  });
}

function reset() {
  const display = document.getElementById("display");
  display.innerHTML = "";
}

Book.prototype.readStatus = function () {
  this.read = !this.read;
};
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog + button");
const closeBtn = document.querySelector("dialog button");
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

const addBookForm = document.getElementById("book-add");

addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let publishDate = document.getElementById("publishDate").value;
  let read = document.getElementById("read").checked;

  addBookToLibrary(title, author, publishDate, read);
  dialog.close();
  reset();
  displayBooks();
});
