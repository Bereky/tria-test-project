# Dashboard

This is a NextJs + NestJs fullstack web application.

## Run the project locally

Follow the steps below to run the project on your local machine

### Initial steps 
#### Postgres DB using Docker

To start the postgres databse using Docker Compose, follow these steps:

1. Clone this repository

2. Make sure you have Docker and Docker Compose installed on your machine.
4. Run the following command to start the app:

  ```
cd backend
 docker compose up
```

Once the build is completed, follow the steps below to run the frontend and backend.

### Running the application 

Keep the docker compose running and start another terminal to run the commands in the next steps.

1. NextJs Frontend

   ```
   cd frontend
   npm install
   npm run dev
   ```

2. NestJs backend

```
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
```

3. After both ends start running, access the app at
```
http://localhost:3000 # this is the url to access the NextJs app
```

