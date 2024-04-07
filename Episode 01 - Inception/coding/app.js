const heading = React.createElement('h1', { id: "heading" },
    "hello from react ");
console.log(heading);
root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)