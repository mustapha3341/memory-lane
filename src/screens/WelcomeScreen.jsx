const WelcomeScreen = () => {
    return (
        <div className="welcome--screen">
            <div className="welcome--screen-container">
                <h1 className="welcome--message">Welcome to Memory Lane 😀</h1>
                <p className="welcome--instruction">
                    Please enter your alias below to start game
                </p>
                <form className="welcome--form">
                    <input
                        type="text"
                        name="alias"
                        className="alias--input"
                        placeholder="@arewa_coder"
                    />
                    <button className="start--btn" type="submit">
                        Start Game
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WelcomeScreen;
