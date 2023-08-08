import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./Components/Accordian";

function App() {
  const faq = [
    {
      title: "What is react ?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal dist",
    },
    {
      title: "How does rect work?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal dist",
    },
    {
      title: "What is virtual DOM ?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal dist",
    },
    {
      title: "Explain useState hook",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal dist",
    },
    {
      title: " What is lazy loading? ",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal dist",
    },
  ];

  return (
    <>
      <Accordian faq={faq} />
    </>
  );
}

export default App;
