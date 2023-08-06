# Book Manager Web Application

The Book Manager Web Application is a simple CRUD (Create, Read, Update, Delete) application that allows users to manage a list of books. The application provides the following functionalities:

## Functionality:
- View Book List
- Search Books
- Add Book
- Sort Books
- Edit Book
- Delete Book

start by cloning the project from GitHub:

```git clone https://github.com/HAIDALA/book_manager.git```

# How to Run the app using docker (Best choice if you know docker!):

Prerequisites:
- Docker: https://docs.docker.com/get-docker/
- Docker Compose: https://docs.docker.com/compose/install/

### Build the frontend Docker image
cd book_manager/front-end
docker build -t frontend-image .

### Build the backend Docker image
cd ../back-end
docker build -t backend-image .

### Start the application using Docker Compose
docker-compose up

### Access the Application:
After the Docker containers are up and running, you can access the Book Manager Web Application by visiting:
http://localhost:4200/


# Run the App without docker

## How to Run the Backend:

First, make sure you have Python installed on your system. You can download the latest version of Python from the official website: https://www.python.org/downloads/


Change to the frontend directory:

```cd book_manager/back-end```

Install FastAPI:

```pip install fastapi```

Install Uvicorn:

```pip install uvicorn```

Install pymongo:

```pip install pymongo```

Run the Backend Server:

```uvicorn main:app --reload```


Once the server is up and running, you can access the backend API at http://localhost:8000/. 

## How to Run the Frontend:

Install Node.js:

First, make sure you have Node.js installed on your system. You can download the latest version of Node.js from the official website: https://nodejs.org/

To run the frontend of the Book Manager Web Application, follow these steps:

Change to the frontend directory:

```cd book_manager/front-end```

Install the required dependencies:

```npm install```

Start the development server:

```npm start```

Once the server is up and running, you can access the application in your web browser at http://localhost:4200/.


## Technologies : 

REST API with Fastapi, angular





