import React, { useState } from "react";
// import logo from "./logo.svg";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [WinMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    // logic for reload game
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {

    //
    if (itemArray[0] === itemArray[1] &&  //row 1
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    } else if (                             //row 2
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinMessage(`${itemArray[3]} wins`, toast(`${itemArray[3]} wins`, { type: "success" }))
    }

    else if (                            //row 3
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinMessage(`${itemArray[6]} wins`, toast(`${itemArray[6]} wins`, { type: "success" }))

    }
    else if (                                 //col 1
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    }
    else if (                                 //col 2
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinMessage(`${itemArray[1]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    }
    else if (                                 //col 3
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    }
    else if (                                   //diagonal 1
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    }
    else if (                                   //diagonal 2
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} wins`, toast(`${itemArray[0]} wins`, { type: "success" }))
    }


  };

  const changeItem = itemNumber => {
    //logic for changeitem
    if (WinMessage) {
      return toast(WinMessage, { type: "success" })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross); //flip the cross to true.

    } else {
      return toast("already filled", { type: "error" })
    }
    checkIsWinner();
  }

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">

          {WinMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary text-uppercase text-center">
                {WinMessage}
              </h1>
              <Button color="success"
                block
                onClick={reloadGame}
              >Reload the Game</Button>
            </div>
          ) : (
              <h1 className="text-center text-warning">
                {isCross ? "cross" : "circle"} turns
              </h1>
            )}

          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="warning" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
