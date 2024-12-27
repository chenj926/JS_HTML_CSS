function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    console.log(randomNum);
    let userInput = prompt("typpe a number");
    alert(`Computer's number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>
        GUess the number between 1 to 3
      </button>
    </div>
  );
}

export default App;
