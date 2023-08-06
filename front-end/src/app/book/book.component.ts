import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../models/models.type';
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book | undefined;
  editMode = false;
  deleting = false;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    public router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(
        (res) => {
          this.book = {...res, id: bookId}
          this.formatDate();
        }
      );
    }
  }

  enableEditMode() {
    this.editMode = true;
  }

  saveChanges() {
    if (this.book) {
      const currentDate = new Date();
      this.book.last_modification_date = currentDate.toISOString();
      this.bookService.updateBook(this.book).subscribe(
        (res) => {
          this.editMode = false;
        }
      );
    }
  }

  cancelEditMode() {
    this.editMode = false;
    this.getBook();
  }

  cancelDeleting() {
    this.deleting = false;
  }

  switchToDelete(): void {
    this.deleting = true;
  }
  deleteBook(): void {
    if (this.book) {
      this.bookService.deleteBook(this.book).subscribe(() => {
        this.navigateToTestBenchHome();
      });
    }
  }

  navigateToTestBenchHome(): void {
    this.router.navigate(["/"]);
  }

  formatDate() {
    if (this.book && this.book.last_modification_date) {
      const parsedDate = new Date(this.book.last_modification_date);
      this.book.last_modification_date = this.datePipe.transform(parsedDate, 'medium', 'shortTime') ?? '';
    }
  }

}
