import { useState } from "react";

import "./app.scss";
import Header from "./components/Header";
import BmiForm from "./components/BmiForm";
import Result from "./components/Result";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="container">
      <Header />
      <BmiForm
        weight={weight}
        height={height}
        setHeight={setHeight}
        setWeight={setWeight}
        setResult={setResult}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
