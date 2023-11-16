import "./styles.css";
import Input from "./Components/Input";
import DisplayData from "./Components/DisplayData";

//main function
export default function App() {
  return (
    <div className="App container">
      <h2>Zip Code Information App</h2>
      <Input />
      <DisplayData />
    </div>
  );
}
