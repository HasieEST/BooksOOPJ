//Event: Raamatute ekraanile lisamine
document.addEventListener('DOMContentLoaded', UI.displayBooks)
//Event: Raamatu lisamine listi
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    // Kontrollime, et väljad on täidetud
    let book;
    if (title === '' || author === '' || isbn === '') {
        UI.alertUser('Täida kõik väljad ära', 'danger')
    } else {
        book = new Book(title, author, isbn)
        UI.addBookToList(book)
        Storage.addBook(book)
        UI.alertUser('Raamat on edukalt lisatud', 'success')
        UI.clearFields()
    }
})

//Event: Raamtu kustutamine listist

document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBookFromList(e.target)
    Storage.deleteBook(e.target.parentElement.previousElementSibling.textContent)
    UI.alertUser('Raamat on edukalt lisatud', 'success')
})