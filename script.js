const levels = [
  {
    story: "Te despiertas en un laboratorio abandonado. Todo está oscuro y una puerta oxidada bloquea tu salida...",
    question: "¿Cuál es el resultado de 12 ÷ 4?",
    options: ["2", "3", "4", "6"],
    answer: "3"
  },
  {
    story: "Escuchas pasos... algo se acerca. Un zombi. ¡Solo podrás escapar si activas el código correcto!",
    question: "¿Qué planeta está más cerca del Sol?",
    options: ["Venus", "Marte", "Mercurio", "Tierra"],
    answer: "Mercurio"
  },
  {
    story: "Un puente colapsa frente a ti. Para cruzar, debes calcular la distancia correcta.",
    question: "Si caminas 5km cada hora, ¿cuánto avanzas en 3 horas?",
    options: ["8km", "10km", "15km", "20km"],
    answer: "15km"
  }
];

let currentLevel = 0;

function loadLevel() {
  const level = levels[currentLevel];
  document.getElementById("story").textContent = level.story;
  document.getElementById("question").textContent = level.question;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  level.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(selected) {
  const level = levels[currentLevel];
  const resultDiv = document.getElementById("result");

  if (selected === level.answer) {
    resultDiv.textContent = "✅ Has sobrevivido este nivel.";
    document.getElementById("nextBtn").style.display = "block";
  } else {
    resultDiv.textContent = "☠️ Te atraparon... Fin del juego.";
    document.getElementById("options").innerHTML = "";
  }
}

document.getElementById("nextBtn").onclick = () => {
  currentLevel++;
  if (currentLevel < levels.length) {
    loadLevel();
  } else {
    document.getElementById("story").textContent = "🎉 ¡Has sobrevivido a todos los niveles!";
    document.getElementById("question").textContent = "";
    document.getElementById("options").innerHTML = "";
    document.getElementById("result").textContent = "";
    document.getElementById("nextBtn").style.display = "none";
  }
};

loadLevel();
