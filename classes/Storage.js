//Local Storage
class Storage {
    static bookStorage() {
        let books
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static addBook(book) {
        const books = Storage.bookStorage()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static deleteBook(isbn) {
        const books = Storage.bookStorage()

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        })

        localStorage.setItem('books', JSON.stringify(books))
    }
}