
// =====================================
// APEXNODE - WEBSITE JAVASCRIPT
// =====================================

const projects = [
  {
    name: "Corporate Website",
    category: "Business",
    description: "A professional website for companies and businesses.",
    brand: "NEXORA",
    title: "Building The Future Of Business",
    subtitle: "We help businesses grow with innovative solutions and professional services.",
    color: "#2563eb",
    features: ["Professional Solutions", "Expert Team", "Business Growth"]
  },
  {
    name: "E-commerce Website",
    category: "Online Store",
    description: "A modern online shopping website for products.",
    brand: "SHOPORA",
    title: "Discover Your Perfect Style",
    subtitle: "Explore our latest collection and find products you will love.",
    color: "#9333ea",
    features: ["Latest Collection", "Easy Shopping", "Quality Products"]
  },
  {
    name: "Restaurant Website",
    category: "Food & Dining",
    description: "An attractive website for restaurants and cafes.",
    brand: "TASTY TABLE",
    title: "Good Food. Great Moments.",
    subtitle: "Fresh ingredients, delicious flavours and unforgettable dining experiences.",
    color: "#ea580c",
    features: ["Fresh Ingredients", "Special Menu", "Online Reservations"]
  },
  {
    name: "Personal Portfolio",
    category: "Portfolio",
    description: "A personal portfolio to showcase skills and projects.",
    brand: "ALEX DESIGN",
    title: "Creative Ideas. Digital Experiences.",
    subtitle: "I design and build meaningful digital experiences for people and brands.",
    color: "#0d9488",
    features: ["Web Design", "Creative Projects", "My Experience"]
  },
  {
    name: "Clinic Website",
    category: "Healthcare",
    description: "A clean and professional website for clinics.",
    brand: "CAREPLUS",
    title: "Your Health. Our Priority.",
    subtitle: "Quality healthcare and compassionate support for you and your family.",
    color: "#0891b2",
    features: ["Expert Doctors", "Patient Care", "Book Appointment"]
  },
  {
    name: "Hotel Website",
    category: "Hospitality",
    description: "An elegant hotel website with room information.",
    brand: "GRAND PALACE",
    title: "Experience Comfort & Luxury",
    subtitle: "Discover beautiful rooms, exceptional hospitality and memorable stays.",
    color: "#b45309",
    features: ["Luxury Rooms", "Fine Dining", "Easy Booking"]
  },
  {
    name: "Education Website",
    category: "Education",
    description: "A modern website for educational institutions.",
    brand: "EDUPOINT",
    title: "Learn Today. Lead Tomorrow.",
    subtitle: "Explore new opportunities and build the skills for your future.",
    color: "#4f46e5",
    features: ["Expert Courses", "Online Learning", "Student Support"]
  },
  {
    name: "Salon Website",
    category: "Beauty & Style",
    description: "A stylish website for beauty salons and studios.",
    brand: "BLUSH STUDIO",
    title: "Your Beauty. Your Style.",
    subtitle: "Discover personalised beauty services designed to make you feel confident.",
    color: "#db2777",
    features: ["Hair Styling", "Beauty Services", "Book Your Visit"]
  },
  {
    name: "Construction Website",
    category: "Construction",
    description: "A strong business website for construction companies.",
    brand: "BUILDPRO",
    title: "Building Dreams. Creating Landmarks.",
    subtitle: "Reliable construction solutions built on quality, trust and experience.",
    color: "#ca8a04",
    features: ["Modern Design", "Quality Construction", "Expert Team"]
  },
  {
    name: "Photography Website",
    category: "Photography",
    description: "A creative portfolio for photographers.",
    brand: "FRAME & FOCUS",
    title: "Every Picture Tells A Story",
    subtitle: "Capturing beautiful moments and turning them into lasting memories.",
    color: "#475569",
    features: ["Wedding Photography", "Portrait Sessions", "Creative Gallery"]
  }
];

// =====================================
// DISPLAY PROJECT CARDS
// =====================================

const projectGrid = document.getElementById("projectGrid");

function displayProjects() {
  if (!projectGrid) return;

  projectGrid.innerHTML = projects.map((project, index) => `
    <div class="project-card">
      <div class="project-image"
           style="background: linear-gradient(135deg, ${project.color}, #151923)">
        <div class="project-placeholder">${project.brand}</div>
      </div>

      <div class="project-info">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <button class="demo-btn" data-demo="${index}">
          View Demo ↗
        </button>
      </div>
    </div>
  `).join("");
}

// =====================================
// CREATE DEMO WEBSITE
// =====================================

function createDemoPage(project) {
  const features = project.features.map(feature => `
    <div class="demo-feature">
      <h3>${feature}</h3>
      <p>Discover professional services and quality experiences designed for you.</p>
    </div>
  `).join("");

  return `
    <div class="demo-page" style="--demo-color:${project.color}">

      <nav>
        <h2 style="color:${project.color}">${project.brand}</h2>

        <div>
          <a href="#demoHome" data-scroll="demoHome">Home</a>
          <a href="#demoServices" data-scroll="demoServices">Services</a>
          <a href="#demoAbout" data-scroll="demoAbout">About</a>
          <a href="#demoContact" data-scroll="demoContact">Contact</a>
        </div>
      </nav>

      <section class="demo-hero" id="demoHome"
        style="background:linear-gradient(120deg, #151923, ${project.color})">

        <p style="letter-spacing:3px;font-size:12px">
          WELCOME TO ${project.brand}
        </p>

        <h1>${project.title}</h1>

        <p>${project.subtitle}</p>

        <a href="#demoContact" class="demo-action" data-scroll="demoContact">
          Get Started ↗
        </a>
      </section>

      <section class="demo-section" id="demoServices">
        <h2>What We Offer</h2>
        <p>Explore our services and discover what makes us different.</p>

        <div class="demo-features">
          ${features}
        </div>
      </section>

      <section class="demo-section" id="demoAbout"
        style="background:#f5f5f5">

        <h2>About ${project.brand}</h2>

        <p>
          We believe in quality, creativity and excellent customer
          experiences. Our goal is to deliver solutions that make
          a difference.
        </p>
      </section>

      <section class="demo-section" id="demoContact">
        <h2>Let's Connect</h2>

        <p>
          Interested in working with us? Get in touch today.
        </p>

        <a class="demo-action"
           href="https://wa.me/918248717028"
           target="_blank">
          Contact Us ↗
        </a>
      </section>

      <footer class="demo-footer">
        © 2026 ${project.brand}. All Rights Reserved.
      </footer>

    </div>
  `;
}

// =====================================
// OPEN DEMO
// =====================================

const demoModal = document.getElementById("demoModal");
const demoContent = document.getElementById("demoContent");

let currentDemoIndex = null;

function showDemo(index, updateHistory = true) {
  if (!projects[index] || !demoModal || !demoContent) return;

  currentDemoIndex = index;

  demoContent.innerHTML = createDemoPage(projects[index]);

  demoModal.classList.add("active");
  document.body.style.overflow = "hidden";

  if (updateHistory) {
    if (!history.state || !history.state.apexDemo) {
      history.pushState(
        { apexDemo: true, demoIndex: index },
        "",
        "#demo-" + index
      );
    } else {
      history.replaceState(
        { apexDemo: true, demoIndex: index },
        "",
        "#demo-" + index
      );
    }
  }

  demoModal.scrollTop = 0;
}

function hideDemo() {
  if (!demoModal) return;

  demoModal.classList.remove("active");
  document.body.style.overflow = "";
  currentDemoIndex = null;
}

function closeDemo() {
  if (history.state && history.state.apexDemo) {
    history.back();
  } else {
    hideDemo();
  }
}

// =====================================
// DEMO BUTTON CLICK
// =====================================

if (projectGrid) {
  projectGrid.addEventListener("click", function(event) {
    const button = event.target.closest("[data-demo]");

    if (!button) return;

    const index = Number(button.dataset.demo);
    showDemo(index);
  });
}

// =====================================
// BROWSER BACK / FORWARD SUPPORT
// =====================================

window.addEventListener("popstate", function(event) {
  if (event.state && event.state.apexDemo) {
    showDemo(event.state.demoIndex, false);
  } else {
    hideDemo();
  }
});

// =====================================
// DEMO PAGE INTERNAL NAVIGATION
// =====================================

if (demoContent) {
  demoContent.addEventListener("click", function(event) {
    const link = event.target.closest("[data-scroll]");

    if (!link) return;

    event.preventDefault();

    const targetId = link.dataset.scroll;
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

// =====================================
// START WEBSITE
// =====================================

displayProjects();

console.log("APEXNODE website loaded successfully!");
