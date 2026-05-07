import { Component, OnInit, signal, computed } from '@angular/core';
import { Books } from '../../services/books';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookCard } from '../../Components/book-card/book-card';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormBook } from '../form-book/form-book';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BookCard,
    MdbFormsModule,
    MdbRippleModule
  ],
  templateUrl: './list-books.html',
  styleUrl: './list-books.css',
  providers: [MdbModalService]
})
export class ListBooks implements OnInit {
  books = signal<Book[]>([]);

  search = signal('');
  category = signal('todos');
  
  modalRef: MdbModalRef<FormBook> | null = null;

  constructor(
    private bookService: Books,
    private modalService: MdbModalService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  private loadBooks() {
    this.books.set(this.bookService.getBooks());
  }

  delete(id: number) {
    this.bookService.deleteBook(id);
    this.loadBooks(); 
  }

  edit(id: number) {
    this.openFormModal(id);
  }

  create() {
    this.openFormModal(null);
  }

  openFormModal(id: number | null) {
    this.modalRef = this.modalService.open(FormBook, {
      data: { bookId: id }
    });

    this.modalRef.onClose.subscribe((result: boolean) => {
      if (result) {
        this.loadBooks();
      }
    });
  }

  filteredBooks = computed(() => {
    const allBooks = this.books(); 
    const text = this.search().toLowerCase();
    const cat = this.category();

    return allBooks.filter(book => {
      const matchText =
        book.title.toLowerCase().includes(text) ||
        book.author.toLowerCase().includes(text);

      const matchCategory =
        cat === 'todos' || book.category === cat;

      return matchText && matchCategory;
    });
  });

  categories = computed(() => {
    const cats = this.books().map(book => book.category);
    return ['todos', ...new Set(cats)];
  });

  updateSearch(value: string) {
    this.search.set(value);
  }
}