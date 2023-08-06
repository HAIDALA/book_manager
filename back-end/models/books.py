import datetime
from pydantic import BaseModel, Field


class Book(BaseModel):
    title: str
    author: str
    description: str
    last_modification_date: datetime.datetime = Field(...)

