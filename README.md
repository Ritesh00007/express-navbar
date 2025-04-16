# Three-Route Express Application with Flexbox Navigation

## CSC 317 Homework Assignment

This project is a Node.js/Express application that hosts three separate routes, each corresponding to a unique assignment:

1. Climate Crisis
2. Typesetting
3. Four Algorithms

The application features a navbar built with flexbox that allows users to navigate between these routes. Each route redirects to the GitHub repository for the corresponding assignment.

## Project Structure

├── public/

│   ├── index.html     # Main HTML file with flexbox navbar

│   └── styles.css     # CSS styling for the application

├── server.js          # Express server with route definitions

├── package.json       # Project dependencies

└── README.md          # Project documentation

## Installation Instructions

1. Clone this repository:
git clone https://github.com/yourusername/express-navbar-project.git
cd express-navbar-project

2. Install dependencies:
npm install

## How to Run

1. Start the server:
npm start

2. Open your browser and navigate to:
http://localhost:3000

## Important Notes

- The `index.html` and `styles.css` files must be placed in the `public` folder for Express to serve them correctly
- The server is configured to listen on port 3000 by default, but will use the environment port if deployed

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3 (Flexbox)
- Font Awesome for icons

## Deployment

This application is deployed on Glitch at:
https://grass-internal-alphabet.glitch.me/

## GitHub Repository

https://github.com/Ritesh00007/express-navbar-project

