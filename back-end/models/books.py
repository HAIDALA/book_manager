import datetime
from bson import ObjectId
from pydantic import BaseModel, Field

class PyObjectId(ObjectId):
    """ Custom Type for reading MongoDB IDs """

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid object_id")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls):
        return {"type": "string"}

def generate_object_id() -> PyObjectId:
    return PyObjectId()

class Book(BaseModel):
    #id: PyObjectId = Field(default_factory=generate_object_id, alias="_id")
    title: str
    author: str
    description: str
    last_modification_date: datetime.datetime = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
