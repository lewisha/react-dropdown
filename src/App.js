import "./styles.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
export default function App() {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];

  return (
    <div className="App">
      <Dropdown options={options} value={defaultOption} />
    </div>
  );
}
