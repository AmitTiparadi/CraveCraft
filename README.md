# Recipe Sharing Platform

Welcome to the Recipe Sharing Platform! This is a web application that allows users to discover, save, and share recipes from various cuisines. Built with a modern tech stack (MongoDB, Node.js, and React.js), this platform supports high scalability and a seamless user experience, including user authentication and customized recipe collections.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Recipe Discovery**: Browse recipes from various categories like North Indian, South Indian, and Continental.
- **User Authentication**: Register and log in with secure authentication.
- **Recipe Cards**: Each category has recipe cards with ingredients and preparation details.
- **Personalization**: Save and manage your favorite recipes.
- **Dark Theme**: Modern black theme design for an engaging UI.
- **Responsive Design**: Fully responsive layout, optimized for both web and mobile devices.

## Tech Stack

- **Frontend**: React.js, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas for cloud storage)
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS with custom styles

## Setup

### Prerequisites

- **Node.js** (v14 or above)
- **MongoDB Atlas Account** (or a local MongoDB instance)
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/recipe-sharing-platform.git
   cd recipe-sharing-platform
## Install dependencies for backend and frontend
**Frontend**
  *dependencies*
    cd frontend
    npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event axios bcrypt body-parser express mongodb nodemon react react-dom react-router-dom react-scripts web-vitals
  *devDependencies*
    npm install -D autoprefixer postcss tailwindcss
**Backend**
    *dependencies*
      cd backend
      npm install bcrypt connect-mongo cors dotenv express express-session jsonwebtoken mongoose
    *devDependencies*
      npm install -D nodemon
## Environment Variables
    MONGODB_URI=<Your MongoDB URI>
    SESSION_SECRET=<Your  SESSION_SECRET>
    PORT=4000
    ORIGIN=http://localhost:3000
## Running the Application
  **Start the backend server:**
    cd backend
    npm start
    The backend server should now be running on http://localhost:4000.

  **Start the frontend server:**
    cd front end
    npm start
    The frontend should now be accessible at http://localhost:3000.


    
