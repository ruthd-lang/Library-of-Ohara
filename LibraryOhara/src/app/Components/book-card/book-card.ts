import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';
import { YearFormatPipe } from '../../pipes/year-format-pipe';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CapitalizePipe,
    YearFormatPipe,
    MdbRippleModule
  ],
  templateUrl: './book-card.html',
})
export class BookCard {

  @Input() book!: Book;

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.book.id);
  }

  onEdit() {
    this.edit.emit(this.book.id);
  }
}