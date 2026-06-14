import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContainer from './MainContainer';

const App = () => {
    return (
        <div className="app">
            <MainContainer />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);