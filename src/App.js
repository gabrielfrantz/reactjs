import { useEffect, useState } from "react";

function App() {

  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      <Title text="Olá" />
      {isOn && <Input />}
      <button onClick={() => setIsOn((prev) => !prev)}>remove</button>
    </div>
  );
};

const Title = ({ text = "Texto padrão" }) => {
  return (
    <h1>{text}</h1>
  );
};

const Input = () => {
  const [valor, setValor] = useState("");
  useEffect(() => {
    document.title = "OmegaSec"
    console.log("effect")
    return () => {
      document.title = "React App"
    }
  }, [])

  const handleInputChange = (event) => {
    const { value } = event.target;
    setValor(value);
  }

  return (
    <input type={"text"} value={valor} onChange={handleInputChange}></input>
  );
};

export default App;
