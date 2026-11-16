const projects = [
  {type:"corporate",name:"Corporate Website",category:"Business · Professional",image:"photo-1497366811353-6870744d04b2"},
  {type:"restaurant",name:"Restaurant Website",category:"Food · Hospitality",image:"photo-1414235077428-338989a2e8c0"},
  {type:"ecommerce",name:"E-commerce Store",category:"Shopping · Fashion",image:"photo-1441986300917-64674bd600d8"},
  {type:"portfolio",name:"Creative Portfolio",category:"Personal · Creative",image:"photo-1498050108023-c5249f4df085"},
  {type:"clinic",name:"Healthcare Website",category:"Clinic · Medical",image:"photo-1519494026892-80bbd2d6fd0d"},
  {type:"hotel",name:"Luxury Hotel",category:"Travel · Hospitality",image:"photo-1566073771259-6a8506099945"},
  {type:"education",name:"Education Website",category:"Learning · Institute",image:"photo-1523050854058-8df90110c9f1"},
  {type:"salon",name:"Beauty & Salon",category:"Beauty · Lifestyle",image:"photo-1560066984-138dadb4c035"},
  {type:"construction",name:"Construction Website",category:"Architecture · Building",image:"photo-1486406146926-c627a92ad1ab"},
  {type:"photography",name:"Photography Website",category:"Visual · Portfolio",image:"photo-1452587925148-ce544e77e70d"}
];

const demos = {
  corporate:{brand:"NEXORA",category:"CORPORATE & BUSINESS",title:"Ideas that shape<br><em>the future.</em>",description:"We help ambitious businesses move forward with strategy, creativity and innovation.",button:"Discover Our Services",accent:"#b68c55",bg:"#f3eee6",dark:"#20251f",cards:["Business Strategy","Creative Solutions","Digital Growth"],image:"photo-1497366811353-6870744d04b2"},
  restaurant:{brand:"OLIVE & OAK",category:"RESTAURANT & DINING",title:"A taste worth<br><em>remembering.</em>",description:"Seasonal ingredients, thoughtful cooking and a dining experience made with love.",button:"Explore Our Menu",accent:"#a66d3f",bg:"#f5eee5",dark:"#30241d",cards:["Fresh Ingredients","Chef's Specials","Beautiful Moments"],image:"photo-1414235077428-338989a2e8c0"},
  ecommerce:{brand:"MODERN FORM",category:"FASHION & E-COMMERCE",title:"Wear your<br><em>own story.</em>",description:"Discover timeless pieces and everyday essentials designed for modern living.",button:"Shop Collection",accent:"#a98060",bg:"#f5f1ed",dark:"#24211f",cards:["New Arrivals","Everyday Style","Editor's Picks"],image:"photo-1441986300917-64674bd600d8"},
  portfolio:{brand:"ALEX MORGAN",category:"CREATIVE PORTFOLIO",title:"Creating beyond<br><em>the ordinary.</em>",description:"A creative designer exploring visual identities, digital experiences and bold ideas.",button:"Explore My Work",accent:"#d05b45",bg:"#f1efec",dark:"#171717",cards:["Brand Identity","Web Design","Creative Direction"],image:"photo-1498050108023-c5249f4df085"},
  clinic:{brand:"CAREWELL",category:"HEALTHCARE & CLINIC",title:"Care that puts<br><em>you first.</em>",description:"Compassionate care and modern healthcare services for you and your family.",button:"Explore Services",accent:"#239b91",bg:"#edf6f4",dark:"#163c3b",cards:["Expert Doctors","Patient Support","Modern Facilities"],image:"photo-1519494026892-80bbd2d6fd0d"},
  hotel:{brand:"THE GRAND ESCAPE",category:"HOTEL & HOSPITALITY",title:"Stay somewhere<br><em>extraordinary.</em>",description:"Discover thoughtful hospitality, beautiful spaces and unforgettable stays.",button:"Explore Rooms",accent:"#b79a68",bg:"#f2eee7",dark:"#25251f",cards:["Luxury Suites","Fine Dining","Relax & Unwind"],image:"photo-1566073771259-6a8506099945"},
  education:{brand:"NOVA ACADEMY",category:"EDUCATION & LEARNING",title:"Learn today.<br><em>Lead tomorrow.</em>",description:"Build new skills, discover your potential and take the next step in your journey.",button:"Explore Courses",accent:"#315fbd",bg:"#eff3fa",dark:"#172541",cards:["Expert Mentors","Flexible Learning","Career Growth"],image:"photo-1523050854058-8df90110c9f1"},
  salon:{brand:"THE BEAUTY ROOM",category:"BEAUTY & LIFESTYLE",title:"Your beauty.<br><em>Your moment.</em>",description:"A place to refresh, relax and feel your best with thoughtful beauty services.",button:"Explore Treatments",accent:"#b66b82",bg:"#f8eff2",dark:"#3b2630",cards:["Hair Styling","Skin Care","Beauty Rituals"],image:"photo-1560066984-138dadb4c035"},
  construction:{brand:"ARCHLINE",category:"CONSTRUCTION & ARCHITECTURE",title:"Building ideas<br><em>into reality.</em>",description:"Thoughtful architecture and quality construction for spaces that inspire.",button:"View Projects",accent:"#a98250",bg:"#f1f0ed",dark:"#202326",cards:["Architecture","Construction","Interior Design"],image:"photo-1486406146926-c627a92ad1ab"},
  photography:{brand:"FRAME & LIGHT",category:"PHOTOGRAPHY STUDIO",title:"Stories told<br><em>through light.</em>",description:"Capturing honest moments, beautiful details and memories that last.",button:"View Gallery",accent:"#a88a65",bg:"#f2f0eb",dark:"#22201d",cards:["Portraits","Events","Creative Stories"],image:"photo-1452587925148-ce544e77e70d"}
};

const homePage = document.getElementById("homePage");
const demoPage = document.getElementById("demoPage");
const header = document.getElementById("header");
const demoContent = document.getElementById("demoContent");

function photo(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map((project,index) => `
    <article class="project-card">
      <a href="?demo=${project.type}" class="project-image demo-link" data-type="${project.type}">
        <img src="${photo(project.image)}" alt="${project.name}">
        <span class="view-label">VIEW DEMO ↗</span>
      </a>
      <div class="project-info">
        <div><h3>${project.name}</h3><p>${project.category}</p></div>
        <span>${String(index+1).padStart(2,"0")}</span>
      </div>
    </article>
  `).join("");
}

function renderDemo(type) {
  const demo = demos[type] || demos.corporate;

  demoContent.innerHTML = `
    <div class="sample-site" style="--demo-bg:${demo.bg};--demo-dark:${demo.dark};--demo-accent:${demo.accent}">
      <nav class="sample-nav">
        <a class="sample-logo" href="#">${demo.brand}</a>
        <div class="sample-nav-links">
          <a href="#sample-about">About</a>
          <a href="#sample-services">Services</a>
          <a href="#sample-contact">Contact</a>
        </div>
        <a href="#sample-contact" class="sample-nav-btn">Get in touch ↗</a>
      </nav>

      <section class="sample-hero">
        <div>
          <span class="sample-kicker">${demo.category}</span>
          <h1>${demo.title}</h1>
          <p>${demo.description}</p>
          <a href="#sample-services" class="sample-btn">${demo.button} ↗</a>
        </div>
        <div class="sample-hero-img">
          <img src="${photo(demo.image)}" alt="${demo.brand}">
        </div>
      </section>

      <section class="sample-intro" id="sample-about">
        <span>WELCOME TO ${demo.brand}</span>
        <h2>Designed with purpose.<br>Created with passion.</h2>
        <p>We believe great experiences begin with great ideas. Discover what makes our approach different.</p>
      </section>

      <section class="sample-services" id="sample-services">
        <span>WHAT WE OFFER</span>
        <h2>Discover the difference.</h2>
        <div class="sample-cards">
          ${demo.cards.map((card,index)=>`
            <article class="sample-card">
              <small>0${index+1}</small>
              <h3>${card}</h3>
              <p>Thoughtful solutions and quality experiences created around your needs.</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="sample-showcase">
        <img src="${photo(demo.image)}" alt="${demo.brand} showcase">
        <div><span>THE ${demo.brand} EXPERIENCE</span><h2>Made to inspire.</h2></div>
      </section>

      <section class="sample-cta" id="sample-contact">
        <span>LET'S CONNECT</span>
        <h2>Ready to begin<br>something great?</h2>
        <a class="sample-btn" href="mailto:affreen.r.dev456@gmail.com?subject=${encodeURIComponent("Enquiry about "+demo.brand)}">Contact Us ↗</a>
      </section>

      <div class="sample-footer"><strong>${demo.brand}</strong><span>WEBSITE CONCEPT BY APEXNODE</span></div>
    </div>
  `;

  document.title = `${demo.brand} | APEXNODE Demo`;
}

function showHome(push = true) {
  if (push && new URLSearchParams(location.search).has("demo")) {
    history.pushState({}, "", location.pathname + location.hash);
  }
  homePage.hidden = false;
  demoPage.hidden = true;
  header.hidden = false;
  document.title = "APEXNODE | Digital Experiences";
  window.scrollTo(0, 0);
}

function showDemo(type, push = true) {
  if (!demos[type]) type = "corporate";

  if (push) {
    history.pushState({demo:type}, "", `?demo=${encodeURIComponent(type)}`);
  }

  renderDemo(type);
  homePage.hidden = true;
  demoPage.hidden = false;
  header.hidden = true;
  window.scrollTo(0, 0);
}

function renderRoute() {
  const type = new URLSearchParams(location.search).get("demo");
  if (type) {
    showDemo(type, false);
  } else {
    homePage.hidden = false;
    demoPage.hidden = true;
    header.hidden = false;
    document.title = "APEXNODE | Digital Experiences";
  }
}

document.addEventListener("click", event => {
  const link = event.target.closest(".demo-link");
  if (link) {
    event.preventDefault();
    showDemo(link.dataset.type);
  }
});

document.getElementById("backButton").addEventListener("click", showHome);
document.getElementById("bottomBack").addEventListener("click", showHome);
document.getElementById("brandHome").addEventListener("click", event => {
  if (!homePage.hidden) {
    event.preventDefault();
    showHome();
  }
});

window.addEventListener("popstate", renderRoute);

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => nav.classList.toggle("open"));

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("New Website Enquiry - APEXNODE");
  const body = encodeURIComponent(
    `Hello APEXNODE,\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nProject Details:\n${message}`
  );

  window.location.href = `mailto:affreen.r.dev456@gmail.com?subject=${subject}&body=${body}`;
});

renderProjects();
renderRoute();
