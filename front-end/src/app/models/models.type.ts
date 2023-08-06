export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  last_modification_date: string;
}



export interface GetBooksResponse{
  books: Book[];
}


