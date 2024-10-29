import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/rating/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is APP Component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={5} />
      <Accordion titleValue={"Menu"} collapsed={false} />
      <Accordion titleValue={"Users"} collapsed={true} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
