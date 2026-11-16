const projects = [
  {
    type: "corporate",
    name: "Corporate",
    desc: "Professional business website",
    image: "photo-1497366754035-f200968a6e72"
  },
  {
    type: "ecommerce",
    name: "E-commerce",
    desc: "Modern online shopping store",
    image: "photo-1441986300917-64674bd600d8"
  },
  {
    type: "restaurant",
    name: "Restaurant",
    desc: "Food and dining website",
    image: "photo-1517248135467-4c7edcad34c4"
  },
  {
    type: "portfolio",
    name: "Portfolio",
    desc: "Personal creative portfolio",
    image: "photo-1497366811353-6870744d04b2"
  },
  {
    type: "clinic",
    name: "Clinic",
    desc: "Healthcare website design",
    image: "photo-1519494026892-80bbd2d6fd0d"
  },
  {
    type: "hotel",
    name: "Hotel",
    desc: "Luxury hotel website",
    image: "photo-1566073771259-6a8506099945"
  },
  {
    type: "education",
    name: "Education",
    desc: "Modern education website",
    image: "photo-1523050854058-8df90110c9f1"
  },
  {
    type: "salon",
    name: "Salon",
    desc: "Beauty and salon website",
    image: "photo-1560066984-138dadb4c035"
  },
  {
    type: "construction",
    name: "Construction",
    desc: "Architecture and construction",
    image: "photo-1486406146926-c627a92ad1ab"
  },
  {
    type: "photography",
    name: "Photography",
    desc: "Creative photography gallery",
    image: "photo-1452587925148-ce544e77e70d"
  }
];

const demoData = {
  corporate: {
    title: "Building The Future Of Business",
    intro: "Smart business solutions for a better tomorrow.",
    label: "BUSINESS EXCELLENCE",
    sub: "Our Business Solutions",
    desc: "Professional services designed to help your business grow.",
    accent: "#c59b55",
    background: "#f5f2ec",
    text: "#202b36",
    muted: "#66717d",
    dark: "#182a3a",
    hero: "photo-1497366754035-f200968a6e72",
    cards: [
      ["Business Strategy", "photo-1486406146926-c627a92ad1ab"],
      ["Our Expertise", "photo-1497366216548-37526070297c"],
      ["Our Team", "photo-1521737711867-e3b97375f902"]
    ]
  },

  ecommerce: {
    title: "Style That Speaks",
    intro: "Discover a new collection of modern fashion.",
    label: "NEW SEASON COLLECTION",
    sub: "Featured Collection",
    desc: "Explore stylish products selected for you.",
    accent: "#a75c42",
    background: "#f8f1ed",
    text: "#30231f",
    muted: "#78665f",
    dark: "#35231e",
    hero: "photo-1441986300917-64674bd600d8",
    cards: [
      ["New Arrivals", "photo-1483985988355-763728e1935b"],
      ["Trending Fashion", "photo-1490481651871-ab68de25d43d"],
      ["Style Essentials", "photo-1542291026-7eec264c27ff"]
    ]
  },

  restaurant: {
    title: "Taste The Extraordinary",
    intro: "Fresh ingredients. Beautiful flavours. Unforgettable moments.",
    label: "FRESH FOOD · GREAT MOMENTS",
    sub: "Our Special Menu",
    desc: "Discover delicious food prepared with passion.",
    accent: "#a83e26",
    background: "#fff8f0",
    text: "#38251d",
    muted: "#806b5e",
    dark: "#281914",
    hero: "photo-1517248135467-4c7edcad34c4",
    cards: [
      ["Signature Dishes", "photo-1546069901-ba9599a7e63c"],
      ["Fresh Desserts", "photo-1565299624946-b28f40a0ae38"],
      ["Fine Dining", "photo-1555939594-58d7cb561ad1"]
    ]
  },

  portfolio: {
    title: "Ideas Into Visual Stories",
    intro: "A creative portfolio showcasing design and imagination.",
    label: "CREATIVE PORTFOLIO",
    sub: "Selected Works",
    desc: "A collection of creative projects and experiments.",
    accent: "#7554c7",
    background: "#f3f0fa",
    text: "#29233a",
    muted: "#756d86",
    dark: "#211a32",
    hero: "photo-1497366811353-6870744d04b2",
    cards: [
      ["Brand Design", "photo-1500530855697-b586d89ba3ee"],
      ["Creative Projects", "photo-1499951360447-b19be8fe80f5"],
      ["Digital Art", "photo-1513364776144-60967b0f800f"]
    ]
  },

  clinic: {
    title: "Your Health, Our Priority",
    intro: "Professional healthcare with care and compassion.",
    label: "CARE · TRUST · HEALTH",
    sub: "Our Medical Services",
    desc: "Quality care for a healthier tomorrow.",
    accent: "#168b91",
    background: "#effafa",
    text: "#173a40",
    muted: "#668184",
    dark: "#123c43",
    hero: "photo-1519494026892-80bbd2d6fd0d",
    cards: [
      ["General Care", "photo-1576091160399-112ba8d25d1d"],
      ["Expert Doctors", "photo-1551076805-e1869033e561"],
      ["Patient Support", "photo-1631815588090-d4bfec5b1ccb"]
    ]
  },

  hotel: {
    title: "Experience Luxury Living",
    intro: "Discover comfort, elegance and unforgettable stays.",
    label: "LUXURY · COMFORT · EXPERIENCE",
    sub: "Our Experiences",
    desc: "Enjoy exceptional hospitality and beautiful spaces.",
    accent: "#b08a4c",
    background: "#f7f2e9",
    text: "#352c20",
    muted: "#81745f",
    dark: "#282116",
    hero: "photo-1566073771259-6a8506099945",
    cards: [
      ["Luxury Rooms", "photo-1571896349842-33c89424de2d"],
      ["Fine Dining", "photo-1578683010236-d716f9a3f461"],
      ["Relaxation", "photo-1542314831-068cd1dbfeeb"]
    ]
  },

  education: {
    title: "Learn Today. Lead Tomorrow.",
    intro: "Unlock your potential with modern education.",
    label: "LEARN · GROW · ACHIEVE",
    sub: "Explore Our Programs",
    desc: "Learn new skills and build your future.",
    accent: "#2864b3",
    background: "#f0f5fc",
    text: "#1b3150",
    muted: "#687b96",
    dark: "#172c49",
    hero: "photo-1523050854058-8df90110c9f1",
    cards: [
      ["Technology", "photo-1509062522246-3755977927d7"],
      ["Business Studies", "photo-1523580494863-6f3031224c94"],
      ["Creative Learning", "photo-1503676260728-1c00da094a0b"]
    ]
  },

  salon: {
    title: "Beauty Begins With You",
    intro: "A place where style meets confidence.",
    label: "BEAUTY · STYLE · CONFIDENCE",
    sub: "Our Beauty Services",
    desc: "Discover beauty treatments and professional styling.",
    accent: "#bd648b",
    background: "#fff2f7",
    text: "#462b3b",
    muted: "#8a6a7b",
    dark: "#351c2b",
    hero: "photo-1560066984-138dadb4c035",
    cards: [
      ["Hair Styling", "photo-1522337360788-8b13dee7a37e"],
      ["Skin Care", "photo-1487412720507-e7ab37603c6f"],
      ["Beauty Treatments", "photo-1516975080664-ed2fc6a32937"]
    ]
  },

  construction: {
    title: "Creating Spaces. Building Dreams.",
    intro: "Innovative architecture and reliable construction.",
    label: "DESIGN · BUILD · INSPIRE",
    sub: "What We Build",
    desc: "From planning to completion, quality is our foundation.",
    accent: "#bb812e",
    background: "#f4f1eb",
    text: "#302b23",
    muted: "#797267",
    dark: "#29251f",
    hero: "photo-1486406146926-c627a92ad1ab",
    cards: [
      ["Modern Architecture", "photo-1600585154340-be6161a56a0c"],
      ["Commercial Spaces", "photo-1600607687939-ce8a6c25118c"],
      ["Residential Projects", "photo-1487958449943-2429e8be8625"]
    ]
  },

  photography: {
    title: "Every Picture Tells A Story",
    intro: "Capturing moments that last forever.",
    label: "CAPTURE · CREATE · REMEMBER",
    sub: "Our Photography",
    desc: "Explore a collection of beautiful visual stories.",
    accent: "#bca477",
    background: "#f2f0eb",
    text: "#262626",
    muted: "#77736c",
    dark: "#171717",
    hero: "photo-1452587925148-ce544e77e70d",
    cards: [
      ["Portraits", "photo-1534528741775-53994a69daeb"],
      ["Nature", "photo-1470770841072-f978cf4d019e"],
      ["Weddings", "photo-1519741497674-611481863552"]
    ]
  }
};

// CREATE PROJECT CARDS

const projectGrid = document.getElementById("projectGrid");

projects.forEach(function(project) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = "?demo=" + encodeURIComponent(project.type);

  const image = document.createElement("img");
  image.src = "https://images.unsplash.com/" + project.image + "?auto=format&fit=crop&w=900&q=85";
  image.alt = project.name + " website preview";
  image.loading = "lazy";

  const info = document.createElement("div");
  info.className = "project-card-info";

  const title = document.createElement("h3");
  title.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.desc;

  const linkText = document.createElement("span");
  linkText.textContent = "View Demo ↗";

  info.append(title, description, linkText);
  card.append(image, info);
  projectGrid.appendChild(card);
});

// SHOW THE SELECTED DEMO

function showDemo(type) {
  const demo = demoData[type];

  if (!demo) {
    return false;
  }

  document.getElementById("homePage").hidden = true;
  document.getElementById("demoPage").hidden = false;

  document.getElementById("demoEyebrow").textContent = demo.label;
  document.getElementById("demoTitle").textContent = demo.title;
  document.getElementById("demoIntro").textContent = demo.intro;
  document.getElementById("demoLabel").textContent = demo.label;
  document.getElementById("demoSubheading").textContent = demo.sub;
  document.getElementById("demoDescription").textContent = demo.desc;

  document.title = demo.title + " | APEXNODE";

  const hero = document.getElementById("demoHero");

  hero.style.backgroundImage =
    "linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.25)),url('https://images.unsplash.com/" +
    demo.hero + "?auto=format&fit=crop&w=1800&q=90')";

  document.documentElement.style.setProperty("--demo-accent", demo.accent);
  document.documentElement.style.setProperty("--demo-background", demo.background);
  document.documentElement.style.setProperty("--demo-text", demo.text);
  document.documentElement.style.setProperty("--demo-muted", demo.muted);
  document.documentElement.style.setProperty("--demo-dark", demo.dark);

  const cardContainer = document.getElementById("demoCards");
  cardContainer.replaceChildren();

  demo.cards.forEach(function(item) {
    const card = document.createElement("article");
    card.className = "demo-card";

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/" + item[1] +
      "?auto=format&fit=crop&w=800&q=85";
    image.alt = item[0];
    image.loading = "lazy";

    const heading = document.createElement("h3");
    heading.textContent = item[0];

    const paragraph = document.createElement("p");
    paragraph.textContent = demo.desc;

    card.append(image, heading, paragraph);
    cardContainer.appendChild(card);
  });

  document.getElementById("mainNav").hidden = true;
  window.scrollTo(0, 0);

  return true;
}

// HOME PAGE

function showHome() {
  document.getElementById("homePage").hidden = false;
  document.getElementById("demoPage").hidden = true;
  document.getElementById("mainNav").hidden = false;
  document.title = "APEXNODE | Website Development";
}

// CHECK URL AND DISPLAY THE CORRECT PAGE

function renderPage() {
  const params = new URLSearchParams(window.location.search);
  const selectedDemo = params.get("demo");

  if (selectedDemo && showDemo(selectedDemo)) {
    return;
  }

  showHome();
}

// BROWSER BACK AND FORWARD SUPPORT

window.addEventListener("popstate", renderPage);

renderPage();
