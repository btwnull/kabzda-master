import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";
import { OnOff } from "./components/onOff/OnOff";
import { UncontrolledAccordion } from "./components/accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";

function App() {
  return (
    <div className="App">
      <OnOff />

      <Accordion titleValue={"Menu"} collapsed={false} />
      <Accordion titleValue={"Users"} collapsed={true} />
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledRating />
      <Rating value={3} />
    </div>
  );
}

export default App;
