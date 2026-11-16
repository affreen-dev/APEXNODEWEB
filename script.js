// OPEN DEMO
function showDemo(type) {
  const homePage = document.getElementById("homePage");
  const demoPage = document.getElementById("demoPage");
  const demoContent = document.getElementById("demoContent");

  if (!homePage || !demoPage || !demoContent) {
    console.error("Demo HTML elements are missing!");
    return;
  }

  const demo = demos[type];

  if (!demo) {
    console.error("Demo not found:", type);
    return;
  }

  homePage.hidden = true;
  demoPage.hidden = false;

  demoContent.innerHTML = `
    <section class="sample-site">
      <nav class="sample-nav">
        <h2>${demo.name}</h2>
        <span>Home　 About　 Services　 Contact</span>
      </nav>

      <section class="sample-hero">
        <div>
          <p>${demo.tagline}</p>
          <h1>${demo.heading}</h1>
          <p>${demo.description}</p>
          <a href="#demo-services" class="sample-button">
            Explore More
          </a>
        </div>
        <img src="${demo.image}" alt="${demo.name} website preview">
      </section>

      <section class="sample-showcase" id="demo-services">
        <h2>${demo.sectionTitle}</h2>
        <div class="sample-cards">
          ${demo.cards.map(card => `
            <article class="sample-card">
              <img src="${card.image}" alt="${card.title}">
              <h3>${card.title}</h3>
              <p>${card.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </section>
  `;

  window.history.pushState({ demo: type }, "", `?demo=${type}`);
  window.scrollTo(0, 0);
}

// VIEW DEMO BUTTON CLICK
document.addEventListener("click", function(event) {
  const link = event.target.closest(".demo-link");

  if (!link) return;

  event.preventDefault();
  showDemo(link.dataset.type);
});

// BACK BUTTONS
document.getElementById("backButton")?.addEventListener("click", goHome);
document.getElementById("bottomBack")?.addEventListener("click", goHome);

function goHome() {
  document.getElementById("demoPage").hidden = true;
  document.getElementById("homePage").hidden = false;

  window.history.pushState({}, "", window.location.pathname);
  window.scrollTo(0, 0);
}

// BROWSER BACK BUTTON
window.addEventListener("popstate", function() {
  const type = new URLSearchParams(window.location.search).get("demo");

  if (type && demos[type]) {
    showDemoFromHistory(type);
  } else {
    document.getElementById("demoPage").hidden = true;
    document.getElementById("homePage").hidden = false;
  }
});

function showDemoFromHistory(type) {
  const demo = demos[type];
  if (!demo) return;

  document.getElementById("homePage").hidden = true;
  document.getElementById("demoPage").hidden = false;

  const demoContent = document.getElementById("demoContent");

  demoContent.innerHTML = `
    <h1>${demo.heading}</h1>
    <p>${demo.description}</p>
  `;

  window.scrollTo(0, 0);
}
