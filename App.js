import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('div', { id: "parent" }, [
    React.createElement('div', { id: "child", key: "child11" }, [
        React.createElement('h1', {}, "I am h1 tag"),
        React.createElement('h2', {}, "I am h2 tag")
    ]),
    React.createElement('div', { id: "child2", key: "child12" }, [
        React.createElement('h1', {}, "I am h1 tag"),
        React.createElement('h2', {}, "I am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);

console.log(header);