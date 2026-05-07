import { Component, OnInit } from '@angular/core';
import { Books } from '../../services/books';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule, FormsModule, MdbFormsModule, MdbRippleModule],
  templateUrl: './form-book.html',
})
export class FormBook implements OnInit {

  bookId: number | null = null; // Passed from modal open

  book: Book = {
    id: 0,
    title: '',
    author: '',
    category: '',
    description: '',
    year: 0,
    image: ''
  };

  isEdit = false;

  constructor(
    private bookService: Books,
    public modalRef: MdbModalRef<FormBook>
  ) {}

  ngOnInit() {
    if (this.bookId) {
      this.isEdit = true;
      const bookFound = this.bookService.getBook(this.bookId);

      if (bookFound) {
        this.book = { ...bookFound };
      }
    }
  }

  save() {
    if (this.isEdit) {
      this.bookService.updateBook(this.book);
    } else {
      this.bookService.addBook(this.book);
    }
    this.modalRef.close(true); // Return success
  }

  close(): void {
    this.modalRef.close(false);
  }
}