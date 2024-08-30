# TravelTrucks - Frontend

## Project Overview

This project is created for **TravelTrucks**, a company that offers camper
rental services. The web application includes several pages, such as:

- Home page
- Camper catalog
- Individual camper page with reviews and a booking form

To interact with camper listings, the frontend application utilizes a backend
API, which is available at:

[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

### Main API Endpoints:

- `GET /campers` – Fetch all listings (with optional filtering parameters)
- `GET /campers/:id` – Fetch details of a specific listing by its ID

## Technology Stack

- **React** – for building the user interface
- **Vite** – as the project bundler and local server
- **ESLint** – for code quality checks

## Getting Started

### Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (recommended version: 16.x or higher)
- **npm** (recommended version: 8.x or higher)

### Steps to Run the Project

1. **Clone the repository**

   First, clone the project repository to your local machine:

   ```bash
   git clone [Link](https://github.com/OleksiyBodnia/traveltrucks.git)
   ```

2. **Install dependencies**

    ```bash
    cd traveltrucks-frontend
    npm install

3. **Start the development server**

    ```bash
    npm run dev

4. **Build the project for production**

    ```bash
    npm run build

5. **Preview the production build**

    ```bash
    npm run preview

6. **Run code linting**

    ```bash
    npm run lint
