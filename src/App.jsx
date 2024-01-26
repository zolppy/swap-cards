import './App.css';

export default function App() {
  function f() {
    const card = document.querySelector("#card");
    const anotherCard = document.querySelector("#another-card");

    if (card.classList.contains("go")) {
      card.classList.remove("go");
      card.classList.add("back");
    } else {
      card.classList.contains("back") && card.classList.remove("back");
      card.classList.add("go");
    }

    if (anotherCard.classList.contains("go")) {
      anotherCard.classList.remove("go");
      anotherCard.classList.add("back");
    } else {
      anotherCard.classList.contains("back") && anotherCard.classList.remove("back");
      anotherCard.classList.add("go");
    }
  }

  return (
    <div id="App">
      <div id='card-wrapper'>
        <div id="card">F</div>
        <div id="another-card">B</div>
      </div>
      <button type="button" onClick={f}>Trocar</button>
    </div>
  );
}