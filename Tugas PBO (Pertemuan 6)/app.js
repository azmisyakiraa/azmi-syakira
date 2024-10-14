let books = [];
let editIndex = -1;


function displayBooks() {
    const bookTable = document.getElementById('bookTable');
    bookTable.innerHTML = '';
    books.forEach((book, index) => {
        bookTable.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editBook(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}


function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (editIndex === -1) {
        books.push({ title, author });
    } else {
        books[editIndex] = { title, author };
        editIndex = -1;
    }

    document.getElementById('bookForm').reset();
    displayBooks();
}


function editBook(index) {
    document.getElementById('title').value = books[index].title;
    document.getElementById('author').value = books[index].author;
    editIndex = index;
}


function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

document.getElementById('bookForm').addEventListener('submit', addBook);

displayBooks();
