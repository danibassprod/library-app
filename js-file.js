const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.readStatus = function(){
        if (this.read === 'Read'){
            this.read = 'Not read yet'
        } else {
            this.read = 'Read'
        }
    }
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

function AddBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
}

AddBookToLibrary('Teoria Musical', 'Victor de Rubertis', 452, 'Not read yet');
AddBookToLibrary('Tesoros de la Biblia', 'Various Authors', 879, 'Not read yet');
AddBookToLibrary('El Psicoanalista', 'John Katzerbatch', 446, 'Read');

function displayLibrary() {
    myLibrary.forEach(function(book) {
        if (book.show) {
            return
        } else {
            buildBook(book)
        }
    }
)};
    
const contentArea = document.querySelector('.content');
    
displayLibrary();

function buildBook(book) {
    book.show = true;

    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    bookContainer.setAttribute('data-index', myLibrary.findIndex(x => x.title === book.title));

    const titleIcon = document.createElement('img');
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
    
    const removeAndReadBtns = document.createElement('div');
    removeAndReadBtns.classList.add('remove-read-buttons');

    const readStateBtn = document.createElement('button');
    readStateBtn.classList.add('read-state');
    readStateBtn.setAttribute('type', 'button');
    readStateBtn.textContent = 'Read';

    readStateBtn.addEventListener('click', function(){
        const books = document.querySelectorAll('.book')
        books.forEach(function(book){
            if (book.dataset.index === removeBookBtn.dataset.index && myLibrary.length === 1) {
                myLibrary[0].readStatus()
                readState.textContent = myLibrary[0].read;
            } else if (book.dataset.index === removeBookBtn.dataset.index){
                myLibrary[book.dataset.index].readStatus()
                readState.textContent = myLibrary[book.dataset.index].read;
            }
        })
    });

    removeAndReadBtns.appendChild(readStateBtn);

    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('remove-book');
    removeBookBtn.setAttribute('type', 'button');
    removeBookBtn.textContent = 'Remove';

    // Removes the book from display and myLibrary.
    
    removeBookBtn.addEventListener('click', function(){
        const books = document.querySelectorAll('.book')
        books.forEach(function(book, index){
            if (book.dataset.index === removeBookBtn.dataset.index) {
                 myLibrary.splice(index, 1)
                 book.remove()
            } 
        })
    })

    // Adds book index
    removeBookBtn.setAttribute('data-index', myLibrary.findIndex(arrayBook => arrayBook.title === book.title));
    removeAndReadBtns.appendChild(removeBookBtn);
    
    bookContainer.appendChild(removeAndReadBtns);

    contentArea.appendChild(bookContainer);
}

const title = document.querySelector('#book-title');
const author = document.querySelector('#book-author');
const pages = document.querySelector('#book-pages');
const read = document.querySelector('#book-read');
const bookReadBtn = document.querySelector('#book-read');
const bookNotReadBtn = document.querySelector('#book-not-read');

const dialog = document.querySelector('dialog');

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', () => dialog.showModal());

const cancelBtn = document.querySelector('.cancel');
cancelBtn.addEventListener('click', () => dialog.close());

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', function(){
    if (title.value === '' || author.value === '' || 
        pages.value === '' || bookReadBtn.checked == false && 
        bookNotReadBtn.checked === false) {
            return
        } else {
            AddBookToLibrary(title.value, author.value, pages.value, read.value);
            displayLibrary();
        }
});