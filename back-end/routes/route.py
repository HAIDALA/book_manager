from fastapi import APIRouter
from models.books import Book, GetBooksResponse
from config.database import collection_name
from schema.schemas import list_serial
from bson import ObjectId
from datetime import datetime

router = APIRouter()


@router.get("/")
def get_books() -> GetBooksResponse:
  books = list_serial(collection_name.find())
  return books

@router.get("/book/{id}") 
def get_book(id: str) -> Book:
    book = collection_name.find_one({"_id": ObjectId(id)})
    return Book(**book)


@router.post("/book/")
def post_books():
  last_modification_date: datetime = datetime.utcnow()
  new_book: Book = Book(
    title = "New Book",
    author = "New author",
    description = "Edit to enter description",
    last_modification_date = last_modification_date
  )
  collection_name.insert_one(dict(new_book))

@router.patch("/book/{id}")
def patch_book(id: str, book: Book):
  collection_name.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(book)})


@router.delete("/book/{id}")
def delete_book(id: str):
  collection_name.find_one_and_delete({"_id": ObjectId(id)})


