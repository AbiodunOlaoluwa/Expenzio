import './App.css';

function App() {
  return (
    <div className="App">
      <div className="descriptionField">
        <label htmlFor="descriptionInput" className="descriptionLabel">
          Description
        </label>
        <input type="text" id="descriptionInput" />
      </div>
    </div>
  );
}

export default App;