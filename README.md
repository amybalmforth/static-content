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
2. In the browser, navigate to http://localhost:3000/ plus the desired directory: */about-page*, */jobs* or */valves*.

## Decisions made
