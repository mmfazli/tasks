import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h2>Mohammed Fazli COS420 Hello World</h2>
            <ul>
                <li>List</li>
                <li>List</li>
                <li>List</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div id="rectangle"></div>
                        <Button onClick={() => console.log("I am logged")}>
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
                automatically reload. COS420
            </p>
        </div>
    );
}

export default App;
