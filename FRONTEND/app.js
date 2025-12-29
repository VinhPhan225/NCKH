function getMeal() {
  fetch("http://localhost:3000/meal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      weight: weight.value,
      height: height.value,
      age: age.value,
      goal: goal.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => (result.innerText = "Thực đơn gợi ý: " + data.meal));
}

function askAssistant() {
  fetch("http://localhost:3000/assistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: question.value }),
  })
    .then((res) => res.json())
    .then((data) => (answer.innerText = data.reply));
}
