import { Routes } from '@angular/router';
import { ListBooks } from './Pages/list-books/list-books';
import { DetailBooks } from './Pages/detail-books/detail-books';

export const routes: Routes = [
    {
        path: '', component: ListBooks,
    },
    {
        path: 'book/:id',
        component: DetailBooks
    }
];
