FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir fastapi uvicorn pymongo

EXPOSE 8000

CMD ["python", "-m", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
