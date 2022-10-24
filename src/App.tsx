import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App COS420">
            <header className="App-header">
<<<<<<< HEAD
                HEAD COS420 with React Hooks and TypeScript with React Hooks and
                TypeScript upstream/task-functions COS420 UM COS420 with React
                Hooks and TypeScript upstream/task-arrays
=======
                UM COS420 with React Hooks and TypeScript
>>>>>>> upstream/task-objects
            </header>
            <h1>Mohammed Fazli</h1>
            <ul>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div id="rectangle"></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <img
                            src="beach.jpg"
                            alt="beach"
                            width="600"
                            height="600"
                        ></img>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
