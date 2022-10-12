import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h2>Mohammed Fazli COS420 Hello World</h2>
            <img src="beach.jpg" alt="beach" width="600" height="600"></img>
            <ul>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. COS420
            </p>
        </div>
    );
}

export default App;
