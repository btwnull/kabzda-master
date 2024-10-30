import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating, RatingValueType } from "./components/rating/Rating";
import { UncontrolledOnOff } from "./components/onOff/UncontrolledOnOff";
import { UncontrolledAccordion } from "./components/accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/rating/UncontrolledRating";
import { OnOff } from "./components/onOff/OnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [switchOn, setSwitchOn] = useState<boolean>(false);

  return (
    <div className="App">
      <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}
      <OnOff on={switchOn} onChange={setSwitchOn} />
      <Accordion
        titleValue={"menu"}
        collapsed={accordionCollapsed}
        onChange={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledRating />
      <Rating value={ratingValue} onClick={setRatingValue} />
    </div>
  );
}

export default App;
