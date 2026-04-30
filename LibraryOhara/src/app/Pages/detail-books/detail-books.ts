import { Component, OnInit } from '@angular/core';
import { Books } from '../../services/books';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-books',
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-books.html',
  styleUrl: './detail-books.css',
})
export class DetailBooks implements OnInit {

  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: Books
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBook(id);
  }
}