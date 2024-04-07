# Emmet

Emmet is a tool that helps people who make websites write their code faster. It lets them use shortcuts instead of typing out everything from scratch. This saves time and makes coding easier.

In the below example, by using `! + TAB` we have generated a HTML boilerplate using Emmet.

# Difference between a Library and Framework

## Library

A library is a collection of reusable code that provides specific functionalities. It offers functions or modules that you can call upon in your program to perform tasks. You control when and how you use the functions from the library in your code.

## Framework

A framework is a structured environment that provides a foundation for developing software applications. It offers a set of rules, conventions, and predefined functionalities to streamline the development process. When using a framework, your application's flow and structure are largely dictated by the framework itself, and you build upon it to create your application.

# CDN (Content Delivery Network)

A CDN, or Content Delivery Network, is a network of distributed servers that work together to deliver web content to users based on their geographic location. Instead of serving content from a single server, a CDN caches content on multiple servers located in various locations around the world. When a user requests content, the CDN delivers it from the server nearest to the user, reducing latency and improving loading times.

# Why is React known as React?

React is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

# What is crossorigin in the script tag?

The crossorigin attribute in the script tag is used to specify whether a script should be fetched with CORS (Cross-Origin Resource Sharing) restrictions. It is primarily used when loading scripts from a different domain or origin.

The crossorigin attribute can have the following values:

"anonymous": This value indicates that the script should be fetched without sending any credentials (such as cookies or HTTP authentication) along with the request. This is the default behavior if the attribute is not specified.

"use-credentials": This value indicates that the script should be fetched with credentials, such as cookies or HTTP authentication, if available.

# Difference between React and ReactDOM

React is the library responsible for defining components and managing their lifecycle, while ReactDOM is responsible for rendering those components to the DOM and updating them when necessary. They work together to enable the creation of dynamic and interactive user interfaces in web applications.

# Difference between react.development.js and react.production.js

react.development.js: This version of React is for development. It includes extra tools and information helpful for debugging and development.

react.production.js: This version of React is for production. It's optimized for performance and doesn't include the extra debugging tools, making it smaller and faster for deployment in live applications.

# What is async and defer?

Async - The async attribute is a boolean attribute . The script is downloaded in
parallel(in the background) to parsing the page, and executed as soon as it is available
(do not block HTML DOM construction during downloading process) and don’t wait for
anything.
Syntax

<script async src="script.js"></script>

Defer - The defer attribute is a boolean attribute . The script is downloaded in
parallel(in the background) to parsing the page, and executed after the page has finished
parsing(when browser finished DOM construction). The defer attribute tells the
browser not to wait for the script . Instead, the browser will continue to process the
HTML, build DOM.
Syntax

<script defer src="script.js"></script>
