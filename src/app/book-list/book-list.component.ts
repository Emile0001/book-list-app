import { Component } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  // book: Book = { id: 1, author: 'Mielie Pitt', title: 'Book one' };
  books: Book[] = [
    { id: 1, title: 'coding', author: 'OG' },
    { id: 2, title: '4', author: 'Mielie' },
    { id: 3, title: 'life', author: 'Pitt' },
  ];
}
