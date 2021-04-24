class BookService {
  constructor() {
    this.URI = `/api/books`;
  }

  async getBooks() {
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }

  async postBook(book) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: book,
    });
    await res.json();
  }

  async deleteBook(bookId) {
    const res = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "Delete",
    });
    await res.json();
  }
}

export default BookService;
