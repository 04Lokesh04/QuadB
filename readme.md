# hodlinfo_clone

This project is a cryptocurrency data display application that clones the functionality and design of [**hodlinfo.com**](http://hodlinfo.com/). It features a Node.js backend, SQLite database, and a responsive frontend.

## Features

- **Real-time Data**: Fetches and displays real-time cryptocurrency data from the WazirX API.
- **Dynamic Updates**: Updates data periodically to reflect the most recent values.
- **Responsive Design**: Adapts to different screen sizes with a dark theme and styled components.

## Setup and Installation

1. **Clone the Repository**:
   
   git clone <https://github.com/04Lokesh04/QuadB.git
   cd hodlinfo_clone
   

2. **Install Dependencies**:
   
   npm install
   

3. **Set Up the Database**:
   - Ensure SQLite is installed.
   - Run the script to create and populate the database with the initial data:
     
     node setupDatabase.js
     

4. **Start the Server**:
   
   npm start
   

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **`public/`**: Contains static files such as CSS and JavaScript.
- **`views/`**: HTML templates for rendering the frontend.
- **`routes/`**: Express routes for API and page handling.
- **`setupDatabase.js`**: Script to set up and seed the SQLite database.

## Usage

- The main page displays real-time cryptocurrency data.
- Data updates every 30 seconds to ensure freshness.
- Toggle button functionality added for additional user interactions.

## License

This project is licensed under the MIT License.
