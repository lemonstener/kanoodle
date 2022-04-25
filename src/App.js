import logo from "./logo.svg";
import "./App.css";
import NoodleHolder from "./NoodleHolder/NoodleHolder";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PuzzleBoard from "./PuzzleBoard/PuzzleBoard";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <PuzzleBoard />
      </div>
    </DndProvider>
  );
}

export default App;
