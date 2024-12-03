Simple URL Shortener
A simple URL shortener application built with Express.js. This app allows users to input a long URL, get a shortened version of it, and be redirected to the original URL when accessing the short URL.

Features
URL Shortening: Convert long URLs into short, easy-to-remember links.
Redirection: Visit the shortened URL to be redirected to the original URL.
Database Support: Store URLs in a MongoDB database for persistent storage.
Installation
Prerequisites
Ensure that you have Node.js and MongoDB installed on your machine.
1. Clone the repository
git clone https://github.com/your-username/simple-url-shortener.git
cd simple-url-shortener
2. Install dependencies
npm install
3. Set up environment variables
Create a .env file in the root directory of your project and add the following variables:
PORT=8000
MONGO_URI=mongodb://localhost:27017/url_shortener
4. Run the application
npm start

