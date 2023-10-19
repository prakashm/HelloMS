FROM python:3-alpine3.16
WORKDIR /app
COPY . ./app
RUN pip install -r requirements.txt
EXPOSE 3002
CMD python3 ./index.py

