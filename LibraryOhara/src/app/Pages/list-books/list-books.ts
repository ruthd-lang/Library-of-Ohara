import { Component, OnInit, signal, computed } from '@angular/core';
import { Books } from '../../services/books';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BookCard } from '../../Components/book-card/book-card';

@Component({
  selector: 'app-list-books',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BookCard,
  ],
  templateUrl: './list-books.html',
  styleUrl: './list-books.css',
})
export class ListBooks implements OnInit {
  books = signal<Book[]>([]);

  search = signal('');
  category = signal('todos');

  constructor(
    private bookService: Books,
    private router: Router
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
    this.router.navigate(['/book/edit', id]);
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