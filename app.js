// Scores for players 1–3
const scores = [0, 0, 0, 0]; // index 0 ignored

function addScore(player, delta) {
  scores[player] += delta;
  document.getElementById("score-" + player).textContent = scores[player];
}

function resetScores() {
  for (let i = 1; i <= 3; i++) {
    scores[i] = 0;
    document.getElementById("score-" + i).textContent = "0";
  }
}

function updateName(player) {
  const input = document.getElementById("name-" + player);
  const name = input.value.trim() || "Player " + player;
  document.getElementById("player-name-" + player).textContent = name;
}

// Prompt arrays
const quickFireCategories = [
  "Say a good morning habit.",
  "Say a bad study habit.",
  "Say something people do too much on their phone.",
  "Say one healthy habit.",
  "Say one habit that wastes time.",
  "Say a habit that helps with sleep.",
  "Say a habit that helps you focus.",
  "Say a bad habit with food.",
  "Say a habit that helps you save money.",
  "Say a habit that is good for mental health."
];

const challengeCards = [
  "Explain a good habit using ONLY 5 words.",
  "Act out a habit silently. Others must guess.",
  "Say 3 bad habits in 10 seconds.",
  "Create a NEW habit for university students.",
  "Describe a habit using an animal metaphor.",
  "Say one habit you want but don’t have yet.",
  "Give one tip for better sleep.",
  "Say one habit you want to stop doing.",
  "Say a habit that helps you in exams.",
  "Say one small habit that makes your day better."
];

const duelTopics = [
  "Name habits that help you study better.",
  "Name habits that help you stay healthy.",
  "Name habits that make your day worse.",
  "Name habits that use a smartphone.",
  "Name habits that help you learn English.",
  "Name habits that help you save time.",
  "Name habits that make you tired.",
  "Name habits that help you wake up early."
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function nextQuickFire() {
  document.getElementById("quickfire-text").textContent =
    randomItem(quickFireCategories);
}

function nextChallenge() {
  document.getElementById("challenge-text").textContent =
    randomItem(challengeCards);
}

function nextDuel() {
  document.getElementById("duel-text").textContent =
    randomItem(duelTopics);
}
