import datetime
from bson import ObjectId
from pydantic import BaseModel, Field
from typing import List


class Book(BaseModel):
    title: str
    author: str
    description: str
    last_modification_date: datetime.datetime = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class GetBooksResponse(BaseModel):
    books: List[Book]

    class Config:
      allow_population_by_field_name = True
      arbitrary_types_allowed = True
      json_encoders = {ObjectId: str}

