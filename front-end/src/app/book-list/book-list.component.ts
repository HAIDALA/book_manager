import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../models/models.type';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {
  books: Book[] = [];
  searchQuery: string = '';
  displaySearchButton = true;
  sortOption = "date";
  filteredBooks: Book[] = [];

  constructor(private bookService: BookService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(res => {
      this.books = res;
      this.filterBooks();
      this.sortBooksByDate();
      this.books.forEach(book => {
        book.last_modification_date = this.formatDate(book.last_modification_date);
      });
    });
  }


  formatDate(date: string | null): string {
    if (!date) {
      return '';
    }
    const parsedDate = new Date(date);
    return this.datePipe.transform(parsedDate, 'medium', 'shortTime') ?? '';
  }

  searchBooks() {
    this.filterBooks();
  }

  filterBooks() {
    if (this.searchQuery.trim() === '') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().includes(this.searchQuery.trim().toLowerCase())
      );
    }
  }

  openSearch(): void {
    this.displaySearchButton = false;
  }

  closeSearch(): void {
    this.displaySearchButton = true;
    this.searchQuery = '';
    this.filterBooks();
  }

  sortBooksByDate(): void {
    this.sortOption = "date";
    this.filteredBooks.sort((a, b) => new Date(b.last_modification_date).getTime() - new Date(a.last_modification_date).getTime());
  }


  sortBooksByTitle(): void {
    this.sortOption = "title";
    this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  }

  addBook() {
    this.bookService.postBooks().subscribe();
    this.getBooks();
  }

}
