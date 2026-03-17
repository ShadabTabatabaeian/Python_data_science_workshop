const sessions = [
  {
    id: "01-python-foundations",
    title: "Session 1: Python Foundations",
    topics: "sessions/01-python-foundations/topics.html",
    challenge: "sessions/01-python-foundations/challenge.html",
  },
  {
    id: "02-data-wrangling",
    title: "Session 2: Data Wrangling",
    topics: "sessions/02-data-wrangling/topics.html",
    challenge: "sessions/02-data-wrangling/challenge.html",
  },
  {
    id: "03-data-viz",
    title: "Session 3: Data Visualization",
    topics: "sessions/03-data-viz/topics.html",
    challenge: "sessions/03-data-viz/challenge.html",
  },
  {
    id: "04-stats-probability",
    title: "Session 4: Stats & Probability",
    topics: "sessions/04-stats-probability/topics.html",
    challenge: "sessions/04-stats-probability/challenge.html",
  },
  {
    id: "05-ml-intro",
    title: "Session 5: Intro to ML",
    topics: "sessions/05-ml-intro/topics.html",
    challenge: "sessions/05-ml-intro/challenge.html",
  },
  {
    id: "06-capstone",
    title: "Session 6: Capstone",
    topics: "sessions/06-capstone/topics.html",
    challenge: "sessions/06-capstone/challenge.html",
  },
];

const sessionList = document.getElementById("sessionList");
const searchInput = document.getElementById("searchInput");

function renderSessions(filter = "") {
  sessionList.innerHTML = "";
  const filtered = sessions.filter((s) => s.title.toLowerCase().includes(filter));
  filtered.forEach((s) => {
    const item = document.createElement("div");
    item.className = "session-item";

    const title = document.createElement("div");
    title.className = "session-title";
    title.textContent = s.title;

    const actions = document.createElement("div");
    actions.className = "session-actions";

    const topics = document.createElement("a");
    topics.className = "btn";
    topics.textContent = "Topics";
    topics.href = s.topics;
    topics.target = "_blank";
    topics.rel = "noreferrer";

    const challenge = document.createElement("a");
    challenge.className = "btn";
    challenge.textContent = "Challenge";
    challenge.href = s.challenge;
    challenge.target = "_blank";
    challenge.rel = "noreferrer";

    actions.appendChild(topics);
    actions.appendChild(challenge);

    item.appendChild(title);
    item.appendChild(actions);

    sessionList.appendChild(item);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    renderSessions(e.target.value.toLowerCase());
  });
}

if (sessionList) {
  renderSessions();
}
