def individual_serial(book) -> dict:
  return {
    "id": str(book["_id"]),
    "title": book["title"],
    "author": book["author"],
    "description": book["title"],
    "last_modification_date": book["last_modification_date"],
  }

def list_serial(books) -> list:
  return [individual_serial(book) for book in books]