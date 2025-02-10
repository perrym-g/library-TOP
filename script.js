const myLibrary = [];

function Book(title, author, publishDate, read){
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.read = read;
    
}

function addBookToLibrary(title, author, publishDate, read){
    book = new Book(title, author, publishDate, read);
    myLibrary.push(book);
}

function displayBooks(){
    // loop through array
    // for each book create a card on the page
    const display = document.getElementById("display");
    myLibrary.forEach(book => {   
        const div = document.createElement("div");
        div.className = "card"

        const title = document.createElement("h3");
        title.appendChild(document.createTextNode(`${book.title}`));

        const author = document.createElement("h4");
        author.appendChild(document.createTextNode(`${book.author}`));

        const publishDate = document.createElement("p");
        publishDate.appendChild(document.createTextNode(`${book.publishDate}`));

        const read = document.createElement("p");
        read.appendChild(document.createTextNode(`${book.read}`));


        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(publishDate);
        div.appendChild(read);

        display.appendChild(div);
    });
}

function reset(){
    const display = document.getElementById("display");
    display.innerHTML = "";
}
const dialog = document.querySelector("dialog");
const showBtn = document.querySelector("dialog + button");
const closeBtn = document.querySelector("dialog button");

showBtn.addEventListener("click", () => {
    dialog.showModal();
})

closeBtn.addEventListener("click", () =>{
    dialog.close();
})

const addBookForm = document.getElementById("book-add");

addBookForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let publishDate = document.getElementById("publishDate").value;
    let read = document.getElementById("read").value;

    addBookToLibrary(title, author, publishDate, read);
    dialog.close();
    reset();
    displayBooks();
})
