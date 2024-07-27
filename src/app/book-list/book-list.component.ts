import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    // { id: 1, title: 'coding', author: 'OG' },
    // { id: 2, title: '4', author: 'Mielie' },
    // { id: 3, title: 'life', author: 'Pitt' },
  ];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService
      .getBooks()
      .subscribe((booksFromApi) => (this.books = booksFromApi));
  }
}
