const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

function AddBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

AddBookToLibrary('Biblie', 'God', 787, 'Not yet read')
AddBookToLibrary('Escape', 'John Doe', 321, 'Read')
console.log(myLibrary)