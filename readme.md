### DOM (Document Object Model) 

In this repo I explore the concept of DOM, by providing a somewhat creative and minimal implementation of an HTML document.

A standard HTML template looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    <main>
        <h1>Welcome to My Website</h1>  
    </main>
    <script src="index.js"></script>
  </body>
</html>
```

You can run this little project in your browser, by opening `index.html`.

Notice the difference between the above template, and this implementation. 
The entire document tree is built in `index.js`, where the `document` object is used to create elements, and eventually append them to the root. 

The first of two buttons is used to showcase how a static HTML document can become a dynamic playground by modifying elements' style and add animation to them. 

I have tried to use some if not most of ES6's features, to show how relevant the DOM still is, and how a simple HTML page can gaion a state, dynamic style, etc etc

The second button generates a table, which enumerates the DOM's main features and properties, and provide a native view into what's happening under the hood. 

Finally, for the sake of completion, I have also included a little definition of the "Virtual DOM", which is an extension to this, and allows for frameworks like ReactJs and VueJS to be such hits in today's world. 