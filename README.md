**Wanderlust** is a full-stack application built with Node.js, Express, MongoDB, and EJS templating. It allows users to explore and create listings, post reviews, and interact with a dynamic travel listing platform.

## Features
- User authentication with Passport.js (login, registration).
- MongoDB-based listings and reviews.
- Flash messages and session management.
- EJS templating for rendering dynamic pages.
- Secure session storage with MongoDB and cookies.
- Validation of user input using Joi.
- File uploads (e.g., images) using Multer and Cloudinary.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 20.16.0 or higher)
- **MongoDB** (local or cloud)
- **Git** (to clone the repository)

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/anshuullaad/Wanderlust.git
    cd Wanderlust
    ```

2. **Install dependencies**:
    Run the following command to install all necessary dependencies:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory with the following variables:
    ```bash
    ATLASDB_URL=<Your MongoDB connection string>
    SECRET=<Your secret key>
    ```

4. **Start the server**:
    Run the server in development mode:
    ```bash
    node app.js
    ```
    By default, the server will be hosted at `http://localhost:8080`.

## Usage

### Running the Application Locally
After following the installation steps, the application should be running on `http://localhost:8080`. Open a browser and navigate to this URL.

You can:
- Explore listings.
- Register and log in to create your own listings.
- Post reviews for listings.
- Edit or delete listings that you created.

### Project Structure

### To setup mongodb database

### MongoDB Setup
Make sure to set up a MongoDB instance (either locally or on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) and include the connection string in your `.env` file under the `ATLASDB_URL` variable.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing listings, users, and reviews.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Passport.js**: Authentication middleware.
- **EJS**: Templating engine for rendering HTML pages.
- **Multer & Cloudinary**: File upload and cloud storage for images.

## Configuration

### Environment Variables
This application requires the following environment variables:
- `ATLASDB_URL`: MongoDB connection string.
- `SECRET`: A secret key for session and cookie security.

Example `.env` file:
```bash
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderlust?retryWrites=true&w=majority
SECRET=your_secret_key
