import Game from "./Components/Game";
import MainScreen from "./Components/MainScreen";
import { useState } from "react";

const App = () => {
  const [isMain, setIsMain] = useState(true);
  const handleTogglePage = () => {
    setIsMain((prev) => !prev);
  };
  return <>{isMain ? <MainScreen togglePage={handleTogglePage} /> : <Game togglePage={handleTogglePage} />}</>;
};

export default App;
