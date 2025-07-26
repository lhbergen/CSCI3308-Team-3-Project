# CSCI 3308 Message Board Project

### Welcome to Team 3's Message Board application: a fully Dockerized, Node.js + Express + PostgreSQL + Handlebars forum that lets users register, log in, create boards, start discussion posts, and leave comments


## Features

User Authentication: Register & log in with hashed passwords (bcrypt) and session management (express-session)

Boards & Posts: Create categorized boards, start new discussion posts, and comment on posts

Dockerized: Runs in Docker containers for the app, database (Postgres), and session management 

Unit and Integration Tests: Individual and end-to-end smoke tests using Mocha, Chai & Supertest


## Technology Stack

Node.js & Express for the server.

PostgreSQL as the relational database.

Handlebars for server-rendered views.

Docker Compose to orchestrate services.

pg.Pool and pg.connecct for database connection pooling.

bcrypt for password hashing.

Mocha, Chai, Supertest for integration testing.


### Prerequisites

Docker

Docker Compose

(Optional) Node.js & npm if running locally without Docker

### Clone the repository
```
git clone git@github.com:yourUsername/CSCI3308-Team-3-Project.git
```
```
cd CSCI3308-Team-3-Project/ProjectSourceCode
```
Create your .env file

### Copy the example and fill in your secrets:
```
cp .env.example .env
```
### Edit .env to add your values:
```
 POSTGRES_USER=message_user
 POSTGRES_PASSWORD=supersecretpassword
 POSTGRES_DB=messageboard
 POSTGRES_HOST=db
 SESSION_SECRET=yourSessionSecret
```
### Run with Docker Compose

Bring up the app & database in detached mode:
```
docker-compose up -d --build
```

The Postgres container will initialize the schema and seed data from
src/init_data/*.sql
The web container builds and starts the Express server on port 3000.

### Access the app

Open your browser to:

http://localhost:3000


### Run Tests

Execute the Mocha suite inside the web container:
Install dev dependencies in Docker
```
# Inside Dockerfile
RUN npm install --include=dev
```
Rebuild your containers
```
docker-compose down -v
docker-compose build
docker-compose up -d
```
Run tests inside the container
```
docker-compose exec web npm test
```

If that did not work, please try:
```
docker-compose down -v
```
next,
```
docker-compose up -d --build
```
finally,
```
docker-compose exec web npm test
```
## Directory Structure

```
ProjectSourceCode/
├─ .env.example       # Example env variables
├─ docker-compose.yml
├─ DockerFile         # Builds the web image
├─ init_data/         # SQL schema & seed scripts
│    ├─ create.sql
│    └─ insert.sql
├─ src/
│   ├─ index.js       # App entry point, HTTP handlers, Business logic, Express routers (auth, boards, posts, comments)
│   ├─ db.js          # Postgres connection pool
│   ├─ models/        # Raw SQL queries
│   └─ views/         # Handlebars templates & public assets
└─ test/
    └─ test/          # Unit and integration tests (Mocha/Chai/Supertest)
```

## Contributors:

Made by Team 3 for CSCI 3308
