import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Book, GetBooksResponse} from './models/models.type';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const url = `${this.apiUrl}/`;
    return this.http.get<Book[]>(url);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    const url = `${this.apiUrl}/book/${book.id}`;
    return this.http.patch<Book>(url, book);
  }

  deleteBook(book: Book): Observable<unknown> {
    const url = `${this.apiUrl}/book/${book.id}`;
    return this.http.delete<Book>(url);
  }

  postBooks(): Observable<Book> {
    const url = `${this.apiUrl}/book/`;
    return this.http.post<Book>(url, {});
  }

}
