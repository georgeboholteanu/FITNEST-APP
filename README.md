# fitNEST - GYM

## Authentification Using Sequalize and Cloud Stored MySQL Database

![node-current](https://img.shields.io/node/v/vercel?style=for-the-badge&labelColor=green&color=)
![REACT](https://img.shields.io/badge/REACT-lightblue?style=for-the-badge&logoColor=white)
![EXPRESS](https://img.shields.io/badge/EXPRESS-grey?style=for-the-badge&logoColor=white)
![TAILWIND](https://img.shields.io/badge/TAILWIND-pink?style=for-the-badge&logoColor=white)
![SEQUALIZE](https://img.shields.io/badge/SEQUALIZE-blue?style=for-the-badge&logoColor=white)
![VITE](https://img.shields.io/badge/VITE-%23E4E10F?style=for-the-badge&logoColor=white)
[![MYSQL CLOUD CONSOLE](https://img.shields.io/badge/MySQL-Clever_Cloud_Console-purple.svg?style=for-the-badge&logoColor=white)](https://fitnest.vercel.app/)
[![VERCEL](https://img.shields.io/badge/VERCEL-black.svg?style=for-the-badge&logoColor=white)](https://fitnest.vercel.app/)

## Description

-   The app uses **React** routing to navigate between different pages of the app.
-   An **Express** server has been set up for user authentification and registration.
-   **Sequelize** library has been used as an ORM (Object-Relational-Mapper) for **Node.js** in order to interact with MySQL database.
-   A database can be configured for testing locally using **MySQL Workbench**.
-   The database is being accessed from a mySQL server configured using [Clever Cloud Console](https://console.clever-cloud.com/).
-   After a successful login the user will be redirected to the user dashboard page.
-   Following registration user paswords are **hashed** before being stored in the database.

### **Deployed on VERCEL** : [fitNEST-app](https://fitnest.vercel.app/)

<div style="text-align: center">
<img style="padding: 4px" src="./client/src/assets/appMobilePreview.png" height="420">
<img style="padding: 4px" src="./client/src/assets/appDesktopPreview.jpg" width="785">  
</div>

## Installation

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:8000 and client on http://localhost:3000
```

## Requirements

-   ### MySQL Local Server - Development

    -   [MySQL](https://dev.mysql.com/downloads/installer/) server installed and running locally.

    -   MySQL database created locally in order for the user authentication or registration to work properly.
        -   **SCHEMA name : 'gym'**
        -   **TABLE name : 'users'**
    -   MySQL login credentials will need to be ammended per user cofiguration on **_client/database/database.js_**.

-   ### MySQL Cloud Server - Production

    -   A cloud MySQL server has been configured to be able to access the login and register functionality.
    -   MySQL cloud configuration shall match the variables stored in the **_.env_** file stored in the root folder of the app.

## API Testing Endpoints

-   GET : `http://localhost:8000/api/users`
-   POST: `http://localhost:8000/api/users/register/`
-   POST: `http://localhost:8000/api/auth/login`

[**Postman**](https://www.postman.com/) or any similar application can be used for testing API requests.

## Purpose

-   Practice
-   Improve knowledge on full stack development.
