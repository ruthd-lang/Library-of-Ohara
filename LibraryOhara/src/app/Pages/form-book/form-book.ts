import { Component, OnInit } from '@angular/core';
import { Books } from '../../services/books';
import { Book } from '../../models/book';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-book',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './form-book.html',
})
export class FormBook implements OnInit {

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.isEdit = true;

      const bookFound = this.bookService.getBook(id);

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

    this.router.navigate(['/']);
  }
}