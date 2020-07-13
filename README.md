# Static Content challenge

## Challenge instructions

Create a node.js application that displays HTML pages at URLs that match the names of the folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content.

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page.


## Instructions for running the app and tests

### Setting up

1. Clone the repository ```git clone git@github.com:amybalmforth/static-content.git```

2. Move into the directory ```cd static-content```

3. Install the required dependencies ```npm install```

### Running the tests

```
npm test
```

### Running the app

1. ```npm start``` to start the server
2. In the browser, navigate to http://localhost:3000/ plus the desired directory: `/about-page`, `/jobs` or `/valves`.


## My approach

After consideration, I decided to break the problem down into steps which I'd tackle one by one:

1. Set up routes for `/about-page`, `/jobs` and `/valves`
2. Work out how to serve the corresponding content markdown files on each route (e.g. content/about-page/index.md served on the route `/about-page`)
3. Find a way to copy the URL from the route and convert this to a path which points to the corresponding content file
4. Work out how to serve template.html on each route
5. Find a way to convert markdown text to HTML text with tags
6. Find a way to insert dynamic content at a specific placeholder within template.html
7. Select a testing library which can cover testing HTTP response codes and testing the HTTP response body


## Technologies chosen

* I decided to use Express as I was already familiar with it as a lightweight Node framework that allowed adding routes.

* I found there were a few libraries which can convert markdown to HTML, and chose markdown-it as it seemed fairly straightforward to use.

* I found there were a range of options to cover inserting dynamic content into an HTML template, however most of these template engines (such as Jade and EJS) required a specialised file extension (such as .jade and .ejs). I considered that it could probably be done using JQuery to append content to a specific HTML tag, but that would have required adding an additional file containing JQuery and inserting a <script> link within template.html. I eventually chose Mustache as it was lightweight, allowed me to keep the .html file extension and only required moving template.html to a directory /views and adding an extra curly brace around {{content}} in template.html (this was required by Mustache to allow the unescaped HTML to render)

* After researching testing framework options, I chose to use Mocha with Chai and Chai-http, as it covered the requirements I needed and allowed running the tests from the command line. I added Istanbul (nyc) to show test coverage.


## Other points

* The function formatFile() does the following: 1) takes the request URL 2) reads the corresponding markdown file 3) converts it to HTML. As this function behaves the same way for each route, I decided to use one app.get() function for all three routes, putting the permitted routes into an array.

* If more permitted routes were to be added in future, these could be added to the array. However, the file structure would need to remain the same (i.e. a directory named after the route would have to be put into /content and the markdown file would have to be named index.md).
