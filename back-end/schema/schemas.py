from typing import List

from bson import ObjectId
from models.books import Book


def individual_serial(book) -> Book:
    book_data = {
        "id": str(book["_id"]),
        "title": book["title"],
        "author": book["author"],
        "description": book["description"],
        "last_modification_date": book["last_modification_date"],
    }
    return book_data

def list_serial(data: List[dict]) -> List[dict]:
    books = [individual_serial(book) for book in data]
    return books
