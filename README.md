
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

The app lets you create a new account or login into an existing one. Within your account, you are able to book specific gym classes and check their availability.

**Sequelize** library has been used as an ORM (Object-Relational-Mapper) for Node.js in order to interact with MySQL database. This can be viewed or changed through **MySQL Workbench** on your local machine.

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

### Locally - testing

- [MySQL](https://dev.mysql.com/downloads/installer/) server installed and running locally.

- MySQL database created locally in order for the user authentication or registration to work properly.

  - **SCHEMA name : 'gym'**
  - **TABLE name : 'users'**

### Cloud based - production

A cloud MySQL server has been configured to be able to access the login and register functionality.

Login credentials for the server ***client/database/database.js*** are stored in the ***.env*** file

- #### **MySQL Cloud Server** : [Clever Cloud Console](https://console.clever-cloud.com/)

## API Testing Endpoints

- GET : `http://localhost:8000/api/users`
- POST: `http://localhost:8000/api/users/register/`
- POST: `http://localhost:8000/api/auth/login`

## Purpose

- Practice
- Improve knowledge on full stack development.
  