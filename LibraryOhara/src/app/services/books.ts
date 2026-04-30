import { Injectable, signal } from '@angular/core';
import { mockBooks } from '../Mock/mookBooks';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class Books {

  private books = signal<Book[]>(mockBooks);

  getBooks(): Book[] {
    return this.books();
  }

  getBook(id: number): Book | undefined {
    return this.books().find(b => b.id === id);
  }

  addBook(book: Book) {
    book.id = new Date().getTime();
    this.books.set([...this.books(), book]);
  }

  updateBook(book: Book) {
    this.books.set(
      this.books().map(b =>
        b.id === book.id ? book : b
      )
    );
  }

  deleteBook(id: number) {
    this.books.set(
      this.books().filter(b => b.id !== id)
    );
  }
}