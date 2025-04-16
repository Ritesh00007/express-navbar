Three-Route Express Application with Flexbox Navigation
CSC 317 Homework Assignment
This project is a Node.js/Express application that hosts three separate routes, each corresponding to a unique assignment:

Climate Crisis
Typesetting
Four Algorithms

The application features a navbar built with flexbox that allows users to navigate between these routes. Each route redirects to the GitHub repository for the corresponding assignment.
Project Structure

.
├── public
│   ├── index.html  <- Main HTML file with flexbox navbar
│   └── styles.css  <- CSS styling for the application
├── server.js       <- Express server with route definitions
├── package.json    <- Project dependencies
└── README.md       <- Project documentation
Installation Instructions


Clone this repository:

git clone https://github.com/yourusername/express-navbar-project.git
cd express-navbar-project

Install dependencies:
npm install


How to Run

Start the server:
npm start

Open your browser and navigate to:
http://localhost:3000


Important Notes

The index.html and styles.css files must be placed in the public folder for Express to serve them correctly
The server is configured to listen on port 3000 by default, but will use the environment port if deployed

Technologies Used

Node.js
Express.js
HTML5
CSS3 (Flexbox)
Font Awesome for icons

Deployment
This application is deployed on Glitch at:
https://grass-internal-alphabet.glitch.me/
GitHub Repository
https://github.com/yourusername/express-navbar-project
