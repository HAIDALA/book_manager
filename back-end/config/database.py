from pymongo import MongoClient

client =  MongoClient(
  "mongodb+srv://HAIDALA:pVGs5caP0xrYIx01@cluster0.4vkfvok.mongodb.net/?retryWrites=true&w=majority"
)

db = client.book_manager_db

collection_name = db["book_manager_db"]