import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Details from "./components/Details";

function App() {
  return (
    <main className="text-gray-500 font-inter py-16 px-6 selection:bg-blue-500 selection:text-white">
      <Calculator />

      <hr className="my-8 border-gray-100" />

      <Details />
    </main>
  );
}

export default App;
