import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App COS420">
            <header className="App-header">
                COS420 with React Hooks and TypeScript with React Hooks and
                TypeScript upstream/task-functions COS420
            </header>
            <h2>COS420 Hello World</h2>
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
                automatically reload.COS420
            </p>
        </div>
    );
}

export default App;
