import "./styles/app.css";

import Book from "./models/Book.js";
import UI from "./UI.js";

// Instatiating the UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  ui.renderBooks();
});

document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const image = document.getElementById("image").files;

  const formData = new FormData();
  formData.append("image", image[0]);
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  // New Book Object
  const book = new Book(title, author, isbn);

  // Validating User Input
  if (title === "" || author === "" || isbn === "") {
    ui.renderMessage("Please fill all the fields", "error", 3000);
  } else {
    // Pass the new book to the UI
    ui.addANewBook(formData);
    ui.renderMessage("New Book Added Successfully", "success", 2000);
  }

  e.preventDefault();
});

document.getElementById("books-cards").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    ui.deleteBook(e.target.getAttribute("_id"));
    ui.renderMessage("Book Deleted Successfully", "success", 3000);
  }
  e.preventDefault();
});
