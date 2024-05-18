function RollDice() {
  const numberInput = document.getElementById("numberInput").value;
  const DiceResult = document.getElementById("DiceResult");
  const DiceImage = document.getElementById("DiceImage");
  const values = [];
  const images = [];

  for (let i = 0; i < numberInput; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png">`);
  }
  DiceResult.textContent = `Dice ${values.join(", ")}`;
  DiceImage.innerHTML = images.join("");
}
