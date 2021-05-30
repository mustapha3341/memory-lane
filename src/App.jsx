import { useState } from "react";

// screens
import GameScreen from "./screens/GameScreen";
import PauseScreen from "./screens/PauseScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import WinnerScreen from "./screens/WinnerScreen";

const App = (props) => {
    const [startGame, setStartGame] = useState(false);
    const [pauseGame, setPauseGame] = useState(false);

    const handleStartGame = () => {};
    const handlePauseGame = () => {};

    return (
        <div className="game--screen">
            <h1>Memory Game 😀</h1>
        </div>
    );
};

export default App;
