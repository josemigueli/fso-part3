# Phonebook Backend

This is the backend for the **Part 3** of the **Full Stack Open Course** offered by the University of Helsinki. It is built using **Node.js** and **Express**, and it serves as the backend for a phonebook application. The frontend, developed with **React**, is included in the `dist` folder and allows users to view, add, filter, and delete phonebook entries.

A live version of the project is deployed on **Fly.io**.

## Features

- **RESTful API**: The backend provides a RESTful API to manage phonebook entries.
- **MongoDB Integration**: The application uses MongoDB to store and retrieve phonebook data.
- **Frontend Integration**: The frontend, developed in **Part 2** of the course, is served from the `dist` folder.
- **Error Handling**: Custom error handling for malformed IDs and validation errors.
- **Logging**: HTTP request logging using `morgan`.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing phonebook entries.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Morgan**: HTTP request logger middleware.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/josemigueli/fso-part3.git
   cd fso-part3
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI=your_mongodb_uri
     PORT=your_port
     ```

4. **Run the application**:
   - For development:
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## Available Scripts

- **`start`**: Starts the server in production mode.
- **`dev`**: Starts the server in development mode using `nodemon`.
- **`build:ui`**: Builds the frontend and copies it to the `dist` folder.
- **`deploy`**: Deploys the application to Fly.io.
- **`deploy:full`**: Builds the frontend and deploys the application to Fly.io.
- **`logs:prod`**: Displays the production logs from Fly.io.
- **`lint`**: Runs ESLint to check for code quality issues.

## API Endpoints

- **`GET /`**: Returns a welcome message.
- **`GET /api/persons`**: Returns all phonebook entries.
- **`GET /info`**: Returns the number of entries in the phonebook and the current date.
- **`GET /api/persons/:id`**: Returns a specific phonebook entry by ID.
- **`POST /api/persons`**: Adds a new phonebook entry.
- **`PUT /api/persons/:id`**: Updates an existing phonebook entry.
- **`DELETE /api/persons/:id`**: Deletes a phonebook entry by ID.

## Error Handling

The backend includes custom error handling for:

- **Malformed IDs**: Returns a `400 Bad Request` with an error message.
- **Validation Errors**: Returns a `400 Bad Request` with the validation error message.

## Deployment

The application is deployed on **Fly.io**. To deploy your own version:

1. **Install Fly.io CLI**:

   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Login to Fly.io**:

   ```bash
   fly auth login
   ```

3. **Deploy the application**:
   ```bash
   npm run deploy
   ```

For more info visit the official [docs](https://fly.io/docs/flyctl/install/).

## Live Demo

A live version of the application is available at [https://fso-part3-gt.fly.dev/](https://fso-part3-gt.fly.dev/).

## License

This project is licensed under the **MIT License**.
