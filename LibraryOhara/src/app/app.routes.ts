import { Routes } from '@angular/router';
import { ListBooks } from './Pages/list-books/list-books';
import { DetailBooks } from './Pages/detail-books/detail-books';
import { FormBook } from './Pages/form-book/form-book';

export const routes: Routes = [
    {
        path: '', component: ListBooks,
    },
    {
        path: 'book/create',
        component: FormBook
    },
    {
        path: 'book/:id',
        component: DetailBooks
    },
    {
        path: 'book/edit/:id',
        component: FormBook
    },
];
