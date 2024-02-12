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

function displayLibrary() {
    myLibrary.forEach(function(book) {

        const contentArea = document.querySelector('.content');
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book');
    
        const titleIcon = document.createElement('img')
        titleIcon.classList.add('logo');
        titleIcon.src = 'img/title.svg';
        titleIcon.alt = 'title icon';
        bookContainer.appendChild(titleIcon);

        const title = document.createElement('h3');
        title.textContent = book.title;
        title.classList.add('title', 'text');
        bookContainer.appendChild(title);

        const authorIcon = document.createElement('img');
        authorIcon.classList.add('logo');
        authorIcon.src = 'img/author.svg';
        authorIcon.alt = 'author icon';
        bookContainer.appendChild(authorIcon);
        
        const author = document.createElement('p');
        author.textContent = book.author;
        author.classList.add('author', 'text');
        bookContainer.appendChild(author);

        const pagesIcon = document.createElement('img');
        pagesIcon.classList.add('logo');
        pagesIcon.src = 'img/year.svg';
        pagesIcon.alt = 'pages icon';
        bookContainer.appendChild(pagesIcon);
        
        const pages = document.createElement('p');
        pages.textContent = book.pages;
        pages.classList.add('pages', 'text');
        bookContainer.appendChild(pages);
        
        const readIcon = document.createElement('img');
        readIcon.classList.add('logo');
        readIcon.src = 'img/read.svg';
        readIcon.alt = 'read icon';
        bookContainer.appendChild(readIcon);

        const readState = document.createElement('p');
        readState.textContent = book.read;
        readState.classList.add('read', 'text');
        bookContainer.appendChild(readState);

        contentArea.appendChild(bookContainer);
    })
}